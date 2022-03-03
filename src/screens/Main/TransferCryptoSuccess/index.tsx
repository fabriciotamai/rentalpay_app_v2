import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Content,
  LogoContent,
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

export function TransferCryptoSuccess() {
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

        <TextContent>
          <InfoText>
            Sua solicitação de transferência foi{'\n'}confirmada com sucesso.
            Aguarde os{'\n'}prazos de compensação. Caso possua{'\n'}dúvidas,
            entre em contato com nosso{'\n'}suporte técnico.
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
