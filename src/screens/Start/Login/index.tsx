import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  LoginText,
  Form,
  ButtonForgot,
  LabelForgot,
} from './styles';

import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from '../../../components/Button';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather'
Feather.loadFont();
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


import {useDispatch, useSelector} from 'react-redux';
import Input from '../../../components/Input';
import {RootStackParamList} from '../../../utils/RootStackParams';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../../store/storeConfig';

type screenPin = NativeStackNavigationProp<RootStackParamList, 'Pin'>;

// import api from '../../../services/api';

import {onLogin} from '../../../store/actions/user';

export function Login() {
  const navigation = useNavigation<screenPin>();
  const {access_token, pin, device_token_status, device_token} = useSelector(
    (state: RootState) => state.user,
  );
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('suporte@interaggroup.com.br');
  const [password, setPassword] = useState('senha123');
 

  function handleLogin() {
    navigation.navigate('Pin');
  }

 

  function handleSignium() {

    if (!email) {
      Alert.alert('Porfavor insira seu email');
    } else if (!password) {
      Alert.alert('Porfavor insira sua senha');
    } else if (password && email) {
      dispatch(
        onLogin({email: email, password: password, device_token: device_token}),
      );
    }
  }

  useEffect(() => {
    if (access_token && !device_token_status && !pin) {
      navigation.navigate('AuthorizationDevice');
    } else if (access_token && pin && device_token_status) {
      navigation.navigate('Pin');
    } else if (access_token && !pin && device_token_status) {
      navigation.navigate('CreatePin');
    } else if (access_token && pin && !device_token_status) {
      navigation.navigate('AuthorizationDevice');
    }
  }, [access_token, pin, device_token_status]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Content>
        <Header>
          <BackButtom>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Entrar</Title>

          <Space />
        </Header>

        <LoginText>Utilize seu login Rental para {'\n'}acessar.</LoginText>

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
          <Input
            placeholder="Senha"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!show}
            placeholderTextColor="#A6A6A6"
            icon={() =>
              !show ? (
                <Icon name="eye-off" color="#000000" size={RFValue(20)} />
              ) : (
                <Icon name="eye" color="#000000" size={RFValue(20)} />
              )
            }
            handlePress={() => setShow(!show)}
          />

          <ButtonForgot onPress={() => navigation.navigate('Forgot')}>
            <LabelForgot>Esqueceu sua senha?</LabelForgot>
          </ButtonForgot>

          <Button title="Entrar" type="primary" onPress={handleSignium} />
        </Form>
      </Content>
    </Container>
  );
}