import React,{useEffect} from 'react';

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
  QrCodeView
} from './styles';
import {Alert, StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-community/clipboard';
// import {QRCode} from 'react-native-qrcode-svg'
// import {Clipboard} from 'react-native';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import OrLogo from '../../../assets/icons/or_logo.svg';
import CopyIcon from '../../../assets/icons/copy_icon.svg';
import QrCodeImg from '../../../assets/icons/qrcode.svg';
import {Button} from '../../../components/Button';

export function DepositCode({route}) {
  const {orpagInvoice, unMount} = route.params;

  const navigation = useNavigation();

  function handleReceiver() {
    navigation.goBack();
  }

  function handleDepositReminder() {
    navigation.navigate('DepositSuccess');


  

  }

  function handleCopy() {
    Clipboard.setString(orpagInvoice.url);
    Alert.alert('URL:copiada')
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
                {orpagInvoice?.url}
               
              </CodeText>
            </DataContent>
            <CopyButtonContent>
              <CopyButton onPress={handleCopy}>
                <CopyIcon />
                <CopyText>Copiar</CopyText>
              </CopyButton>
            </CopyButtonContent>
          </CodeContent>
          {/* <QRCodeContent>
           <QrCodeView
       size={200}
           value={orpagInvoice?.token}
           />

       
          </QRCodeContent> */}
          <ValueContent>
            <SimbolText>R$</SimbolText>
            <ValueText>{unMount}</ValueText>
          </ValueContent>
          <ButtonAdvanceContent>
            <Button
              title="Avançar"
              onPress={handleDepositReminder}
              type="primary"
            />
          </ButtonAdvanceContent>
        </Wrapper>
      </Content>
    </Container>
  );
}
