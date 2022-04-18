import React, {useState, useEffect, useCallback, useContext} from 'react';
import {Alert} from 'react-native';

import  {useForm} from 'react-hook-form';

import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from '../../../components/Button';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather'
Feather.loadFont();
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';


//---------ACTIONS---------
import {onLogin,setDeviceName, setTokenPush} from '../../../store/actions/user';
import {RootState} from '../../../store/storeConfig';


import Input from '../../../components/Input';
import { InputForm} from '../../../components/InputForm';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

import {RootStackParamList} from '../../../utils/RootStackParams';
type screenPin = NativeStackNavigationProp<RootStackParamList, 'Pin'>;
import { useAuth}  from '../../../hooks/AuthContext'; 

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

interface formData {
  email:string;
  password:string;

}

export function Login() {
  const {user} = useAuth();
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
  const {control, handleSubmit} = useForm();

  function testeRegister(form:formData) {
   const data = {
     email:form.email,
     password:form.password,
   }

  }



  

  useFocusEffect(
    useCallback(() =>{
      async function getFcmToken() {
        const fcmToken = await messaging().getToken();
       
        if (fcmToken) {
         
          DeviceInfo.getDeviceName().then(deviceName => {
            dispatch(setDeviceName({device_name: deviceName}));
            dispatch(setTokenPush({device_token: fcmToken}));
          });
        }
      }
      getFcmToken()

    },[device_token])
  )

 

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
          <BackButtom onPress={()=> navigation.goBack()}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Entrar</Title>

          <Space />
        </Header>

        <LoginText>Utilize seu login Rental para {'\n'}acessar.</LoginText>

        <Form>
          <InputForm
          name="email"
          control={control}
          placeholder="Email"
           
          />
          <InputForm
          name="password"
          control={control}
          placeholder="password"
           
          />

          <ButtonForgot onPress={() => navigation.navigate('Forgot')}>
            <LabelForgot>Esqueceu sua senha?</LabelForgot>
          </ButtonForgot>

          <Button title="Entrar" type="primary" onPress={handleSubmit(testeRegister)} />
        </Form>
      </Content>
    </Container>
  );
}
