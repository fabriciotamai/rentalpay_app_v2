import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../store/storeConfig';
import {HeaderGlobal} from '../../../components/HeaderGlobal';


import {
  Container,
  ButtonSelectPin,
  TextTitle,
  Content,
  TextBtn,
  ContentPin,
  ContentButtonsPin,
  ButtonDisable,
  ContentTitle,
  CardLogo,
  SelectPin,
  CardSelectPin,
  Header,
  TextBtnWhite,
} from './styles';
import api from '../../../services/api';
import {Alert} from 'react-native';
import { onLoadBalance,getExtract } from '../../../store/actions/user';


export function Pin() {
  const dispatch = useDispatch();
  const {device_token} = useSelector((state: RootState) => state.user);
  const [contador, setContador] = useState<Number>(3);
  const navigation = useNavigation();
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');
  const [pin7, setPin7] = useState('');
  const [pin8, setPin8] = useState('');
  const [pin9, setPin9] = useState('');


  useEffect(() => {
    const result = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;

    if (result?.length >= 6) {
      handleCheckPin(result);
    }
  }, [navigation, pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9]);

  useEffect(() => {
    if (contador < 0) {
      async function getRemoveAsyncStorage() {
        const userParsed = await AsyncStorage.getItem

      }
      getRemoveAsyncStorage();
    }
  }, [contador]);

  function handleCheckPin(result: string) {
  
    api
      .post(
        'api/checkPin',
        {
          pin: result,
        },
        {
          headers: {'device-token': device_token},
        },
      )
      .then(response => {
        
        const {message} = response.data;
        if (response.data.status) {
          dispatch(onLoadBalance({device_token: device_token}));
          dispatch(getExtract({device_token: device_token}));
          // dispatch(getExtract({device_token.device_token}))

          navigation.navigate('TabRoutes');
        } else {
          if (contador == '1') {
            Alert.alert(`${message}, você possui apenas ${contador} tentativa`);
          } else {
            Alert.alert(`${message}, você possui mais ${contador} tentativas`);
          }
          ClearPin();
          setContador(contador - 1);
          
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  function ClearPin() {
    setPin1('');
    setPin2('');
    setPin3('');
    setPin4('');
    setPin5('');
    setPin6('');
    setPin7('');
    setPin8('');
    setPin9('');
  }

  function getPinWrite(value: string) {
    if (pin1 === '') {
      setPin1(value);
      return;
    }
    if (pin2 === '') {
      setPin2(value);
      return;
    }
    if (pin3 === '') {
      setPin3(value);
      return;
    }
    if (pin4 === '') {
      setPin4(value);
      return;
    }
    if (pin5 === '') {
      setPin5(value);
      return;
    }
    if (pin6 === '') {
      setPin6(value);
      return;
    }
  }

  return (
    <Container>
      <Header>
        <CardLogo>
          {/* <LogoRental width={RFValue(100)} height={RFValue(50)} /> */}
        </CardLogo>
      </Header>
      <HeaderGlobal  icon="close"  />

        <ContentTitle>
          <TextTitle>Confirme seu Pin</TextTitle>
        </ContentTitle>

        <CardSelectPin>
          <SelectPin pin1={pin1} />

          <SelectPin pin2={pin2} />

          <SelectPin pin3={pin3} />

          <SelectPin pin4={pin4} />
          <SelectPin pin5={pin5} />
          <SelectPin pin6={pin6} />
        </CardSelectPin>

      <Content>
        <ContentPin>
          <ContentButtonsPin>
            <ButtonSelectPin onPress={() => getPinWrite('1')}>
              <TextBtn>1</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('2')}>
              <TextBtn>2</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('3')}>
              <TextBtn>3</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('4')}>
              <TextBtn>4</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('5')}>
              <TextBtn>5</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('6')}>
              <TextBtn>6</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('7')}>
              <TextBtn>7</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('8')}>
              <TextBtn>8</TextBtn>
            </ButtonSelectPin>
            <ButtonSelectPin onPress={() => getPinWrite('9')}>
              <TextBtn>9</TextBtn>
            </ButtonSelectPin>
            <ButtonDisable></ButtonDisable>
            <ButtonSelectPin>
              <TextBtn>0</TextBtn>
            </ButtonSelectPin>
            <ButtonDisable onPress={ClearPin}>
              <TextBtnWhite>x</TextBtnWhite>
            </ButtonDisable>
          </ContentButtonsPin>
        </ContentPin>
      </Content>
    </Container>
  );
}
