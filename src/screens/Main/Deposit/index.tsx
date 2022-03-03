import React, {useState} from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  SubTitle,
  ValueContent,
  Simbol,
  ValueInput,
  InfoText,
  Options,
  OptionContent,
  OptionInfos,
  OptionTitle,
  OptionName,
  RadioButton,
  RadioCheck,
  Wrapper,
  ContentButton,
  // ContainerButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Alert, StatusBar} from 'react-native';
import {Button} from '../../../components/Button';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../store/storeConfig';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import api from '../../../services/api';
import {setLoading} from '../../../store/actions/loading';

export function Deposit() {
  const dispatch = useDispatch();
  const {device_token} = useSelector((state: RootState) => state.user);
  const [unMount, setUnmount] = useState<string>('0,00');
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleDepositCode() {
    navigation.navigate('DepositCode');
  }

  
  function handleDepositOrpag() {
    if (unMount > '0,00') {
      const formatunMount = unMount.replace('.', '').replace(',', '');
      
      dispatch(setLoading({loading: true}));
      api
        .post(
          'api/deposit',
          {
            payment_method: 'orpag',
            amount: formatunMount,
          },
          {
            headers: {'device-token': device_token},
          },
        )
        .then(response => {
          dispatch(setLoading({loading: false}));
          const {message, orpagInvoice} = response.data;
          if (response.data.status) {
            Alert.alert('sucesso', message, [
              {
                text: 'Proxímo',
                onPress: () =>
                  navigation.navigate('DepositCode', {
                    orpagInvoice: orpagInvoice,
                    unMount: unMount,
                  }),
                style: 'cancel',
              },
            ]);
          } else {
            Alert.alert(message);
          }
        })
        .catch(error => {
          dispatch(setLoading({loading: false}));
        })
        .finally(() => dispatch(setLoading({loading: false})));
    } else {
      Alert.alert('quantia é obrigatória');
    }
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

            <Title>Depósito em real</Title>

            <Space />
          </Header>

          <SubTitle>Qual quantia será depositada?</SubTitle>

          <ValueContent>
            <Simbol>R$</Simbol>
            <ValueInput
              type={'money'}
              value={unMount}
              onChangeText={setUnmount}
              autoCorrect={false}
              autoFocus={true}
              autoCapitalize="none"
              options={{
                precision: 2,
                separator: ',',
                delimiter: '',
                unit: '',
                suffixUnit: '',
              }}
            />
          </ValueContent>

          <InfoText>
            Para prosseguir atente-se ao limite{'\n'}disponível para esta
            transação.
          </InfoText>

          <Options>
            <OptionContent>
              <OptionInfos>
                <OptionTitle>Deposite via</OptionTitle>
                <OptionName>OrPag</OptionName>
              </OptionInfos>
              <RadioButton>
                <RadioCheck />
              </RadioButton>
            </OptionContent>
          </Options>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" onPress={handleDepositOrpag} type="primary" />
        </ContentButton>
      </Content>
    </Container>
  );
}
