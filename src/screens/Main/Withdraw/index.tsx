import React,{useState} from 'react';

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
  BalanceContent,
  BalanceAvailableText,
  BalanceValue,
  Options,
  OptionContent,
  OptionInfos,
  OptionTitle,
  OptionName,
  RadioButton,
  RadioCheck,
  Wrapper,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import {RootState} from '../../../store/storeConfig';

import {Button} from '../../../components/Button';
import {useSelector} from 'react-redux'; 

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function Withdraw() {
  const {totalBalance} = useSelector((state : RootState) => state.user);
  const [unMount, setUnmount] = useState<string>('0,00');
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  function handleWithdrawConfirm() {
    navigation.navigate('WithdrawConfirm',{unMount:unMount});
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

            <Title>Saque em real</Title>

            <Space />
          </Header>

          <SubTitle>Qual valor deseja sacar?</SubTitle>

          <ValueContent>
            <Simbol>R$</Simbol>
            <ValueInput type={'money'}
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
              }}/>
          </ValueContent>

          <InfoText>
            Para prosseguir atente-se ao limite{'\n'}disponível para esta
            transação.
          </InfoText>

          <BalanceContent>
            <BalanceAvailableText>Saldo disponível</BalanceAvailableText>
            <BalanceValue>R$ {Number(totalBalance.brl).toFixed(2)}</BalanceValue>
          </BalanceContent>

          <Options>
            <OptionContent>
              <OptionInfos>
                <OptionTitle>Saque via</OptionTitle>
                <OptionName>OrPag</OptionName>
              </OptionInfos>
              <RadioButton>
                <RadioCheck />
              </RadioButton>
            </OptionContent>
          </Options>
        </Wrapper>
        <ContentButton>
          <Button
            title="Avançar"
            onPress={handleWithdrawConfirm}
            type="primary"
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
