import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import { useSelector} from 'react-redux';
import { RootState} from '../../../store/storeConfig';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  WalletsListt,
  ContentButton,
} from './styles';

import {CardCoin} from '../../../components/CardCoin';
import {Button} from '../../../components/Button';

import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';
import BtcIcon from '../../../assets/icons/btc_icon.svg';
import EthIcon from '../../../assets/icons/tether_icon.svg';
import CardanoIcon from '../../../assets/icons/cardano_icon.svg';
import ZeltsIcon from '../../../assets/icons/zelts_icon.svg';



export function TransactionWallets() {
  const {currencys} = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();

  const data = [
    {
      img: BtcIcon,
      name: 'Bitcoin (BTC)',
      balance: '0.0020000',
    },
    {
      img: EthIcon,
      name: 'Ethereum (ETH)',
      balance: '0.0020000',
    },
    {
      img: CardanoIcon,
      name: 'Cardano (ADA)',
      balance: '0.0020000',
    },
    {
      img: ZeltsIcon,
      name: 'Zelts Silver',
      balance: '0.0020000',
    },
    {
      img: BtcIcon,
      name: 'Bitcoin (BTC)',
      balance: '0.0020000',
    },
    {
      img: EthIcon,
      name: 'Ethereum (ETH)',
      balance: '0.0020000',
    },
    {
      img: CardanoIcon,
      name: 'Cardano (ADA)',
      balance: '0.0020000',
    },
    {
      img: ZeltsIcon,
      name: 'Zelts Silver',
      balance: '0.0020000',
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleHome() {
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

            <Title>Minhas wallets</Title>

            <Space />
          </Header>

          <WalletsListt
            data={currencys}
            renderItem={({item}) => <CardCoin data={item} img={item.img} />}
            ListFooterComponent={
              <ContentButton>
                <Button
                  title="Voltar para Cripto"
                  type="primary"
                  onPress={handleHome}
                />
              </ContentButton>
            }
          />
        </Wrapper>
      </Content>
    </Container>
  );
}
