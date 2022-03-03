import React from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  InfoText,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';

import Input from '../../../components/Input';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function SettingAddress() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleCreditAmount() {
    navigation.navigate('CreditAmount');
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

            <Title>Endereço</Title>

            <Space />
          </Header>

          <InfoText>
            Na Rental Pay, todos os seus dados estão{'\n'}conectados a sua conta
            Rental.{'\n'}Para alterar uma informação, entre em{'\n'}contato com
            nosso suporte técnico.
          </InfoText>
          <Input
            placeholder="ENDEREÇO"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="CIDADE"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="ESTADO"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="PAÏS"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholderTextColor="#C9CACA"
          />
        </Wrapper>
        <ContentButton>
          <Button
            title="Início"
            type="secondary"
            onPress={handleCreditAmount}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
