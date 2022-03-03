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
import Icon from 'react-native-vector-icons/Feather';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import Input from '../../../components/Input';

export function SettingRegister() {
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

            <Title>Dados cadastrais</Title>

            <Space />
          </Header>

          <InfoText>
            Na Rental Pay, todos os seus dados estão{'\n'}conectados a sua conta
            Rental.{'\n'}Para alterar uma informação, entre em{'\n'}contato com
            nosso suporte técnico.
          </InfoText>
          <Input
            placeholder="NOME"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="SOBRENOME"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="EMAIL"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="TELEFONE"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholderTextColor="#C9CACA"
          />
          <Input
            placeholder="DATA DE NASCIMENTO"
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
