import React from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
// import Clipboard from '@react-native-community/clipboard';
import {Clipboard} from 'react-native';

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
  QRCodeContent,
} from './styles';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import OrLogo from '../../../assets/icons/or_logo.svg';
import CopyIcon from '../../../assets/icons/copy_icon.svg';
import QrCodeImg from '../../../assets/icons/qrcode.svg';

export function DepositCryptoCode() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleDepositReminder() {
    navigation.navigate('DepositReminder');
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

          <Title>Depósito em cripto</Title>

          <Space />
        </Header>

        <Wrapper showsVerticalScrollIndicator={false}>
          <Options>
            <OptionContent>
              <OptionInfos>
                <OptionTitle>Contrato #124834</OptionTitle>
                <OptionName>Upper USD</OptionName>
              </OptionInfos>
            </OptionContent>
          </Options>
          <BalanceContent>
            <BalanceContent>
              <BalanceText>Saldo disponível</BalanceText>
              <BalanceValue>24.13456</BalanceValue>
            </BalanceContent>
          </BalanceContent>
          <SubTitle>Endereço</SubTitle>
          <InfoText>
            Envie somente Bitcoin (BTC) para este{'\n'}endereço de depósito.
            Enviar outro tipo{'\n'}de ativo poderá resultar na perda{'\n'}
            permanente dos seus fundos.
          </InfoText>
          <CodeContent>
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
          </CodeContent>
          <QRCodeContent>
            <QrCodeImg width={RFValue(160)} height={RFValue(160)} />
          </QRCodeContent>
        </Wrapper>
      </Content>
    </Container>
  );
}
