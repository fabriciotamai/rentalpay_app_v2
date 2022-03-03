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
  ContentButton,
} from './styles';

import {CardCoin} from '../../../components/CardCoin';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import BtcIcon from '../../../assets/icons/btc_icon.svg';
import EthIcon from '../../../assets/icons/tether_icon.svg';
import CardanoIcon from '../../../assets/icons/cardano_icon.svg';
import ZeltsIcon from '../../../assets/icons/zelts_icon.svg';

export function PayConfirmRentalCredit() {
  const navigation = useNavigation();
  const [payment, setPayment] = useState('1');

  function handleBack() {
    navigation.goBack();
  }

  function handleHome() {
    navigation.navigate('HomeTab');
  }

  function handlePayRentalReview() {
    navigation.navigate('PayRentalCreditReview');
  }

  function handleSelectPayment(method: string) {
    setPayment(method);
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

            <Title>Minhas wallets</Title>

            <Space />
          </Header>
          <Options>
            <OptionContent onPress={() => handleSelectPayment('1')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Parcelado em 1x</OptionTitle>
                  <OptionName>4,35% de juros</OptionName>
                </OptionInfos>
                <RadioButton>{payment === '1' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('2')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Parcelado em 2x</OptionTitle>
                  <OptionName>4,63% de juros</OptionName>
                </OptionInfos>
                <RadioButton>{payment === '2' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('3')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Parcelado em 3x</OptionTitle>
                  <OptionName>4,91% de juros</OptionName>
                </OptionInfos>
                <RadioButton>{payment === '3' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('4')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Parcelado em 4x</OptionTitle>
                  <OptionName>4,91% de juros</OptionName>
                </OptionInfos>
                <RadioButton>{payment === '4' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('5')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Parcelado em 5x</OptionTitle>
                  <OptionName>4,91% de juros</OptionName>
                </OptionInfos>
                <RadioButton>{payment === '5' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <OptionContent onPress={() => handleSelectPayment('6')}>
              <OptionWrapper>
                <OptionInfos>
                  <OptionTitle>Parcelado em 6x</OptionTitle>
                  <OptionName>4,91% de juros</OptionName>
                </OptionInfos>
                <RadioButton>{payment === '6' && <RadioCheck />}</RadioButton>
              </OptionWrapper>
            </OptionContent>
            <ContentButton>
              <Button
                title="Avançar"
                type="primary"
                onPress={handlePayRentalReview}
              />
            </ContentButton>
          </Options>
        </Wrapper>
      </Content>
    </Container>
  );
}
