import React from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  SubTitle,
  ValueContent,
  Simbol,
  ValueInput,
  Options,
  OptionContent,
  OptionInfos,
  OptionTitle,
  OptionName,
  DataContent,
  ContractContent,
  ContractText,
  ContractValue,
  LimitContent,
  LimitText,
  LimitValue,
  Wrapper,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function CreditAmount() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleCreditReview() {
    navigation.navigate('CreditReview');
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

            <Title>Solicitar crédito</Title>

            <Space />
          </Header>
          <Options>
            <OptionContent>
              <OptionInfos>
                <OptionTitle>Contrato #124834</OptionTitle>
                <OptionName>Upper USD</OptionName>
              </OptionInfos>
            </OptionContent>
          </Options>

          <DataContent>
            <ContractContent>
              <ContractText>Volume do contrato</ContractText>
              <ContractValue>24.13456</ContractValue>
            </ContractContent>

            <LimitContent>
              <LimitText>Limite disponível</LimitText>
              <LimitValue>R$ 6799.00</LimitValue>
            </LimitContent>
          </DataContent>

          <SubTitle>Qual valor deseja solicitar?</SubTitle>
          <ValueContent>
            <Simbol>R$</Simbol>
            <ValueInput defaultValue="0.00" keyboardType="numeric" />
          </ValueContent>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" onPress={handleCreditReview} type="primary" />
        </ContentButton>
      </Content>
    </Container>
  );
}
