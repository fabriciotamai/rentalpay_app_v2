import React, {useState, useEffect, useRef} from 'react';
import {Alert, Keyboard} from 'react-native';

import LogoRental from '../../../assets/imgs/rental_pay_logo.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  CodeInput,
} from './styles';
import api from '../../../services/api';
import {useDispatch, useSelector} from 'react-redux';
import {onClearState} from '../../../store/actions/user';

import {setLoading} from '../../../store/actions/loading';
import {RootState} from '../../../store/storeConfig';

export function AuthorizationDevice() {
  const {device_name, device_token, pin} = useSelector(
    (state: RootState) => state.user,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [invitation_code, setCode] = useState('');
  const [valid, setValid] = useState(false);
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');
  const [pin6, setPin6] = useState('');
  const [pin7, setPin7] = useState('');
  const [pin8, setPin8] = useState('');
  const [pin9, setPin9] = useState('');
  const [sumPin, setSumPin] = useState('');
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useEffect(() => {
    function handleSendCodigValidate() {
      dispatch(setLoading({loading: true}));
      api
        .get('api/deviceToken/get-code')
        .then(response => {
          const {message} = response.data;
          dispatch(setLoading({loading: false}));
          if (response.data.status) {
            Alert.alert(message);
          }
        })
        .catch(err => {
          dispatch(setLoading({loading: false}));
        });
    }
    handleSendCodigValidate();
  }, []);

  async function removeAsyncStorage() {
    dispatch(onClearState());
    await AsyncStorage.removeItem('@RentalPay:user');
  }

  useEffect(() => {
    setCode(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    if (pin1 !== '') {
      ref2.current.focus();
    }
  }, [pin1]);

  useEffect(() => {
    setCode(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    if (pin2 !== '') {
      ref3.current.focus();
    } else {
      if (pin1 !== '') {
        ref1.current.focus();
      }
    }
  }, [pin2]);

  useEffect(() => {
    setCode(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    if (pin3 !== '') {
      ref4.current.focus();
    } else {
      if (pin2 !== '') {
        ref2.current.focus();
      }
    }
  }, [pin3]);

  useEffect(() => {
    setCode(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    if (pin4 !== '') {
      ref5.current.focus();
    } else {
      if (pin3 !== '') {
        ref3.current.focus();
      }
    }
  }, [pin4]);

  useEffect(() => {
    setCode(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    if (pin5 !== '') {
      ref6.current.focus();
    } else {
      if (pin4 !== '') {
        ref4.current.focus();
      }
    }
  }, [pin5]);

  useEffect(() => {
    setCode(`${pin1}${pin2}${pin3}${pin4}${pin5}${pin6}`);
    if (pin6 !== '') {
      Keyboard.dismiss();
    } else {
      if (pin5 !== '') {
        ref5.current.focus();
      }
    }
  }, [pin6]);

  useEffect(() => {
    if (sumPin !== '' && sumPin.length == 6) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [invitation_code]);

  useEffect(() => {
    const result = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;

    if (result?.length >= 6) {
      handleCheckPin(result);
    }
  }, [navigation, pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9]);

  function handleCheckPin(result: string) {
    api
      .post('api/deviceToken', {
        device_token: device_token,
        device: device_name,
        token: result,
      })
      .then(response => {
        console.log('aquiii', response.data);
        if (response.data.status && !pin) {
          navigation.navigate('CreatePin');
        } else if (response.data.status && pin) {
          navigation.navigate('Pin');
        } else {
        }
      })
      .catch(err => {
       
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
          <LogoRental width={RFValue(100)} height={RFValue(50)} />
        </CardLogo>

        <ContentTitle>
          <TextTitle>Insira codigó do e-mail</TextTitle>
        </ContentTitle>

        <CardSelectPin>
          <SelectPin pin1={pin1}>
            <CodeInput value={pin1} ref={ref1} />
          </SelectPin>

          <SelectPin pin2={pin2}>
            <CodeInput value={pin2} ref={ref2} />
          </SelectPin>

          <SelectPin pin3={pin3}>
            <CodeInput value={pin3} ref={ref3} />
          </SelectPin>

          <SelectPin pin4={pin4}>
            <CodeInput value={pin4} ref={ref4} />
          </SelectPin>
          <SelectPin pin5={pin5}>
            <CodeInput value={pin5} ref={ref5} />
          </SelectPin>
          <SelectPin pin6={pin6}>
            <CodeInput value={pin6} ref={ref6} />
          </SelectPin>
        </CardSelectPin>
      </Header>

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
            <ButtonSelectPin onPress={() => getPinWrite('0')}>
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
