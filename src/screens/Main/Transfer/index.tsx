import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  OptionContent,
  OptionWrapper,
  Options,
  OptionInfos,
  OptionTitle,
  OptionName,
  RadioButton,
  RadioCheck,
  InfoText,
  ContentButton,
} from './styles';

import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function Transfer() {
  const navigation = useNavigation();
  
  const [transferMethod, setTransferMethod] = useState('rentx');

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferSelectCoin() {
    navigation.navigate('TransferSelectCoin',{transferMethod:transferMethod});
  }
  function handleSelectTransfer(method: 'rentx' | 'rentalCoins') {
    setTransferMethod(method);
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

          <Options>
            <OptionContent onPress={() => handleSelectTransfer('rentx')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Enviar para</OptionTitle>
                  <OptionName>Rentx</OptionName>
                </OptionInfos>
                <RadioButton>
                  {transferMethod === 'rentx' && <RadioCheck />}
                </RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectTransfer('rentalCoins')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Enviar para</OptionTitle>
                  <OptionName>Rental Coins</OptionName>
                </OptionInfos>
                <RadioButton>
                  {transferMethod === 'rentalCoins' && <RadioCheck />}
                </RadioButton>
              </OptionWrapper>
            </OptionContent>
          </Options>
          <InfoText>
            Na Rental Pay, todo envio para outro tipo{'\n'}de saldo possui prazo
            de compensação.{'\n'}Consulte-os com antecedência.
          </InfoText>
        </Wrapper>
        <ContentButton>
          <Button
            title="Avançar"
            type="primary"
            onPress={handleTransferSelectCoin}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
