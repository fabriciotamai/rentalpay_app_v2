import React, {useEffect, useState} from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  InfoText,
  QrCodeContent,
  ImgContent,
  QrCodeText,
  CopyButtonContent,
  CopyButton,
  SubTitle,
  InputContent,
  ContentButton,
  QrCode
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';

import Input from '../../../components/Input';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import QrCodeImg from '../../../assets/icons/qrcode.svg';
import CopyIcon from '../../../assets/icons/copy_second_icon.svg';
import api from '../../../services/api';

interface TwoFa{
  twofa:string;

}

export function Setting2FA() {
  const [twofa, setTwofa] = useState<TwoFa[]>([]);
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handle2FASuccess() {
    navigation.navigate('Setting2FASuccess');
  }

  useEffect(() => {
    function handleGenerate2FA() {
      api.get<TwoFa[]>('api/generate/twoAuth', {}).then(response => {
        const {twoAuth} = response.data;
        
       setTwofa(twoAuth)
      });
    }
    handleGenerate2FA();
  }, []);


  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Wrapper>
          <Header>
            <BackButtom onPress={handleBack}>
              <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
            </BackButtom>

            <Title>Ativar 2FA</Title>

            <Space />
          </Header>

          <InfoText>
            Direcione a câmera do seu smartphone{'\n'}para o QR Code abaixo e
            aguarde até{'\n'}que seja realizada a leitura do mesmo.
          </InfoText>

          <QrCodeContent>
            <ImgContent>
            {/* <QrCode  value={twofa.image}/> */}


        
              
     
            
            
            </ImgContent>

            <CopyButtonContent>
              <QrCodeText>XWHQKQL8293918293H</QrCodeText>
              <CopyButton>
                <CopyIcon />
              </CopyButton>
            </CopyButtonContent>
          </QrCodeContent>
          <SubTitle>Infore seu código 2FA</SubTitle>
          <InputContent>
            <Input
              placeholder="Digite seu 2FA"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholderTextColor="#C9CACA"
            />
          </InputContent>
        </Wrapper>
        <ContentButton>
          <Button
            title="Confirmar verificação 2FA"
            type="primary"
            onPress={handle2FASuccess}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
