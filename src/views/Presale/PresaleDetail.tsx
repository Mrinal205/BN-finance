import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { harvestFarm } from 'utils/calls'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from '../Home/components/CakeHarvestBalance'
import CakeWalletBalance from '../Home/components/CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  // background-image: url('/images/cake-bg.svg');
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const PresaleDetail = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [balancesWithValue, masterChefContract, toastError, t])
  return (
    <StyledFarmStakingCard className="backgroundCarda" >
      <CardBody className="presale-lineheight" style={{ paddingTop: '0px'}}>
      
        {/* <h1>Brans Presale</h1> */}
        <Heading scale="xl" mb="24px">
        {t('Time & Date :')}
        </Heading>
        <h2><span className="presale-head presale-title">Presale Start :  </span>  <span className="presale-ans fontWeightText">7/18, 1030 GMT (approx), block 16995000 7/18, 1030 GMT (approx), block 16995000</span></h2>
        <h2><span className="presale-head presale-title">Presale end : </span> <span className="presale-ans fontWeightText">7/18, 1030 GMT (approx), block 16995000</span></h2>
        <h2><span className="presale-head presale-title">Liquidity provided : </span><span className="presale-ans fontWeightText"> 7/18, 1030 GMT (approx), block 16995000</span></h2>
        <h2><span className="presale-head presale-title">Swap to farming token : </span></h2>
        <h2><span className="presale-head presale-title">Farming start : </span></h2>
        <h2><span className="presale-head presale-title">Total Raise : </span></h2><br/>

        <Heading scale="xl" mb="24px">
        {t('How to :')}
        </Heading>
        <h2> <span className="presale-ans fontWeightText">A) Purchase PREFARM with unwrapped MATIC using the PREFARM PRESALE CONTRACT.</span></h2>
        <h2><span className="presale-ans fontWeightText">B) Swap PREFARM for FARM using the FARM REDEEM CONTRACT.</span></h2>
        
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default PresaleDetail

