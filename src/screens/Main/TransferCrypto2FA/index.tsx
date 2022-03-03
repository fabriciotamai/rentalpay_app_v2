import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  InfoText,
  InputContent,
  Form,
  ContentButton,
} from './styles';

import Input from '../../../components/Input';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function TransferCrypto2FA() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferCryptoSuccess() {
    navigation.navigate('TransferCryptoSuccess');
  }

  return (
    <Container>
      <Content>
        <Header>
          <BackButtom onPress={handleBack}>
            <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
          </BackButtom>

          <Title>Transferir em cripto</Title>

          <Space />
        </Header>
        <InfoText>
          Verifique se o endereço informado é{'\n'}compatível com a rede da
          moeda. Essa{'\n'}operação é irreversível.
        </InfoText>
        <Form>
          <Input
            placeholder="Endereço de wallet informado"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholderTextColor="#C9CACA"
          />
          <InputContent>
            <Input
              placeholder="Digite seu 2FA"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
              placeholderTextColor="#A6A6A6"
            />
          </InputContent>
          <ContentButton>
            <Button
              title="Confirmar"
              type="primary"
              onPress={handleTransferCryptoSuccess}
            />
          </ContentButton>
        </Form>
      </Content>
    </Container>
  );
}
