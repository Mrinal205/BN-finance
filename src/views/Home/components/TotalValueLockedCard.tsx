import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
//   const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  const tvl = useTotalValue();
  // console.log("tvl",tvl)
  

  return (
    <StyledTotalValueLockedCard className="bg-opacity">
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <Heading scale="xl">{`$${tvl.dp(4)}`}</Heading>
            <Text color="textSubtle">{t('Across all LPs and Syrup Pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
