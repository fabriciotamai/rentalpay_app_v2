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
  TextFinished,
  ButtonContent,
  FirstButtonContent,
  SecondButtonContent,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';

import {Button} from '../../../components/Button';

import CheckIcon from '../../../assets/icons/check_line_icon.svg';
import {useNavigation} from '@react-navigation/native';

export function Received() {
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
          <TextFinished>
            Seu pagamento foi solicitado com{'\n'}sucesso! Compartilhe seu
            código e{'\n'}
            aguarde a compensação do{'\n'}pagamento.
          </TextFinished>
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
