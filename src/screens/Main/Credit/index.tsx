import React from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  ItensContent,
  HeaderTitle,
  HeaderPicture,
  CardCredit,
  TextCard,
  CardButtonsContent,
  FirstButtonContent,
  FirstButton,
  FirstButtonText,
  SecondButtonContent,
  SecondButton,
  SubTitlesContent,
  SubTitle,
  CardData,
  HeaderContent,
  StartContent,
  ValueContent,
  ValueText,
  BalanceText,
  CenterContent,
  LimitContent,
  LimitText,
  LimitValueText,
  ContractContent,
  ContractText,
  ContractValueText,
  ValidateContent,
  ValidateText,
  ValidateValueText,
  FooterContent,
  TokenText,
  TokenValueText,
} from './styles';

import TransactionsActiveIcon from '../../../assets/icons/transactions_active_icon.svg';
import CreditIcon from '../../../assets/icons/credit_bold_icon.svg';
import CreditHistoryIcon from '../../../assets/icons/credit_history.svg';
import LogoRentalCredit from '../../../assets/icons/logo_rental_credit.svg';
import ChipIcon from '../../../assets/icons/chip_icon.svg';
import BgCardImg from '../../../assets/imgs/bg_card.png';

interface CardCoinProps {
  coinImage: string;
  coinName: string;
  coinBalance: string;
}

export function Credit() {
  const navigation = useNavigation();

  function handleCreditExtract() {
    navigation.navigate('CreditExtract');
  }
  function handleCreditRequest() {
    navigation.navigate('CreditRequest');
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <ItensContent>
          <TransactionsActiveIcon width={RFValue(29)} height={RFValue(29)} />

          <HeaderTitle>Crédito</HeaderTitle>
        </ItensContent>

        <HeaderPicture
          source={{uri: 'https://s.conjur.com.br/img/b/coringa.jpeg'}}
        />
      </Header>

      <CardCredit source={BgCardImg}>
        <LogoRentalCredit />

        <TextCard>
          Com o Rental Credit você tem poder e{'\n'}liberdade de escolha ao seu
          alcance de{'\n'}forma acessível e familiar.
        </TextCard>

        <CardButtonsContent>
          <FirstButtonContent>
            <FirstButton onPress={handleCreditRequest}>
              <CreditIcon width={RFValue(23)} height={RFValue(23)} />
              <FirstButtonText>Solicitar crédito</FirstButtonText>
            </FirstButton>
          </FirstButtonContent>

          <SecondButtonContent>
            <SecondButton onPress={handleCreditExtract}>
              <CreditHistoryIcon width={RFValue(23)} height={RFValue(23)} />
              <FirstButtonText>Histórico Solicitações</FirstButtonText>
            </SecondButton>
          </SecondButtonContent>
        </CardButtonsContent>
      </CardCredit>

      <SubTitlesContent>
        <SubTitle>Créditos Ativos</SubTitle>
      </SubTitlesContent>

      <CardData>
        <HeaderContent>
          <StartContent>
            <ValueContent>
              <ValueText>Valor disponível</ValueText>
              <BalanceText>R$ 0,00</BalanceText>
            </ValueContent>
            <ChipIcon />
          </StartContent>
          <CenterContent>
            <LimitContent>
              <LimitText>LIMITE UTILIZADO</LimitText>
              <LimitValueText>R$ 3000.00</LimitValueText>
            </LimitContent>
            <ContractContent>
              <ContractText>CONTRATO</ContractText>
              <ContractValueText>#120293</ContractValueText>
            </ContractContent>
            <ValidateContent>
              <ValidateText>CONTRATO</ValidateText>
              <ValidateValueText>#120293</ValidateValueText>
            </ValidateContent>
          </CenterContent>
        </HeaderContent>
        <FooterContent>
          <TokenText>TOKEN</TokenText>
          <TokenValueText>3778 **** **** 1234</TokenValueText>
        </FooterContent>
      </CardData>
    </Container>
  );
}
