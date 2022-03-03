import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper';

import {
  Container,
  Content,
  ButtonContent,
  HeaderContent,
  Space,
  FirstSwiper,
  ImgContent,
  TextContent,
  TitleText,
  InfoText,
  SecondSwiper,
  AdvanceButton,
  AdvanceButtonText,
} from './styles';


import {Button} from '../../../components/Button';

import FirstImg from '../../../assets/imgs/coins_list_img.svg';
import SecondtImg from '../../../assets/imgs/coin_graph_img.svg';



export function StartPage() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Login');
  }
  return (
    <Container>
      <Content>
        <HeaderContent>
          <Space />
          <AdvanceButton onPress={handleLogin}>
            <AdvanceButtonText>Pular</AdvanceButtonText>
          </AdvanceButton>
        </HeaderContent>
        <Swiper showsButtons={false}>
          <FirstSwiper>
            <ImgContent>
              <FirstImg />
            </ImgContent>
            <TextContent>
              <TitleText>Receba e envie{'\n'}pagamentos em cripto</TitleText>
              <InfoText>
                A qualquer hora, em qualquer lugar.{'\n'}É fácil e rápido.
              </InfoText>
            </TextContent>
          </FirstSwiper>
          <SecondSwiper>
            <ImgContent>
              <SecondtImg />
            </ImgContent>
            <TextContent>
              <TitleText>Simule e parcele suas{'\n'}compras</TitleText>
              <InfoText>
                Com Rental Credit você pode parcelar{'\n'}suas contas com valor
                em cripto.
              </InfoText>
            </TextContent>
          </SecondSwiper>
        </Swiper>
        <ButtonContent>
          <Button title="Começar" type="primary" onPress={handleLogin} />
        </ButtonContent>
      </Content>
    </Container>
  );
}
