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
import {useNavigation} from '@react-navigation/native';

import {Button} from '../../../components/Button';

import CheckErrorIcon from '../../../assets/icons/check_error_icon.svg';

export function CreditError() {
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
          <CheckErrorIcon width={RFValue(75)} height={RFValue(75)} />
        </LogoContent>

        <ValueContent>
          <SimbolText>R$</SimbolText>
          <ValueText>5500.00</ValueText>
        </ValueContent>

        <TextContent>
          <InfoText>
            Sua solicitação de crédito foi{'\n'}cancelada. Realize novamente sua
            {'\n'}solicitação ou caso possua dúvidas,{'\n'}entre em contato com
            nosso suporte{'\n'}técnico.
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
