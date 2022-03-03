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

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import api from '../../../services/api';
import {useSelector, useDispatch} from 'react-redux';
import {setLoading} from '../../../store/actions/loading';
import {RootState} from '../../../store/storeConfig';

export function Transfer2FA({route}) {
  const dispatch = useDispatch();
  const {device_token} = useSelector((state: RootState) => state.user);
  const {unMount, email} = route.params;
  const [twofa, setTwofa] = useState<string>('');

  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferSuccess() {
    navigation.navigate('TransferSuccess');
  }

  function handleTransferMake() {
    
    if (!twofa) {
      Alert.alert('2FA é obrigatório');
    } else {
      dispatch(setLoading({loading: true}));
      const formatunMount = unMount.replace(',', '.');

      api
        .post(
          'api/transfer/internal',
          {
            amount: formatunMount,
            code: email,
            twofa: twofa,
          },
          {
            headers: {'device-token': device_token},
          },
        )
        .then(response => {
          const {message} = response.data;
          dispatch(setLoading({loading: false}));
          if (response.data.status) {
            Alert.alert(message);
            setTimeout(() => {
              navigation.navigate('TransferSuccess');
            }, 2000);
          } else {
            Alert.alert(message);
          }
        })
        .catch(error => {
          Alert.alert('Tente novamente mais tarde !')
          dispatch(setLoading({loading: false}));
        })
        .finally(() => dispatch(setLoading({loading: false})));
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <BackButtom onPress={handleBack}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Transferência interna</Title>

          <Space />
        </Header>

        <ValueContent>
          <SimbolText>R$</SimbolText>
          <ValueText>{unMount}</ValueText>
        </ValueContent>

        <Form>
          <Input
            placeholder="email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
          />
          <Input
            placeholder="Digite seu 2FA"
            autoCorrect={false}
            value={twofa}
            autoFocus={true}
            onChangeText={setTwofa}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholderTextColor="#A6A6A6"
          />
          <ContentButton>
            <Button
              title="Confirmar"
              type="primary"
              onPress={handleTransferMake}
            />
          </ContentButton>
        </Form>
      </Content>
    </Container>
  );
}
