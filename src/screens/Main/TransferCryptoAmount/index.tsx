import React,{useState} from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
// import Clipboard from '@react-native-community/clipboard';
import {Clipboard} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/storeConfig';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  Wrapper,
  Options,
  OptionContent,
  OptionInfos,
  OptionTitle,
  OptionName,
  BalanceContent,
  BalanceText,
  BalanceValue,
  SubTitle,
  InfoText,
  CodeContent,
  DataContent,
  CodeLabel,
  CodeText,
  CopyButtonContent,
  CopyButton,
  CopyText,
  InputWalletContent,
  InputContent,
  InputLabel,
  FeeContent,
  FeeText,
  FeeValue,
  ContentButton,
} from './styles';

import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import CopyIcon from '../../../assets/icons/copy_icon.svg';
import Input from '../../../components/Input';

export function TransferCryptoAmount({route}) {
  const {totalBalance} = useSelector((state: RootState) => state.user)
  const {currencysSelect} = route.params;
  const navigation = useNavigation();
  const [address, setAddress] = useState<string>('');

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferCrypto2FA() {
    navigation.navigate('TransferCrypto2FA');
  }

  function handleCopy() {
    Clipboard.setString('testee2');
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header>
          <BackButtom onPress={handleBack}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Transferir em cripto</Title>

          <Space />
        </Header>

        <Wrapper showsVerticalScrollIndicator={false}>
          <Options>
            <OptionContent>
              <OptionInfos>
                <OptionTitle>Wallet</OptionTitle>
                <OptionName>{currencysSelect}</OptionName>
              </OptionInfos>
            </OptionContent>
          </Options>
          <BalanceContent>
            <BalanceContent>
              <BalanceText>Saldo disponível</BalanceText>
              <BalanceValue>{Number(totalBalance.btc).toFixed(8)}</BalanceValue>
            </BalanceContent>
          </BalanceContent>
          <SubTitle>Endereço</SubTitle>
          <InfoText>
            Envie somente Bitcoin (BTC) para este{'\n'}endereço de depósito.
            Enviar outro tipo{'\n'}de ativo poderá resultar na perda{'\n'}
            permanente dos seus fundos.
          </InfoText>
          {/* <CodeContent>
            <DataContent>
              <CodeLabel>Copia e cola</CodeLabel>
              <CodeText numberOfLines={1} ellipsizeMode="middle">
                9fntS2du4f8X8g7868vw6S
              </CodeText>
            </DataContent>
            <CopyButtonContent>
              <CopyButton onPress={handleCopy}>
                <CopyIcon />
                <CopyText>Copiar</CopyText>
              </CopyButton>
            </CopyButtonContent>
          </CodeContent> */}
          <InputWalletContent>
            <Input
              placeholder="Informe o endereço para saque"
              autoCorrect={false}
              value={address}
              onChangeText={setAddress}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#C9CACA"
            />
          </InputWalletContent>
          <InputContent>
            <InputLabel>Valor à retirar</InputLabel>
            <Input
              placeholder="0.909933"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#C9CACA"
            />
          </InputContent>
          <FeeContent>
            <FeeContent>
              <FeeText>Taxa de transação</FeeText>
              <FeeValue>0,5%</FeeValue>
            </FeeContent>
          </FeeContent>
          <InputContent>
            <InputLabel>Valor total</InputLabel>
            <Input
              placeholder="1.234455"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#C9CACA"
            />
          </InputContent>
          <ContentButton>
            <Button
              title="Avançar"
              type="primary"
              onPress={handleTransferCrypto2FA}
            />
          </ContentButton>
        </Wrapper>
      </Content>
    </Container>
  );
}
