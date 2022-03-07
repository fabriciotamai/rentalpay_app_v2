import React, {useState, useEffect} from 'react';

import {
  Container,
  TopContent,
  SpaceCard,
  LinkCardButtom,
  LinkCardText,
  ShowButton,
  Icon,
  Title,
  Balance,
  TextCard,
  CardButtonsContent,
  FirstButtonContent,
  FirstButton,
  FirstButtonText,
  SecondButtonContent,
  SecondButton,
  SecondButtonText,
  ThirdButtonContent,
  ThirdButton,
  ThirdButtonText,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {useUser} from '../../hooks/useGetRepo';

import ArrowDownIcon from '../../assets/icons/arrow_down.svg';
import TranferIcon from '../../assets/icons/transfer_icon.svg';
import ArrowUpIcon from '../../assets/icons/arrow_up.svg';
import WalletIcon from '../../assets/icons/wallet.svg';
import ExtractIcon from '../../assets/icons/extract_icon.svg';

import BgCardImg from '../../assets/imgs/bg_card.png';

import {useSelector} from 'react-redux';
import {RootState} from '../../store/storeConfig';

interface OptionsProps {
  option_left: string;
  option_center: string;
  option_right: string;
  type: string;
  typeTransaction: boolean;
  handlePress: () => void;
}

export function CardHome({
  option_left,
  option_center,
  option_right,
  type,
  handlePress,
  typeTransaction,
}: OptionsProps) {
  const navigation = useNavigation();
  const {totalBalance} = useSelector((state: RootState) => state.user);

  const [show, setShow] = useState(true);

  function handleButtonLeft() {
    if (option_left === 'deposit' && !typeTransaction) {
      navigation.navigate('DepositReminder');
    } else if (option_left === 'deposit' && typeTransaction) {
      navigation.navigate('Receiver');
    } else if (option_left === 'deposit' && !typeTransaction) {
      navigation.navigate('DepositCrypto');
    }
  }

  function handleButtonCenter() {
    if (type === 'Home') {
      navigation.navigate('Pay');
    } else if (type === 'Transaction' && !typeTransaction) {
      navigation.navigate('Withdraw');
    } else if (type === 'Transaction' && typeTransaction) {
      navigation.navigate('TransferCrypto');
    }
  }

  function handleButtonRight() {
    if (type === 'Home') {
      // changeTypeCurrency('CRYPTO');
      navigation.navigate('TransactiontTab');
    } else if (type === 'Transaction' && !typeTransaction) {
      navigation.navigate('Transfer');
    } else if (type === 'Transaction' && typeTransaction) {
      navigation.navigate('TransactionCryptoExtract');
    }
  }

  function getButtonLeft() {
    if (type === 'Home') {
      return (
        <>
          <ArrowDownIcon width={RFValue(23)} height={RFValue(23)} />
          <FirstButtonText>Receber</FirstButtonText>
        </>
      );
    } else if (type === 'Transaction') {
      return (
        <>
          <ArrowDownIcon width={RFValue(23)} height={RFValue(23)} />
          <FirstButtonText>Depositar</FirstButtonText>
        </>
      );
    } else {
      return (
        <>
          <ArrowDownIcon width={RFValue(23)} height={RFValue(23)} />
          <FirstButtonText>Receber</FirstButtonText>
        </>
      );
    }
  }
 

  function getButtonCenter() {
    if (!typeTransaction && type === 'Home') {
    
      return (
        <>
          <ArrowUpIcon width={RFValue(23)} height={RFValue(23)} />
          <SecondButtonText>Pagar</SecondButtonText>
        </>
      );
    } else if (typeTransaction && type === 'Transaction') {
      return (
        <>
          <ArrowUpIcon width={RFValue(23)} height={RFValue(23)} />
          <SecondButtonText>Transferir</SecondButtonText>
        </>
      );
    } else if (typeTransaction && type === 'Transaction') {
      return (
        <>
          <ArrowUpIcon width={RFValue(23)} height={RFValue(23)} />
          <SecondButtonText>Saque</SecondButtonText>
        </>
      );
    } else {
      return (
        <>
          <ArrowUpIcon width={RFValue(23)} height={RFValue(23)} />
          <SecondButtonText>Saque</SecondButtonText>
        </>
      );
    }
  }

  function getButtonRight() {
    if (type === 'Home') {
      return (
        <>
          <WalletIcon width={RFValue(23)} height={RFValue(23)} />
          <ThirdButtonText>Crypto</ThirdButtonText>
        </>
      );
    } else if (type === 'Transaction' && !typeTransaction ) {
      return (
        <>
          <TranferIcon width={RFValue(23)} height={RFValue(23)} />
          <ThirdButtonText>Transferir</ThirdButtonText>
        </>
      );
    } else if (type === 'Transaction' && typeTransaction) {
      return (
        <>
          <ExtractIcon width={RFValue(23)} height={RFValue(23)} />
          <ThirdButtonText>Extrato</ThirdButtonText>
        </>
      );
    } else {
      return (
        <>
          <WalletIcon width={RFValue(23)} height={RFValue(23)} />
          <ThirdButtonText>Crypto</ThirdButtonText>
        </>
      );
    }
  }

  return (
    <Container source={BgCardImg}>
      <TopContent>
        <LinkCardButtom onPress={handlePress}>
          {type === 'Home' ? (
            <LinkCardText>
           
            </LinkCardText>
          ) : (
            <LinkCardText>
              {typeTransaction ? 'Mudar para real' : 'Mudar para cripto'}
            </LinkCardText>
          )}
        </LinkCardButtom>

        <ShowButton onPress={() => setShow(!show)}>
          {show ? (
            <Icon name="eye" color="#000000" size={RFValue(16)} />
          ) : (
            <Icon name="eye-off" color="#000000" size={RFValue(16)} />
          )}
        </ShowButton>
      </TopContent>
      {!typeTransaction ? (
        <>
          <Title>Saldo em Real</Title>
          {show ? <Balance>R$ {Number(totalBalance?.brl).toFixed(2).replace('.', ',')}  </Balance> : <Balance>*****</Balance>}
        </>
      ) : (
        <>
          <Title>Saldo Crypto {Number(totalBalance?.btc).toFixed(8)}</Title>

          {show ? (
            <Balance>
              {Number(totalBalance?.btc).toFixed(8)}
            </Balance>
          ) : (
            <Balance>*****</Balance>
          )}
        </>
      )}
      {typeTransaction && type === 'Transaction' ? (
        <TextCard>
          Referente aos valores em real recebidos{'\n'}em sua plataforma Rental
          Pay{'\n'}e disponíveis para ações.
        </TextCard>
      ) : (
        <TextCard>
          Referente a soma dos saldos em wallet e{'\n'}convertidos para BRL, de
          acordo com{'\n'}cotação.
        </TextCard>
      )}

      <CardButtonsContent>
        <FirstButtonContent>
          <FirstButton onPress={handleButtonLeft}>
            {getButtonLeft()}
          </FirstButton>
        </FirstButtonContent>

        <SecondButtonContent>
          <SecondButton onPress={handleButtonCenter}>
            {getButtonCenter()}
          </SecondButton>
        </SecondButtonContent>

        <ThirdButtonContent>
          <ThirdButton onPress={handleButtonRight}>
            {getButtonRight()}
          </ThirdButton>
        </ThirdButtonContent>
      </CardButtonsContent>
    </Container>
  );
}
