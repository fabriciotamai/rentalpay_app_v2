import React from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  ButtonScanner,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import ScannerIcon from '../../../assets/icons/scanner_icon.svg';

export function PayScanner() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleSelectPayment() {
    navigation.navigate('SelectPayment');
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
        </Wrapper>
        <ContentButton>
          <ButtonScanner onPress={handleSelectPayment}>
            <ScannerIcon />
          </ButtonScanner>
        </ContentButton>
      </Content>
    </Container>
  );
}
