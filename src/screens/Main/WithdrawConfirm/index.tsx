import React, {useState} from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  ValueContent,
  SimbolText,
  ValueText,
  EmailContent,
  InfoText,
  OrpagContent,
  Check,
  Checkbox,
  LabelCheck,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Alert, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import Input from '../../../components/Input';

export function WithdrawConfirm({route}) {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [idORpag, setIDORpag] = useState<string>('');
  const {unMount} = route.params;
  const [check, setCheck] = useState(false);
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleWithdraw2FA() {
 
    if (!emailAddress) {
      Alert.alert('É Nescessário inserir um endereço de e-mail');
    } else if (!idORpag) {
      Alert.alert('É nescessário inserir o ID ');
    } else if (!check) {
      Alert.alert('É nescessário concodar com os termos para prosseguir');
    }else{
      navigation.navigate('Withdraw2FA',{unMount: unMount, idORpag: idORpag, emailAddress: emailAddress});
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

            <Title>Pague em real</Title>

            <Space />
          </Header>
          <ValueContent>
            <SimbolText>R$</SimbolText>
            <ValueText>{unMount}</ValueText>
          </ValueContent>
          <EmailContent>
            <Input
              placeholder="Informe seu e-mail cadastrado"
              autoCorrect={false}
              value={emailAddress}
              onChangeText={setEmailAddress}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#C9CACA"
            />
          </EmailContent>
          <InfoText>
            O e-mail informado deve ser o mesmo{'\n'}cadastrado na OrPag.
          </InfoText>
          <OrpagContent>
            <Input
              placeholder="Informe seu Id OrPag"
              autoCorrect={false}
              value={idORpag}
              onChangeText={setIDORpag}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#C9CACA"
            />
          </OrpagContent>

          <Check>
            <Checkbox active={check} onPress={() => setCheck(!check)}>
              {check && (
                <Icon name="check" color="#ffffff" size={RFValue(18)} />
              )}
            </Checkbox>
            <LabelCheck>
              Declaro que meu saque possui a mesma{'\n'}titularidade. Saques
              direcionados para{'\n'}contas de titularidade diferente não{'\n'}
              serão aceitos. Contas conjuntas{'\n'}possuem regras específicas.
            </LabelCheck>
          </Check>
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" type="primary" onPress={handleWithdraw2FA} />
        </ContentButton>
      </Content>
    </Container>
  );
}
