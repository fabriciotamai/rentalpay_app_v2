import React, {useState} from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  PayText,
  OptionContent,
  OptionWrapper,
  Options,
  OptionInfos,
  OptionTitle,
  OptionName,
  RadioButton,
  RadioCheck,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function Pay() {
  const navigation = useNavigation();
  const [payMethod, setPayMethod] = useState('copyPaste');

  function handleBack() {
    navigation.goBack();
  }

  function handleSelectPayment() {
    if (payMethod === 'copyPaste') {
      navigation.navigate('PayCode');
    } else if (payMethod === 'qrcodeReader') {
      navigation.navigate('PayScanner');
    }
  }

  function handleSelectPay(method: 'copyPaste' | 'qrcodeReader') {
    setPayMethod(method);
  }
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

            <Title>Pague em real</Title>

            <Space />
          </Header>

          <PayText>Selecione a opção</PayText>
          <Options>
            <OptionContent onPress={() => handleSelectPay('copyPaste')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Pague via</OptionTitle>
                  <OptionName>Código Copia e cola</OptionName>
                </OptionInfos>
                <RadioButton>
                  {payMethod === 'copyPaste' && <RadioCheck />}
                </RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPay('qrcodeReader')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Pague via</OptionTitle>
                  <OptionName>Leitor QR Code</OptionName>
                </OptionInfos>
                <RadioButton>
                  {payMethod === 'qrcodeReader' && <RadioCheck />}
                </RadioButton>
              </OptionWrapper>
            </OptionContent>
          </Options>
        </Wrapper>
        <ContentButton>
          <Button
            title="Avançar"
            type="primary"
            onPress={handleSelectPayment}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
