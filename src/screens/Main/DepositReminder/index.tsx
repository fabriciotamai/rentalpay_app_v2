import React, {useState} from 'react';
import { Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  ReminderText,
  Check,
  Checkbox,
  LabelCheck,
  ContentButton,
} from './styles';

import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function DepositReminder() {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);

  function handleBack() {
    navigation.goBack();
  }

  function handleDepositSuccess() {
    if(setCheck){
    navigation.navigate('Deposit');
  }else{
    Alert.alert("É preciso concordar com o termo para continuar")
  }
  }

  return (
    <Container>
      <Content>
        <Wrapper>
          <Header>
            <BackButtom onPress={handleBack}>
              <ArrowLeft width={RFValue(14)} height={RFValue(14)} />
            </BackButtom>

            <Title>Lembretes importantes</Title>

            <Space />
          </Header>

          <ReminderText>
            Serão aceitos somente depósitos{'\n'}provenientes de conta bancária
            em nome{'\n'}do cliente cadastrado. Favor depositar{'\n'}exatamente
            o valor informado na{'\n'}solicitação, caso contrário a operação
            {'\n'}não será efetuada.
          </ReminderText>

          <Check>
            <Checkbox active={check} onPress={() => setCheck(!check)}>
              {check && (
                <Icon name="check" color="#ffffff" size={RFValue(18)} />
              )}
            </Checkbox>
            <LabelCheck>
              Declaro que meu depósito possui a{'\n'}mesma titularidade.
              Depósitos{'\n'}procedentes de contas pré-pagas não{'\n'}serão
              aceitos. Contas conjuntas{'\n'}possuem regras específicas.
            </LabelCheck>
          </Check>
        </Wrapper>
        <ContentButton>
          <Button
            title="Proxímo"
            type="primary"
            onPress={handleDepositSuccess}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
