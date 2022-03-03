import React, {useState} from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  SelectPayText,
  SelectPaySubText,
  ValueContent,
  SimbolText,
  ValueText,
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

export function SelectPayment() {
  const navigation = useNavigation();
  const [payment, setPayment] = useState('brl');

  function handleBack() {
    navigation.goBack();
  }

  function handlePayConfirm() {
    if (payment === 'brl') {
      navigation.navigate('PayConfirm');
    } else if (payment === 'crypto') {
      navigation.navigate('PayConfirmWallet');
    } else if (payment === 'rentalCredit') {
      navigation.navigate('PayConfirmRentalCredit');
    }
  }

  function handleSelectPayment(method: 'brl' | 'crypto' | 'rentalCredit') {
    setPayment(method);
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

          <SelectPayText>Selecione a opção de pagamento</SelectPayText>

          <SelectPaySubText>
            Simule e consulte as condições disponíveis
            {'/n'}de parcelamento em Rental Credit.
          </SelectPaySubText>

          <ValueContent>
            <SimbolText>R$</SimbolText>
            <ValueText>200.00</ValueText>
          </ValueContent>

          <Options>
            <OptionContent onPress={() => handleSelectPayment('brl')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Pague via</OptionTitle>
                  <OptionName>Saldo em real</OptionName>
                </OptionInfos>
                <RadioButton>{payment === 'brl' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('crypto')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Pague via</OptionTitle>
                  <OptionName>Wallet cripto</OptionName>
                </OptionInfos>
                <RadioButton>
                  {payment === 'crypto' && <RadioCheck />}
                </RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('rentalCredit')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Pague via</OptionTitle>
                  <OptionName>Rental Credit</OptionName>
                </OptionInfos>
                <RadioButton>
                  {payment === 'rentalCredit' && <RadioCheck />}
                </RadioButton>
              </OptionWrapper>
            </OptionContent>
          </Options>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" type="primary" onPress={handlePayConfirm} />
        </ContentButton>
      </Content>
    </Container>
  );
}
