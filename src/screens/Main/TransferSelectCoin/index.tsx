import React, {useState} from 'react';

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

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function TransferSelectCoin() {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);
  const [currencysSelect, setCurrencysSelect] = useState<boolean>(false);

  const coins = [
    {
      id: 2,
      name: 'Real - BRL',
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferAmount() {
    navigation.navigate('TransferAmount');
  }

  function handleIsActive(active: boolean) {
    setIsActive(active);
  }

  function handleButton(isSelect: boolean) {
    setCurrencysSelect(isSelect)
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

          <SubTitle>Qual saldo deseja utilizar?</SubTitle>

          <Options>
            <OptionContent
              isActive={isActive}
              onPress={() => handleIsActive(!isActive)}>
              <OptionInfos>
                <OptionTitle>Wallet</OptionTitle>
                <OptionName>Bitcoin - BTC</OptionName>
              </OptionInfos>
              <ButtonDropContent>
                <Icon name="chevron-down" color="#000000" size={RFValue(20)} />
              </ButtonDropContent>
            </OptionContent>
            {isActive && (
              <OptionsData>
                {coins.map(({id, name}) => (
                  <OptionItemButton
                    onPress={() => handleButton(!currencysSelect)}
                    key={id}
                    currencysSelect={currencysSelect}>
                    <OptionItem currencysSelect={currencysSelect}>{name}</OptionItem>
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
            onPress={handleTransferAmount}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
