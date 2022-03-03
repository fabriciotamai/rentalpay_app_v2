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
  InfoText,
  ButtonContent,
  FirstButtonContent,
  SecondButtonContent,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';

import {Button} from '../../../components/Button';

import CheckIcon from '../../../assets/icons/check_line_icon.svg';
import {useNavigation} from '@react-navigation/native';

export function TransferSuccess() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('HomeTab');
  }

  function handleTransactions() {
    navigation.navigate('Transactions');
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
          <InfoText>
            Sua transferência foi confirmada com{'\n'}sucesso! Consulte suas
            transações na{'\n'}aba Financeiro e aguarde o prazo de{'\n'}
            compensação.
          </InfoText>
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
