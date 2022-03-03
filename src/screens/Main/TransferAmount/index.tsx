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
  Wrapper,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Alert, StatusBar} from 'react-native';
import {Button} from '../../../components/Button';
import { useSelector} from 'react-redux';
import {RootState} from '../../../store/'

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function TransferAmount({route}) {
  
  const [unMount, setUnmount] = useState<string>('0,0');
  const {balanceTotal} = useSelector((state: RootState) => state.user);
  const {currencysSelect} = route.params;
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleTransfer2FA() {
    if (unMount >= '0,01') {
      navigation.navigate('TransferEmail',{unMount:unMount});
    } else {
      Alert.alert('É nescessário inserir um valor');
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

            <Title>Transferência interna</Title>

            <Space />
          </Header>

          <SubTitle>Qual valor deseja transferir?</SubTitle>

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
                delimiter: '.',
                unit: '',
                suffixUnit: '',
              }}
            />
          </ValueContent>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" onPress={handleTransfer2FA} type="primary" />
        </ContentButton>
      </Content>
    </Container>
  );
}
