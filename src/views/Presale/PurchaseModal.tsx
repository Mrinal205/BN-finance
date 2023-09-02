import React, { useEffect, useCallback, useState } from 'react';
import { useWeb3React, Web3ReactProvider} from '@web3-react/core';
import useWeb3Provider from 'hooks/useWeb3Provider';
import { Modal, Text, LinkExternal, Flex, Box, Button, Input } from '@pancakeswap/uikit';
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization';
import SearchInput from 'components/SearchInput';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import Web3 from 'web3';
import PFarmTokenAbi from 'config/abi/PFarmToken.json';
import contracts from 'config/constants/contracts';
import xyz from '../../test';

const web3 = xyz.web3(); // new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545/'));

const myPFarmTokenAbi:any = PFarmTokenAbi;

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

const preFarmInstance = new web3.eth.Contract(myPFarmTokenAbi,contracts.preFarm[chainId]);

interface PurchaseModalProps {  
  onDismiss?: () => void
  account : any
  purchaseCallbackData ?: (data) => void
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

const PurchaseModal: React.FC<PurchaseModalProps> = ({ onDismiss, purchaseCallbackData }) => {

  const { t } = useTranslation();

  const { account, connector, activate, library } = useWeb3React();
  const [ purchaseInput, setPurcahseInput ] = useState('');
  const [maticBal, setMaticBal] = useState('0');
  const [ isDoingTran, setIsDoingTran ] = useState(false);
  // const { getBalance } = useWeb3Provider();

  const getMyBalance = useCallback(async() => {
    const maticBalance = await web3.eth.getBalance(account);
    const maticEtherValue = Number(Web3.utils.fromWei(maticBalance, 'ether')).toFixed(4);
    setMaticBal(maticEtherValue);
    },[account]);

  useEffect(() => {
    // console.log('library',library);
    // console.log('preFarmInstance:',preFarmInstance);
    getMyBalance();
    // console.log('xyz:',xyz);
  }, [library, getMyBalance]);

  const confirmNow = async() => {
    if (purchaseInput) {
        try {
            const sendAmount = web3.utils.toWei(purchaseInput,'ether');
            setIsDoingTran(true);
            const res = await preFarmInstance.methods.buyPFarm().send({from : account , value : sendAmount });
            // console.log('confirmNow res:',res);
            purchaseCallbackData(res.status);
            onDismiss(); 
            setIsDoingTran(false);   
        } catch (error) {
            // onDismiss(); 
            setIsDoingTran(false); 
        }
    } 
  }
  
    return (
        <Modal title={t('Buy PreFarm with matic')} onDismiss={ isDoingTran ? null : onDismiss }>
        <Grid>
          <GridItem>
            <h4 style={{ color: "white", marginBottom:15 }} >Purcahse</h4>
          <ControlStretch style={{ marginRight:20 }} >
                <Input value={purchaseInput} onChange={(e)=>{ setPurcahseInput(e.target.value); }} placeholder="0" />
              </ControlStretch>
          </GridItem>
          <GridItem>
          <h4 style={{ color: "white", marginBottom:15,  }} >Balance: {maticBal}</h4>
          <Button disabled={isDoingTran} onClick={()=>{ setPurcahseInput(maticBal.toString()) }} >Max</Button>
          </GridItem>
          <GridItem>
            <div style={{marginBottom:20}} >&nbsp;</div>
            <h2 style={{ float:'right' }} className="matClass">MATIC</h2>
          </GridItem>
          {/* 7 day row */}
          <GridItem className="button-can">
          <Button disabled={isDoingTran} onClick={onDismiss} >Cancel</Button>
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

export default PurchaseModal;
