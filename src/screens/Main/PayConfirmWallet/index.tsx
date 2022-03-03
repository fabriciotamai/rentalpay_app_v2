import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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
  OptionContentSelected,
  RadioButton,
  RadioCheck,
  OptionContent,
  Options,
  OptionInfos,
  OptionTitle,
  OptionName,
  ButtonDropContent,
  OptionsData,
  OptionItem,
  OptionItemButton,
  BalanceContent,
  BalanceAvailableText,
  BalanceValue,
  ContentButton,
} from './styles';

import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function PayConfirmWallet() {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);

  const coins = [
    {
      id: 1,
      name: 'Bitcoin - BTC',
    },
    {
      id: 2,
      name: 'Real - BRL',
    },
    {
      id: 3,
      name: 'Ethereum - ETH',
    },
    {
      id: 4,
      name: 'Cardano - ADA',
    },
    {
      id: 5,
      name: 'Binance Coin - BNB',
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handlePayReview() {
    navigation.navigate('PayWalletReview');
  }

  function handleIsActive(active: boolean) {
    setIsActive(active);
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
            <ValueText>200.00</ValueText>
          </ValueContent>

          <Options>
            <OptionContentSelected>
              <OptionInfos>
                <OptionTitle>Pague via</OptionTitle>
                <OptionName>Saldo em real</OptionName>
              </OptionInfos>
              <RadioButton>
                <RadioCheck />
              </RadioButton>
            </OptionContentSelected>
          </Options>
          <Options>
            <OptionContent isActive={isActive}>
              <OptionInfos>
                <OptionTitle>Wallet</OptionTitle>
                <OptionName>Bitcoin - BTC</OptionName>
              </OptionInfos>
              <ButtonDropContent onPress={() => handleIsActive(!isActive)}>
                <Icon name="chevron-down" color="#000000" size={RFValue(20)} />
              </ButtonDropContent>
            </OptionContent>
            {isActive && (
              <OptionsData>
                {coins.map(({id, name}) => (
                  <OptionItemButton key={id}>
                    <OptionItem>{name}</OptionItem>
                  </OptionItemButton>
                ))}
              </OptionsData>
            )}
          </Options>
          {!isActive && (
            <>
              <BalanceContent>
                <BalanceAvailableText>Saldo disponível</BalanceAvailableText>
                <BalanceValue>0.303940 BTC</BalanceValue>
              </BalanceContent>
              <BalanceContent>
                <BalanceAvailableText>Cotação</BalanceAvailableText>
                <BalanceValue>8.92</BalanceValue>
              </BalanceContent>
              <BalanceContent>
                <BalanceAvailableText>Valor em Real</BalanceAvailableText>
                <BalanceValue>293030.00</BalanceValue>
              </BalanceContent>
            </>
          )}
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" type="primary" onPress={handlePayReview} />
        </ContentButton>
      </Content>
    </Container>
  );
}
