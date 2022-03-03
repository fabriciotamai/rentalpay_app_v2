import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  SubTitle,
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
  DataContentList,
  SolicitationContent,
  SolicitationText,
  SolicitationValue,
  FeeContent,
  FeeText,
  FeeValue,
  ParcelContent,
  ParcelText,
  ParcelValue,
  ValidateContent,
  ValidateText,
  ValidateValue,
  TotalPayContent,
  TotalPayText,
  TotalPayValue,
  Wrapper,
  ContentButton,
} from './styles';

import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function CreditReview() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleCredit2FA() {
    navigation.navigate('Credit2FA');
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

          <SubTitle>Confirme sua solicitaçãode{'\n'}crédito</SubTitle>
          {/* <DataContentList showsVerticalScrollIndicator={false}> */}
          <DataContentList>
            <SolicitationContent>
              <SolicitationText>Total solicitado</SolicitationText>
              <SolicitationValue>R$ 5000.00</SolicitationValue>
            </SolicitationContent>
            <FeeContent>
              <FeeText>Taxas de operação</FeeText>
              <FeeValue>xx%</FeeValue>
            </FeeContent>
            <ParcelContent>
              <ParcelText>Parcelas disponíveis</ParcelText>
              <ParcelValue>4x</ParcelValue>
            </ParcelContent>
            <ValidateContent>
              <ValidateText>Validade do crédito</ValidateText>
              <ValidateValue>10/10/2022</ValidateValue>
            </ValidateContent>
            <TotalPayContent>
              <TotalPayText>Total à pagar</TotalPayText>
              <TotalPayValue>R$ 5500.00</TotalPayValue>
            </TotalPayContent>
            <ContentButton>
              <Button
                title="Avançar"
                onPress={handleCredit2FA}
                type="primary"
              />
            </ContentButton>
          </DataContentList>
        </Wrapper>
      </Content>
    </Container>
  );
}
