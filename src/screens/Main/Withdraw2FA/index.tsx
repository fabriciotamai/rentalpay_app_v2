import React, {useState} from 'react';
import {Alert} from 'react-native';

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
import {setLoading} from '../../../store/actions/loading';
import {useSelector, useDispatch} from 'react-redux';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import api from '../../../services/api';
import {RootState} from '../../../store/storeConfig';

export function Withdraw2FA({route}) {
  const {device_token} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const {unMount, idORpag, emailAddress} = route.params;
  const [twofa, setTwofa] = useState<string>('');
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleWithdrawSuccess() {
    navigation.navigate('WithdrawSuccess');
  }

  function handlewithdrawalReal() {
    dispatch(setLoading({loading: true}));
    const formatUmount = unMount.replace(',', '.');

    api
      .post(
        'api/transfer/external',
        {
          amount: formatUmount,
          code: emailAddress,
          twofa: twofa,
        },
        {
          headers: {'device-token': device_token},
        },
      )
      .then(response => {
        const {message} = response.data;

        if (response.data.status) {
          dispatch(setLoading({loading: false}));
          setTimeout(() => {
            Alert.alert(message);
            navigation.navigate('WithdrawSuccess');
          }, 3000);
        } else {
          Alert.alert(message);
        }
      })
      .catch(error => {
        Alert.alert('Tente novamente mais tarde !');
        dispatch(setLoading({loading: false}));
      })
      .finally(() => dispatch(setLoading({loading: false})));
  }

  return (
    <Container>
      <Content>
        <Header>
          <BackButtom onPress={handleBack}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Saque em real</Title>

          <Space />
        </Header>

        <ValueContent>
          <SimbolText>R$</SimbolText>
          <ValueText>{unMount}</ValueText>
        </ValueContent>

        <Form>
          <Input
            placeholder="Digite seu 2FA"
            autoCorrect={false}
            autoCapitalize="none"
            value={twofa}
            onChangeText={setTwofa}
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
          />
          <ContentButton>
            <Button
              title="Confirmar"
              type="primary"
              onPress={handlewithdrawalReal}
            />
          </ContentButton>
        </Form>
      </Content>
    </Container>
  );
}
