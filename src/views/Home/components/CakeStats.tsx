import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber,getBalanceNumber1 } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import BigNumber from 'bignumber.js/bignumber'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'


const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const circSupply1 = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const eggPrice = usePriceCakeBusd();
  const marketCap = eggPrice.times(circSupply1);
  const marketCapvalue = getBalanceNumber1(marketCap);
  
  // console.log("getBalanceNumber1(marketCap)", marketCapvalue)

  return (
    <StyledCakeStats className="bg-opacity">
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Farm Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Market Cap')}</Text>
          {getBalanceNumber1(marketCap) - burnedBalance  && <CardValue fontSize="14px" value={getBalanceNumber1(marketCap) - burnedBalance} />}
          {/* <CardValue fontSize="14px"  decimals={0} value={marketCapvalue} prefix="$" /> */}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total FARM Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total FARM Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New FARM/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={19} />
        </Row>
        
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
