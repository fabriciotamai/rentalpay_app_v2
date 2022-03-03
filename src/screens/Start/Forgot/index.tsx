import React, {useEffect, useState} from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  ForgotText,
  Form,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {useDispatch} from 'react-redux';
import {setLoading} from '../../../store/actions/loading';

import Input from '../../../components/Input';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import api from '../../../services/api';
import {Alert} from 'react-native';

export function Forgot() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleForgot() {
    if (!email) {
      Alert.alert("É nescessário informar um email")
    } else {
      dispatch(setLoading({loading: true}));
      api
        .post('/api/forgot', {
          email: email,
        })
        .then(response => {
          dispatch(setLoading({loading: false}));
          const {message} = response.data;
          Alert.alert(message);
        });
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <BackButtom onPress={handleBack}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Alterar senha</Title>

          <Space />
        </Header>

        <ForgotText>
          Seu login Rental Pay é o mesmo{'\n'}utilizado na plataforma Rental.
          {'\n'}Informe o e-mail utilizado.
        </ForgotText>

        <Form>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#A6A6A6"
          />
          <ContentButton>
            <Button onPress={handleForgot} title="Enviar" type="primary" />
          </ContentButton>
        </Form>
      </Content>
    </Container>
  );
}
