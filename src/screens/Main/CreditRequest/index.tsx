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
  InfoText,
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

export function CreditRequest() {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);

  const contracts = [
    {
      id: 1,
      contract: 'Contrato #124834 (Upper USD)',
    },
    {
      id: 2,
      contract: 'Contrato #43983 (Upper USD)',
    },
    {
      id: 3,
      contract: 'Contrato #34323 (Upper GBP)',
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleCreditAmount() {
    navigation.navigate('CreditAmount');
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

            <Title>Solicitar crédito</Title>

            <Space />
          </Header>

          <SubTitle>Selecione um contrato ativo</SubTitle>

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
                {contracts.map(({id, contract}) => (
                  <OptionItemButton key={id}>
                    <OptionItem>{contract}</OptionItem>
                  </OptionItemButton>
                ))}
              </OptionsData>
            )}
          </Options>

          {!isActive && (
            <InfoText>
              Consulte as condições de abertura de{'\n'}solicitação de crédito,
              assim como suas{'\n'}taxas e prazos de compensação.
            </InfoText>
          )}
        </Wrapper>
        <ContentButton>
          <Button title="Avançar" type="primary" onPress={handleCreditAmount} />
        </ContentButton>
      </Content>
    </Container>
  );
}
