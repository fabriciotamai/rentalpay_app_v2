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
  DataContent,
  TypePaymentContent,
  TypePaymentText,
  TypePaymentValue,
  ReceiverContent,
  ReceiverText,
  ReceiverValue,
  DocumentContent,
  DocumentText,
  DocumentValue,
  IdentifierContent,
  IdentifierText,
  IdentifierValue,
  PayMethodContent,
  PayMethodText,
  PayMethodValue,
  SafetyContent,
  SafetyText,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import SafetyIcon from '../../../assets/icons/safety_icon.svg';

export function PayReview() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handlePay2FA() {
    navigation.navigate('Pay2FA');
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
          <DataContent>
            <TypePaymentContent>
              <TypePaymentText>Copia e cola</TypePaymentText>
              <TypePaymentValue>9fntS2du42u3990vw6SVF</TypePaymentValue>
            </TypePaymentContent>
            <ReceiverContent>
              <ReceiverText>Nome</ReceiverText>
              <ReceiverValue>Destinatarie Travel Agency</ReceiverValue>
            </ReceiverContent>
            <DocumentContent>
              <DocumentText>Documento</DocumentText>
              <DocumentValue>19202019/0001-2</DocumentValue>
            </DocumentContent>
            <IdentifierContent>
              <IdentifierText>Identificador</IdentifierText>
              <IdentifierValue>Viagem</IdentifierValue>
            </IdentifierContent>
            <PayMethodContent>
              <PayMethodText>Forma de pagamento</PayMethodText>
              <PayMethodValue>Saldo Real</PayMethodValue>
            </PayMethodContent>
          </DataContent>

          <SafetyContent>
            <SafetyIcon width={RFValue(20)} height={RFValue(20)} />
            <SafetyText>
              Suas informações estão seguras. Possui{'\n'}dúvidas? Acesse nosso
              Termo de Uso.
            </SafetyText>
          </SafetyContent>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" type="primary" onPress={handlePay2FA} />
        </ContentButton>
      </Content>
    </Container>
  );
}
