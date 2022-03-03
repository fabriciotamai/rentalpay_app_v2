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

export function TransferEmail({route}) {
  const dispatch = useDispatch();
  const {device_token} = useSelector((state: RootState) => state.user);
  const {unMount} = route.params;
  const [email, setEmail] = useState<string>('');
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferSuccess() {
    if(!email){
      Alert.alert("e-mail é obrigatório")
    }else{
    navigation.navigate('Transfer2FA',{unMount:unMount, email:email});
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
            placeholder="Ditei seu e-mail"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#A6A6A6"
          />
          <ContentButton>
            <Button
              title="Confirmar"
              type="primary"
              onPress={handleTransferSuccess}
            />
          </ContentButton>
        </Form>
      </Content>
    </Container>
  );
}
