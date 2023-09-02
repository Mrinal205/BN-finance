import React, { useEffect, useCallback, useState } from 'react';
import { useWeb3React, Web3ReactProvider} from '@web3-react/core';
import { Modal, Text, LinkExternal, Flex, Box, Button, Input } from '@pancakeswap/uikit';
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization';
import Web3 from 'web3';
import FarmRedeemAbi from 'config/abi/FarmRedeem.json';
import PFarmTokenAbi from 'config/abi/PFarmToken.json';
import contracts from 'config/constants/contracts';
import xyz from '../../test'; 

const web3 = xyz.web3(); // new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

const myPFarmTokenAbi:any = FarmRedeemAbi;

const myPFarmTokenAbi2:any = PFarmTokenAbi;

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

const preFarmReedemInstance = new web3.eth.Contract(myPFarmTokenAbi,contracts.preFarmReedem[chainId]);

const preFarmInstance = new web3.eth.Contract(myPFarmTokenAbi2,contracts.preFarm[chainId]);

interface SwapModalProps { 
  onDismiss?: () => void
  account : any
  swapCallbackData ?: (data) => void
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 12px;
`

const GridItem = styled.div``

const GridHeaderItem = styled.div`
  max-width: 180px;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }

  li::before {
    content: '•';
    margin-right: 4px;
  }

  li::marker {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`
const ControlStretch = styled(Flex)`
  > div {
    flex: 1;
  }
`

const SwapModal: React.FC<SwapModalProps> = ({ onDismiss, swapCallbackData }) => {

  const { t } = useTranslation();

  const { account, connector, activate, library } = useWeb3React();
  const [preLithBal, setPreLithBal] = useState(0);
  const [ purchaseInput, setPurcahseInput ] = useState('');
  const [ isDoingTran, setIsDoingTran ] = useState(false);

  // const { getBalance } = useWeb3Provider();

  const getMyBalance = useCallback(async() => {
    const preLithiumBalance = await preFarmInstance.methods.balanceOf(account).call();
    const preLithiumBalanceEthValue = Number(Web3.utils.fromWei(preLithiumBalance, 'ether'));
    setPreLithBal(preLithiumBalanceEthValue);
  },[account]);

  useEffect(() => {
    // console.log('preFarmReedemInstance:',preFarmReedemInstance);
    getMyBalance();
  }, [library, getMyBalance]);

  const confirmNow = async() => {
    if (purchaseInput) {
        try {
            const sendAmount = web3.utils.toWei(purchaseInput,'ether');
            setIsDoingTran(true);
            const res = await preFarmReedemInstance.methods.swapPFarmForFarm(sendAmount).send({from : account});
            // console.log('confirmNow res:',res);
            swapCallbackData(res.status);
            onDismiss();
            setIsDoingTran(false);   
        } catch (error) {
            setIsDoingTran(false);    
        }
    }
  }
  
    return (
        <Modal title={t('Buy Farm')} onDismiss={ isDoingTran ? null : onDismiss } >
        <Grid>
          <GridItem>
            <h4 style={{ color: "white", marginBottom:15 }} >Purcahse</h4>
          <ControlStretch style={{ marginRight:20 }} >
                <Input value={purchaseInput} onChange={(e)=>{ setPurcahseInput(e.target.value); }} placeholder="0" />
              </ControlStretch>
          </GridItem>
          <GridItem>
          <h4 style={{ color: "white", marginBottom:15,  }} >Balance: {preLithBal}</h4>
          <Button disabled={isDoingTran} onClick={()=>{ setPurcahseInput(preLithBal.toString()) }} >Max</Button>
          </GridItem>
          <GridItem>
            <div style={{marginBottom:20}} >&nbsp;</div>
            <h2 style={{ float:'right' }} className="matClass">PFarm</h2>
          </GridItem>
          {/* 7 day row */}
          <GridItem className="button-can">
          <Button onClick={isDoingTran ? null : onDismiss} >Cancel</Button>
          </GridItem>
          <GridItem className="button-can">
            <div>&nbsp;</div>
          </GridItem>
          <GridItem className="button-can">
          <Button disabled={isDoingTran} onClick={confirmNow} className="cardback" >
            {t('Confirm')}
          </Button>
          </GridItem>
        </Grid>
      </Modal>
    )
}

export default SwapModal;
