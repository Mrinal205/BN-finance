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

import { Divide } from 'react-feather';
import FarmCard, { FarmWithStakedValue } from '../Farms/components/FarmCard/FarmCard'

import Table from '../Farms/components/FarmTable/FarmTable'
import { RowProps } from '../Farms/components/FarmTable/Row'
import { DesktopColumnSchema, ViewMode } from '../Farms/components/types'

import xyz from '../../test';
import IDOModal from './IDOModal';


const web3 = xyz.web3(); // new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

// const { account } = useWeb3React()

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
    }  account : any
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

const IDO: React.FC = () => {
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
  // const { account } = useWeb3React()
  const [sortOption, setSortOption] = useState('hot')

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  const [ onPresentSwapModal ] = useModal(
    <IDOModal account={123} /> ,
  )

  useEffect(() => {
    console.log('useEffect');
  }, [onPresentSwapModal])

  // const [ onPresentSwapModal ] = useModal(
  //   <IDOModal account={account} /> ,
  // )

  // const checkAllowance = () => {
  //   if(allowanceVal === '0') { return <Button >Approve</Button> }
  //   return <Button onClick={onPresentSwapModal} >Swap</Button> 
  // }

  return (
    <>
    <iframe width="1200" height="670" src="https://www.youtube.com/embed/DxMmjd-2WA8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
     {/* <IDOModal account={123} />  */}
    </>
  )
}

export default IDO

