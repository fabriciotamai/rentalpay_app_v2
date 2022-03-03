import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  Content,
  Wrapper,
  Header,
  ItensContent,
  HeaderTitle,
  HeaderPicture,
  DataContent,
  FirstTitleContent,
  FirstTitleText,
  SecondTitleContent,
  SecondTitleText,
  ChangeAvatarContent,
  ChangeAvatarText,
  DefaultCoinContent,
  AlignContent,
  DefaultCoinText,
  DefaultCoinValue,
  RegisterContent,
  RegisterText,
  LanguageContent,
  LanguageText,
  LanguageValue,
  AddressContent,
  AddressText,
  TimeZoneContent,
  TimeZoneText,
  TimeZoneValue,
  TwoFAContent,
  TwoFAText,
  PrivacyContent,
  PrivacyText,
  ContentButton,
} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import SettingActiveIcon from '../../../assets/icons/config_active_icon.svg';
import {Button} from '../../../components/Button';

interface CardCoinProps {
  coinImage: string;
  coinName: string;
  coinBalance: string;
}

export function Setting() {
  const navigation = useNavigation();


  function handleTransactionWallets() {
    navigation.navigate('Login');
  }

  function handleChangeAvatar() {
    navigation.navigate('SettingAvatar');
  }
  function handleChangeRegistration() {
    navigation.navigate('SettingRegister');
  }
  function handleChangeAddress() {
    navigation.navigate('SettingAddress');
  }
  function handle2Setting2FA() {
    navigation.navigate('Setting2FA');
  }
  return (
    <Container>
      <Content>
        <Wrapper>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <ItensContent>
              <SettingActiveIcon width={RFValue(32)} height={RFValue(32)} />

              <HeaderTitle>Ajustes</HeaderTitle>
            </ItensContent>

            <HeaderPicture
              source={{uri: 'https://s.conjur.com.br/img/b/coringa.jpeg'}}
            />
          </Header>

          <DataContent>
            <FirstTitleContent>
              <FirstTitleText>Meus dados</FirstTitleText>
            </FirstTitleContent>
            <ChangeAvatarContent onPress={handleChangeAvatar}>
              <ChangeAvatarText>Alterar avatar</ChangeAvatarText>
            </ChangeAvatarContent>
            <RegisterContent onPress={handleChangeRegistration}>
              <RegisterText>Dados cadastrais</RegisterText>
            </RegisterContent>
            <AddressContent onPress={handleChangeAddress}>
              <AddressText>Endereço</AddressText>
            </AddressContent>
            <TwoFAContent onPress={handle2Setting2FA}>
              <TwoFAText>2FA</TwoFAText>
            </TwoFAContent>
            <SecondTitleContent>
              <SecondTitleText>Configurações</SecondTitleText>
            </SecondTitleContent>
            <DefaultCoinContent>
              <DefaultCoinText>Moeda padrão</DefaultCoinText>
              <AlignContent>
                <DefaultCoinValue>BRL</DefaultCoinValue>
                <Icon name="chevron-right" color="#C9CACA" size={RFValue(12)} />
              </AlignContent>
            </DefaultCoinContent>
            <LanguageContent>
              <LanguageText>Idioma</LanguageText>
              <AlignContent>
                <LanguageValue>PT</LanguageValue>
                <Icon name="chevron-right" color="#C9CACA" size={RFValue(12)} />
              </AlignContent>
            </LanguageContent>
            <TimeZoneContent>
              <TimeZoneText>Time zone</TimeZoneText>
              <AlignContent>
                <TimeZoneValue>GMT-12:00</TimeZoneValue>
                <Icon name="chevron-right" color="#C9CACA" size={RFValue(12)} />
              </AlignContent>
            </TimeZoneContent>
            <PrivacyContent>
              <PrivacyText>Políticas de Privacidade</PrivacyText>
            </PrivacyContent>
          </DataContent>
        </Wrapper>
        <ContentButton>
          <Button
            title="Log out"
            type="primary"
            onPress={handleTransactionWallets}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
