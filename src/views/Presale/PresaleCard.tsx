import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton, IconButton, useModal, CalculateIcon, Button, useWalletModal } from '@pancakeswap/uikit'
import { Farm } from 'state/types'
import { getBscScanAddressUrl } from 'utils/bscscan'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import { getAddress } from 'utils/addressHelpers'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import useAuth from 'hooks/useAuth'
// import DetailsSection from './../Farms/components/FarmCard/DetailsSection'
// import CardHeading from './../Farms/components/FarmCard/FarmCard'
// import CardActionsContainer from './../Farms/components/FarmCard/CardActionsContainer'
// import ApyButton from './../Farms/components/FarmCard/ApyButton'
import ApyCalculatorModal from 'components/ApyCalculatorModal'

export interface FarmWithStakedValue extends Farm {
  apr?: number
  lpRewardsApr?: number
  liquidity?: BigNumber
  fee?: any
}

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

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  displayApr: string
  removed: boolean
  cakePrice?: BigNumber
  account?: string
}

const PresaleCard: React.FC<FarmCardProps> = ({ farm, displayApr, removed, cakePrice, account }) => {

  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

    // // console.log('farm......',farm);
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  const totalValueFormatted =
    farm.liquidity && farm.liquidity.gt(0)
      ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : ''

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : t('FARM')

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = getAddress(farm.lpAddresses)
  const isPromotedFarm = farm.token.symbol === 'FARM'

  return (
    <FCard isPromotedFarm={isPromotedFarm} className="bg-opacity">

      {isPromotedFarm && <StyledCardAccent />}
      <div className="cardHead">PREFARM PRESALE CONTRACT</div>
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{t('PREFARM Remaining: ')}: 0.000000</Text>
      
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>{t('Matic/PREFARM: ')}: 0.000000</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>{t('Your PREFARM balance:  ')}: 0.000000</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>{t('Your Matic balance:  ')}: 0.000000</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      {/* <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} /> */}
      <Divider />
   
      { !account ? <Button onClick={()=>{ onPresentConnectModal() }} >Unlock Button</Button> : <Button>Purchase</Button> } 
  
    </FCard>
  ) 
}

export default PresaleCard
