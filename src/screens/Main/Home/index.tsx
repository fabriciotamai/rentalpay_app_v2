import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  ItensContent,
  HeaderTitle,
  HeaderPicture,
  SubTitlesContent,
  SubTitle,
  SeeAllButton,
  SeeAll,
  CardCoinsContent,
} from './styles';

import {onLoadBalance} from '../../../store/actions/user';

import {CardHome} from '../../../components/CardHome';
import {CardCoin} from '../../../components/CardCoin';
import {CardData} from '../../../components/CardData';


import api from '../../../services/api';
import {setLoading} from '../../../store/actions/loading';


import HomeActiveIcon from '../../../assets/icons/home_active_icon.svg';

// import BTC from '../../../assets/icons/btc_icon.svg';
// import ETH from '../../../assets/icons/tether_icon.svg';
// import CardanoIcon from '../../../assets/icons/cardano_icon.svg';
// import ZeltsIcon from '../../../assets/icons/zelts_icon.svg';

import {RootState} from '../../../store/storeConfig';
import {useSelector, useDispatch} from 'react-redux';

interface CardCoinProps {
  coinImage: string;
  coinName: string;
  coinBalance: string;
}

export function Home() {
  const dispatch = useDispatch();
  const {device_token, totalBalance, currencys, extract} = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const [typeTransaction, setTypeTransaction] = useState(false);






  // const coins = [
  //   {
  //     img: BtcIcon,
  //     name: 'Bitcoin (BTC)',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: EthIcon,
  //     name: 'Ethereum (ETH)',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: CardanoIcon,
  //     name: 'Cardano (ADA)',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: ZeltsIcon,
  //     name: 'Zelts Silver',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: BtcIcon,
  //     name: 'Bitcoin (BTC)',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: EthIcon,
  //     name: 'Ethereum (ETH)',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: CardanoIcon,
  //     name: 'Cardano (ADA)',
  //     balance: '0.0020000',
  //   },
  //   {
  //     img: ZeltsIcon,
  //     name: 'Zelts Silver',
  //     balance: '0.0020000',
  //   },
  // ];

  




  function handleTransactionWallets() {
    navigation.navigate('TransactionWallets');
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <ItensContent>
          <HomeActiveIcon width={RFValue(29)} height={RFValue(29)} />

          <HeaderTitle>Início</HeaderTitle>
        </ItensContent>

        <HeaderPicture
          source={{uri: 'https://s.conjur.com.br/img/b/coringa.jpeg'}}
        />
      </Header>

      <CardHome
        option_left="receive"
        option_center="pay"
        option_right="crypto"
        type="Home"
        handlePress={() => setTypeTransaction(!typeTransaction)}
      />

      <SubTitlesContent>
        <SubTitle>Minhas wallets</SubTitle>
        <SeeAllButton onPress={handleTransactionWallets}>
          <SeeAll>Ver todas</SeeAll>
        </SeeAllButton>
      </SubTitlesContent>

      <CardCoinsContent
        data={currencys}
        renderItem={({item}) => <CardCoin data={item} />}
      />
     
    </Container>
  );
}
