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
  SubTitle,
  OptionContent,
  Options,
  OptionInfos,
  OptionTitle,
  OptionName,
  ButtonDropContent,
  OptionsData,
  OptionItem,
  OptionItemButton,
  ContentButton,
} from './styles';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function DepositCrypto() {
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

  function handleDepositCryptoCode() {
    navigation.navigate('DepositCryptoCode');
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

            <Title>Depósito em cripto</Title>

            <Space />
          </Header>

          <SubTitle>Selecione a wallet que deseja</SubTitle>

          <Options>
            <OptionContent
              onPress={() => handleIsActive(!isActive)}
              isActive={isActive}>
              <OptionInfos>
                <OptionTitle>Wallet</OptionTitle>
                <OptionName>Bitcoin - BTC</OptionName>
              </OptionInfos>

              <Icon name="chevron-down" color="#000000" size={RFValue(20)} />
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
        </Wrapper>
        <ContentButton>
          <Button
            title="Avançar"
            type="primary"
            onPress={handleDepositCryptoCode}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
