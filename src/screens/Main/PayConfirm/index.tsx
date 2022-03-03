import React from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  ValueContent,
  SimbolText,
  ValueText,
  OptionContent,
  Options,
  OptionInfos,
  OptionTitle,
  OptionName,
  RadioButton,
  RadioCheck,
  BalanceContent,
  BalanceAvailableText,
  BalanceValue,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function PayConfirm() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handlePayReview() {
    navigation.navigate('PayReview');
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

          <ValueContent>
            <SimbolText>R$</SimbolText>
            <ValueText>200.00</ValueText>
          </ValueContent>

          <Options>
            <OptionContent>
              <OptionInfos>
                <OptionTitle>Pague via</OptionTitle>
                <OptionName>Saldo em real</OptionName>
              </OptionInfos>
              <RadioButton>
                <RadioCheck />
              </RadioButton>
            </OptionContent>
          </Options>
          <BalanceContent>
            <BalanceAvailableText>Saldo disponível</BalanceAvailableText>
            <BalanceValue>R$ 10000.00</BalanceValue>
          </BalanceContent>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" type="primary" onPress={handlePayReview} />
        </ContentButton>
      </Content>
    </Container>
  );
}
