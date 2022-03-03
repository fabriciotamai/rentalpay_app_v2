import React from 'react';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  ItensContent,
  Photo,
  ChangeButtom,
  ChangeText,
  ContentButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function SettingAvatar() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
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

            <Title>Alterar avatar</Title>
            <Space />
          </Header>
          <ItensContent>
            <Photo
              source={{uri: 'https://s.conjur.com.br/img/b/coringa.jpeg'}}
            />
            <ChangeButtom>
              <ChangeText>Alterar foto</ChangeText>
            </ChangeButtom>
          </ItensContent>
        </Wrapper>
        <ContentButton>
          <Button title="Salvar" type="primary" />
        </ContentButton>
      </Content>
    </Container>
  );
}
