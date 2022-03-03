import React from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

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

import {Button} from '../../../components/Button';

import CheckIcon from '../../../assets/icons/check_line_icon.svg';

export function CreditSuccess() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('HomeTab');
  }

  function handleCredit() {
    navigation.navigate('Credit');
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
            Sua solicitação de crédito foi{'\n'}confirmada com sucesso. Aguarde
            os{'\n'}prazos de compensação para consultar{'\n'}seus valores
            aprovados.
          </InfoText>
        </TextContent>

        <ButtonContent>
          <FirstButtonContent>
            <Button
              title="Voltar para crédito"
              type="primary"
              onPress={handleCredit}
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
