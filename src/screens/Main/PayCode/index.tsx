import React, {useState} from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  PayCodeText,
  Form,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import Input from '../../../components/Input';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import Icon from 'react-native-vector-icons/Feather';

export function PayCode() {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  function handleBack() {
    navigation.goBack();
  }

  function handleSelectPayment() {
    navigation.navigate('SelectPayment');
  }

  return (
    <Container>
      <Content>
        <Wrapper>
          <Header>
            <BackButtom onPress={handleBack}>
              <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
            </BackButtom>

            <Title>Pague em real</Title>

            <Space />
          </Header>

          <PayCodeText>Insira o código copia e cola para pagar</PayCodeText>

          <Form>
            <Input
              placeholder="Cole o código aqui"
              autoCorrect={false}
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
          </Form>
        </Wrapper>
        <ContentButton>
          <Button
            title="Confirmar código"
            type="primary"
            onPress={handleSelectPayment}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
