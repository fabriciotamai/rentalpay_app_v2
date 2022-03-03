import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Content,
  LogoContent,
  ValueContent,
  SimbolText,
  ValueText,
  TextContent,
  TextInfo,
  ButtonContent,
  FirstButtonContent,
  SecondButtonContent,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';

import {Button} from '../../../components/Button';

import CheckIcon from '../../../assets/icons/check_line_icon.svg';
import {useNavigation} from '@react-navigation/native';

export function PaySuccess() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('Home');
  }

  function handleTransactions() {
    navigation.navigate('TransactiontTab');
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <LogoContent>
          <CheckIcon width={RFValue(75)} height={RFValue(75)} />
        </LogoContent>

        <ValueContent>
          <SimbolText>R$</SimbolText>
          <ValueText>200.00</ValueText>
        </ValueContent>

        <TextContent>
          <TextInfo>
            Seu pagamento foi confirmado com{'\n'}sucesso! Consulte suas
            transações na{'\n'}aba Financeiro.
          </TextInfo>
        </TextContent>

        <ButtonContent>
          <FirstButtonContent>
            <Button
              title="Voltar para transações"
              type="primary"
              onPress={handleTransactions}
            />
          </FirstButtonContent>
          <SecondButtonContent>
            <Button title="Início" type="secondary" onPress={handleHome} />
          </SecondButtonContent>
        </ButtonContent>
      </Content>
    </Container>
  );
}
