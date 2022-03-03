import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Content,
  LogoContent,
  TitleContent,
  Title,
  TextContent,
  ForgetText,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';

import {Button} from '../../../components/Button';

import Logo from '../../../assets/icons/logo.svg';

export function ForgotSended() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <LogoContent>
          <Logo width={RFValue(163)} height={RFValue(39)} />
        </LogoContent>

        <TitleContent>
          <Title>Alterar senha</Title>
        </TitleContent>

        <TextContent>
          <ForgetText>
            Verifique seu e-mail. Uma nova senha{'\n'}poderá ser cadastrada em
            sua{'\n'}plataforma Rental.
          </ForgetText>
        </TextContent>

        <Button title="Voltar" type="primary" />
      </Content>
    </Container>
  );
}
