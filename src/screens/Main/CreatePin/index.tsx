import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import LogoRental from '../../../assets/imgs/rental_pay_logo.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector, useDispatch} from 'react-redux';
import { RootState} from '../../../store/storeConfig';

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

export function CreatePin() {
  const {device_token} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
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
  const [sumConfirmed, setSumConfirmed] = useState('');
  const [steapOne, setSteapOne] = useState(false);
  const [steapTwo, setSteapTwo] = useState(false);

  //refatorarrrrrr !

  useEffect(() => {
    const result = pin1 + pin2 + pin3 + pin4 + pin5 + pin6 + pin7 + pin8 + pin9;
    if (result?.length >= 6 && !steapOne) {
      setSumPin(result);
      setSteapOne(true);
      ClearPin();
    } else if (result?.length >= 6 && steapOne) {
      setSumConfirmed(result);
      setSteapTwo(true);
    }
  }, [
    navigation,
    pin1,
    pin2,
    pin3,
    pin4,
    pin5,
    pin6,
    pin7,
    pin8,
    pin9,
    steapOne,
    sumConfirmed,
    sumPin,
  ]);

  function handleCreatePin() {

    api
      .post(
        'api/newPin',
        {
          pin: '111111',
        },
        {
          headers: {'device-token': device_token},
        },
      )
      .then(response => {
        if (response.data.status) {
       Alert.alert('Pin criado com sucesso!');
          setTimeout(() => {
            navigation.navigate('TabRoutes');
          }, 1500);
        }
      });
  }

  useEffect(() => {
    if (steapOne && steapTwo && sumPin === sumConfirmed) {
      handleCreatePin();
    } else if (steapOne && steapTwo && sumPin !== sumConfirmed) {
      Alert.alert('As senhas devem ser iguais!');
      ClearPin();
      setSteapOne(false);
      setSteapTwo(false);
    }
  }, [sumPin, sumConfirmed]);

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

  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <CardLogo>
          <LogoRental width={RFValue(100)} height={RFValue(50)} />
        </CardLogo>

        <ContentTitle>
          <TextTitle>
            {steapOne ? ' Confirme seu pin' : 'Crie seu pin'}
          </TextTitle>
        </ContentTitle>

        <CardSelectPin>
          <SelectPin pin1={pin1} />

          <SelectPin pin2={pin2} />

          <SelectPin pin3={pin3} />

          <SelectPin pin4={pin4} />
          <SelectPin pin5={pin5} />
          <SelectPin pin6={pin6} />
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
