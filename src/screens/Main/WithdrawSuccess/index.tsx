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
  DateText,
  ButtonContent,
  FirstButtonContent,
  SecondButtonContent,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';

import {Button} from '../../../components/Button';

import CheckIcon from '../../../assets/icons/check_line_icon.svg';
import {useNavigation} from '@react-navigation/native';

export function WithdrawSuccess() {
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
            Sua solicitação de saque foi realizada com{'\n'}sucesso. Ao enviar
            BRL para uma conta{'\n'}OrPag em sua titularidade, certifique-se
            {'\n'}de que os dados preenchidos estão{'\n'}corretos.
          </InfoText>
          <DateText>Prazo de compensação: Até xx horas úteis.</DateText>
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
