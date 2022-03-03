import React from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  Wrapper,
  CodeContent,
  DataContent,
  CodeText,
  CopyButtonContent,
  CopyButton,
  CopyText,
  QRCodeContent,
  ValueContent,
  SimbolText,
  ValueText,
  ButtonAdvanceContent,
} from './styles';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
// import Clipboard from '@react-native-community/clipboard';
import {Clipboard} from 'react-native';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import OrLogo from '../../../assets/icons/or_logo.svg';
import CopyIcon from '../../../assets/icons/copy_icon.svg';
import QrCodeImg from '../../../assets/icons/qrcode.svg';
import {Button} from '../../../components/Button';

export function ReceiverConfirm() {
  const navigation = useNavigation();

  function handleReceiver() {
    navigation.navigate('Receiver');
  }

  function handleReceived() {
    navigation.navigate('Received');
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
          <BackButtom onPress={handleReceiver}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Receba em Real</Title>

          <Space />
        </Header>

        <Wrapper>
          <CodeContent>
            <DataContent>
              <OrLogo />
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
            <QrCodeImg />
          </QRCodeContent>
          <ValueContent>
            <SimbolText>R$</SimbolText>
            <ValueText>200.00</ValueText>
          </ValueContent>
          <ButtonAdvanceContent>
            <Button
              title="Compartilhar Código"
              onPress={handleReceived}
              type="primary"
            />
          </ButtonAdvanceContent>
        </Wrapper>
      </Content>
    </Container>
  );
}
