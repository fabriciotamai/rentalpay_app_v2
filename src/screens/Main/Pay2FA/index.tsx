import React from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  ValueContent,
  SimbolText,
  ValueText,
  Form,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Input from '../../../components/Input';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function Pay2FA() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handlePaySuccess() {
    navigation.navigate('PaySuccess');
  }

  return (
    <Container>
      <Content>
        <Header>
          <BackButtom onPress={handleBack}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Pague em real</Title>

          <Space />
        </Header>

        <ValueContent>
          <SimbolText>R$</SimbolText>
          <ValueText>200.00</ValueText>
        </ValueContent>

        <Form>
          <Input
            placeholder="Digite seu 2FA"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
          />
          <ContentButton>
            <Button
              title="Confirmar"
              type="primary"
              onPress={handlePaySuccess}
            />
          </ContentButton>
        </Form>
      </Content>
    </Container>
  );
}
