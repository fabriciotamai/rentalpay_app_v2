import React from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  SubTitle,
  ReceiverText,
  ValueContent,
  // SymbolContent,
  Simbol,
  ValueInput,
  Wrapper,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function Receiver() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleConfirm() {
    navigation.navigate('ReceiverConfirm');
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

            <Title>Receba em Real</Title>

            <Space />
          </Header>

          <SubTitle>Quanto você quer receber?</SubTitle>

          <ReceiverText>
            Receba pagamentos a qualquer hora, em{'/n'}qualquer lugar.
          </ReceiverText>
          <ValueContent>
            <Simbol>R$</Simbol>
            <ValueInput defaultValue="0.00" keyboardType="numeric" />
          </ValueContent>
        </Wrapper>
        <ContentButton>
          <Button title="Confirmar" onPress={handleConfirm} type="primary" />
        </ContentButton>
      </Content>
    </Container>
  );
}
