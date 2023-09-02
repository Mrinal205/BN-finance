import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom'
import { ethers } from 'ethers'
import Web3 from 'web3';
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth';
import { Image, Heading, RowType, Toggle, Text, Button, useModal, useWalletModal, Flex } from '@pancakeswap/uikit'
import { ChainId } from '@pancakeswap/sdk'
import styled, { keyframes } from 'styled-components'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import { useFarms, usePollFarmsData, usePriceCakeBusd } from 'state/hooks'
import usePersistState from 'hooks/usePersistState'
import { Farm } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import { getFarmApr } from 'utils/apr'
import { orderBy } from 'lodash'
import isArchivedPid from 'utils/farmHelpers'
import { latinise } from 'utils/latinise'
import PageHeader from 'components/PageHeader';
import PFarmTokenAbi from 'config/abi/PFarmToken.json';
// import
import contracts from 'config/constants/contracts';
import Select, { OptionProps } from 'components/Select/Select'
import FarmCard, { FarmWithStakedValue } from '../Farms/components/FarmCard/FarmCard'
import PresaleCard from './PresaleCard'
import Table from '../Farms/components/FarmTable/FarmTable'
import { RowProps } from '../Farms/components/FarmTable/Row'
import { DesktopColumnSchema, ViewMode } from '../Farms/components/types'
import PresaleDetail from './PresaleDetail';
import PurchaseModal from './PurchaseModal';
import SwapModal from './SwapModal';
import xyz from '../../test';

const web3 = xyz.web3(); // new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

const myPFarmTokenAbi:any = PFarmTokenAbi;

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

const preFarmInstance = new web3.eth.Contract(myPFarmTokenAbi,contracts.preFarm[chainId]);

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const LabelWrapper = styled.div`
  > ${Text} {
    font-size: 12px;
  }
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    padding: 0;
  }
`

const AccentGradient = keyframes`  
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`

const StyledCardAccent = styled.div`
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.colors.primaryBright}, ${theme.colors.secondary})`};
  background-size: 400% 400%;
  animation: ${AccentGradient} 2s linear infinite;
  border-radius: 32px;
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -3px;
  left: -1px;
  z-index: -1;
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
  
`

const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`
const NUMBER_OF_FARMS_VISIBLE = 12

const FCard = styled.div<{ isPromotedFarm: boolean }>`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: ${({ theme, isPromotedFarm }) => (isPromotedFarm ? '31px' : theme.radii.card)};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const getDisplayApr = (cakeRewardsApr?: number, lpRewardsApr?: number) => {
  if (cakeRewardsApr && lpRewardsApr) {
    return (cakeRewardsApr + lpRewardsApr).toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  if (cakeRewardsApr) {
    return cakeRewardsApr.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }
  return null
}

const Presale: React.FC = () => {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { data: farmsLP, userDataLoaded } = useFarms()
  const cakePrice = usePriceCakeBusd()
  const [query, setQuery] = useState('');
  const [maticPreVal, setMaticPreVal] = useState('0');
  const [preLithBal, setPreLithBal] = useState(0);
  const [maticBal, setMaticBal] = useState('0');
  const [preLitRemBal, setPreLitRemBal] = useState(0);
  const [allowanceVal, setAllowanceVal] =  useState('0');
  const [viewMode, setViewMode] = usePersistState(ViewMode.TABLE, { localStorageKey: 'pancake_farm_view' })
  const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  usePollFarmsData(isArchived)

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded
  const userDataReady = !account || (!!account && userDataLoaded)

  const [stakedOnly, setStakedOnly] = useState(!isActive)
  useEffect(() => {
    setStakedOnly(!isActive)
  }, [isActive])

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X' && !isArchivedPid(farm.pid))
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X' && !isArchivedPid(farm.pid))
  const archivedFarms = farmsLP.filter((farm) => isArchivedPid(farm.pid))

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedInactiveFarms = inactiveFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const stakedArchivedFarms = archivedFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  ) 

  const purchaseData = useCallback(async() => {
    try {

      // console.log('account',account);

      const maticPreLithium = await preFarmInstance.methods.salePriceE35().call();
      const ethValue = Number(Web3.utils.fromWei(maticPreLithium, 'ether'));
      const ethValue2 = (Number(Web3.utils.fromWei(ethValue.toString(), 'ether')) * 10).toFixed(4);
      setMaticPreVal(ethValue2);

      if(account) {
        const preLithiumBalance = await preFarmInstance.methods.balanceOf(account).call();
        const preLithiumBalanceEthValue = Number(Web3.utils.fromWei(preLithiumBalance, 'ether'));
        setPreLithBal(preLithiumBalanceEthValue);

        const maticBalance = await web3.eth.getBalance(account);
        const maticEtherValue = Number(Web3.utils.fromWei(maticBalance, 'ether')).toFixed(4);
        setMaticBal(maticEtherValue);

        const preLithiumRemaingBal = preLithiumBalance;
        const preLithiumRemaingBalethValue = Number(Web3.utils.fromWei(preLithiumRemaingBal, 'ether'));
        // console.log('preLithiumRemaingBalethValue:',preLithiumRemaingBalethValue);

        setPreLitRemBal(preLithiumRemaingBalethValue);
      }

    } catch (error) {
      // console.log(error); 
    }
  },[account]);

  const getAllownes = useCallback(async() => {
    if(account) {
      const allowanceRes =  await preFarmInstance.methods.allowance(account, contracts.preFarmReedem[chainId]).call();

      // console.log('allowanceRes:',allowanceRes);
      setAllowanceVal(allowanceRes);
    }
  },[account]);

  // const getChainId = useCallback(async() => {
  //   // console.log('chainId:',parseInt(process.env.REACT_APP_CHAIN_ID, 10));
  // },[]);

  useEffect(() => {
    purchaseData();
    getAllownes();
    // getChainId();
  }, [purchaseData, getAllownes]);

  const farmsList = useCallback(
    (farmsToDisplay: Farm[]): FarmWithStakedValue[] => {
      let farmsToDisplayWithAPR: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.lpTotalInQuoteToken || !farm.quoteToken.busdPrice) {
          return farm
        }
        const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
        const { cakeRewardsApr, lpRewardsApr } = isActive
          ? getFarmApr(new BigNumber(farm.poolWeight), cakePrice, totalLiquidity, farm.lpAddresses[ChainId.MAINNET])
          : { cakeRewardsApr: 0, lpRewardsApr: 0 }

        return { ...farm, apr: cakeRewardsApr, lpRewardsApr, liquidity: totalLiquidity }
      })

      if (query) {
        const lowercaseQuery = latinise(query.toLowerCase())
        farmsToDisplayWithAPR = farmsToDisplayWithAPR.filter((farm: FarmWithStakedValue) => {
          return latinise(farm.lpSymbol.toLowerCase()).includes(lowercaseQuery)
        })
      }
      return farmsToDisplayWithAPR
    },
    [cakePrice, query, isActive],
  )

  const handleChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [numberOfFarmsVisible, setNumberOfFarmsVisible] = useState(NUMBER_OF_FARMS_VISIBLE)
  const [observerIsSet, setObserverIsSet] = useState(false)

  const farmsStakedMemoized = useMemo(() => {
    let farmsStaked = []

    const sortFarms = (farms: FarmWithStakedValue[]): FarmWithStakedValue[] => {
      switch (sortOption) {
        case 'apr':
          return orderBy(farms, (farm: FarmWithStakedValue) => farm.apr + farm.lpRewardsApr, 'desc')
        case 'multiplier':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.multiplier ? Number(farm.multiplier.slice(0, -1)) : 0),
            'desc',
          )
        case 'earned':
          return orderBy(
            farms,
            (farm: FarmWithStakedValue) => (farm.userData ? Number(farm.userData.earnings) : 0),
            'desc',
          )
        case 'liquidity':
          return orderBy(farms, (farm: FarmWithStakedValue) => Number(farm.liquidity), 'desc')
        default:
          return farms
      }
    }

    if (isActive) {
      farmsStaked = stakedOnly ? farmsList(stakedOnlyFarms) : farmsList(activeFarms)
    }
    if (isInactive) {
      farmsStaked = stakedOnly ? farmsList(stakedInactiveFarms) : farmsList(inactiveFarms)
    }
    if (isArchived) {
      farmsStaked = stakedOnly ? farmsList(stakedArchivedFarms) : farmsList(archivedFarms)
    }

    return sortFarms(farmsStaked).slice(0, numberOfFarmsVisible)
  }, [
    sortOption,
    activeFarms,
    farmsList,
    inactiveFarms,
    archivedFarms,
    isActive,
    isInactive,
    isArchived,
    stakedArchivedFarms,
    stakedInactiveFarms,
    stakedOnly,
    stakedOnlyFarms,
    numberOfFarmsVisible,
  ])

  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  useEffect(() => {
    const showMoreFarms = (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setNumberOfFarmsVisible((farmsCurrentlyVisible) => farmsCurrentlyVisible + NUMBER_OF_FARMS_VISIBLE)
      }
    }

    if (!observerIsSet) {
      const loadMoreObserver = new IntersectionObserver(showMoreFarms, {
        rootMargin: '0px',
        threshold: 1,
      })
      loadMoreObserver.observe(loadMoreRef.current)
      setObserverIsSet(true)
    }
  }, [farmsStakedMemoized, observerIsSet])

  const rowData = farmsStakedMemoized.map((farm) => {
    const { token, quoteToken } = farm
    const tokenAddress = token.address
    const quoteTokenAddress = quoteToken.address
    const lpLabel = farm.lpSymbol && farm.lpSymbol.split(' ')[0].toUpperCase().replace('PANCAKE', '')

    const row: RowProps = {
      apr: {
        value: getDisplayApr(farm.apr, farm.lpRewardsApr),
        multiplier: farm.multiplier,
        lpLabel,
        tokenAddress,
        quoteTokenAddress,
        cakePrice,
        originalValue: farm.apr,
      },
      farm: {
        label: lpLabel,
        pid: farm.pid,
        token: farm.token,
        quoteToken: farm.quoteToken,
      },
      earned: {
        earnings: getBalanceNumber(new BigNumber(farm.userData.earnings)),
        pid: farm.pid,
      },
      liquidity: {
        liquidity: farm.liquidity,
      },
      fee: {
        fee: farm.fee,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      details: farm,

    }

    return row
  })

  const renderContent = (): JSX.Element => {
    if (viewMode === ViewMode.TABLE && rowData.length) {
      const columnSchema = DesktopColumnSchema

      const columns = columnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case 'farm':
              return b.id - a.id
            case 'apr':
              if (a.original.apr.value && b.original.apr.value) {
                return Number(a.original.apr.value) - Number(b.original.apr.value)
              }

              return 0
            case 'earned':
              return a.original.earned.earnings - b.original.earned.earnings
            default:
              return 1
          }
        },
        sortable: column.sortable,
      }))

      return <Table data={rowData} columns={columns} userDataReady={userDataReady} />
    }

    return (
      <div>
        <FlexLayout >
          <Route exact path={`${path}`}>
            {farmsStakedMemoized.map((farm) => (
              <PresaleCard
                key={farm.pid}
                farm={farm}
                displayApr={getDisplayApr(farm.apr, farm.lpRewardsApr)}
                cakePrice={cakePrice}
                account={account}
                removed={false}
              />
            ))}
          </Route>
        </FlexLayout>
      </div>
    )
  }

  const handleSortOptionChange = (option: OptionProps): void => {
    setSortOption(option.value)
  }
  
  const approveFun = async() => {
    // console.log('preFarmInstance:',preFarmInstance);

    const res = await preFarmInstance.methods.approve(contracts.preFarmReedem[chainId], ethers.constants.MaxUint256).send({ from : account });
    // console.log('approveFun res:',res);
    getAllownes();
  }

  const purchaseCallbackData = (data) => {
    // console.log('purchaseCallbackData data:',data);
    if(data) {
      purchaseData();
    }
  }

  const swapCallbackData = (data) => {
    // console.log('swapCallbackData data:',data);
    if(data) {
      purchaseData();
    }
  }

  const [ onPresentSwapModal ] = useModal(
    <SwapModal swapCallbackData={swapCallbackData} account={account} /> ,
  )

  const [ onPresentPurchaseModal ] = useModal(
    <PurchaseModal purchaseCallbackData={purchaseCallbackData} account={account} /> ,
  )

  const checkAllowance = () => {
    if(allowanceVal === '0') { return <Button onClick={approveFun} >Approve</Button> }
    return <Button onClick={onPresentSwapModal} >Swap</Button> 
  }

  return (
    <>
<div className="backbg">     
        <Heading as="h1" scale="xxl" color="primanry" mb="24px" className="head_title">
          {t('Presale')}
        </Heading>
      <Page >
        <PresaleDetail />
        <div >
          <FlexLayout >

            <FCard isPromotedFarm style={{ background: 'rgba(21,21,21,.6)' }} className="cardWidth">
              <StyledCardAccent />
              <div className="cardHead">PREFARM PRESALE CONTRACT</div>
              <Flex justifyContent="space-between" alignItems="center">
                <Text className="presale_tile">{t('PREFARM Remaining: ')} {preLitRemBal}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text className="presale_tile">{t('PREFARM/Matic: ')} {maticPreVal}</Text>
                {/* <Text bold>Cake</Text> */}
              </Flex>
              <Flex justifyContent="space-between">
                <Text className="presale_tile">{t('Your PREFARM balance:  ')} {preLithBal}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text className="presale_tile">{t('Your Matic balance:  ')} {maticBal}</Text>
                {/* <Text bold>Cake</Text> */}
              </Flex>
              <Divider />
              {!account ? <Button onClick={() => { onPresentConnectModal() }} >Unlock Wallet</Button> : <Button onClick={() => { onPresentPurchaseModal() }} >Purchase</Button>}
            </FCard>

            <FCard isPromotedFarm style={{ background: 'rgba(21,21,21,.6)' }} className="cardWidth">
              <StyledCardAccent />
              <div className="cardHead">PREFARM PRESALE CONTRACT</div>
              <Flex justifyContent="space-between" alignItems="center">
                <Text className="presale_tile">{t('Your PREFARM Balance: ')} {preLithBal}</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text className="presale_tile">{t('You can swap for up to: ')} {preLithBal}</Text>
                {/* <Text bold>Cake</Text> */}
              </Flex>
              <Flex justifyContent="space-between">
                <Text className="presale_tile">{t('Rate:  ')} 1 : 1 Swap</Text>
              </Flex>
              <Flex justifyContent="space-between">
                <Text className="presale_tile">{t('Your Matic balance: ')} {maticBal}</Text>
                <br />
                {/* <Text bold>Cake</Text> */}
              </Flex>
              <Divider />
               { !account ? <Button onClick={() => { onPresentConnectModal() }} >Unlock Wallet</Button> :  checkAllowance() } 
            </FCard>
          </FlexLayout>
        </div>
        <div ref={loadMoreRef} />
        <StyledImage src="/images/decorations/3dpan.png" alt="Pancake illustration" width={460} height={103} />
      </Page>
</div>
    </>
  )
}

export default Presale

