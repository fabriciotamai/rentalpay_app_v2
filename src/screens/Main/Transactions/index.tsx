import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';


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
  ActivityList,
  ButtonCard,
  CardCoinsContent,
} from './styles';

import {useUser} from '../../../hooks/useGetRepo';

import {RootStackParamList} from '../../../utils/RootStackParams';


import {CardHome} from '../../../components/CardHome';
import {CardData} from '../../../components/CardData';
import {CardCoin} from '../../../components/CardCoin';
import {ModalTransaction} from '../../../components/ModalTransaction';

import TransactionsActiveIcon from '../../../assets/icons/transactions_active_icon.svg';
import EntryIcon from '../../../assets/icons/entry_icon.svg';
import ExitIcon from '../../../assets/icons/exit_icon.svg';
import BtcIcon from '../../../assets/icons/btc_icon.svg';
import EthIcon from '../../../assets/icons/tether_icon.svg';
import CardanoIcon from '../../../assets/icons/cardano_icon.svg';
import ZeltsIcon from '../../../assets/icons/zelts_icon.svg';

interface CardProps {
  type: 'brl' | 'crypto';
}
type screens = NativeStackNavigationProp<RootStackParamList>;

import {RootState} from '../../../store/storeConfig';


export function Transactions() {
  const {device_token, totalBalance, currencys, extract} = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<screens>();
  const [typeTransaction, setTypeTransaction] = useState(false);
  // const {typeCurrency} = useUser();
  const [modalVisible, setModalVisible] = useState(false);

  function handleTransactionExtract() {
    if (!typeTransaction) {
      navigation.navigate('TransactionExtract');
    } else {
      navigation.navigate('TransactionWallets');
    }
  }

  const data = [
    {
      user: 'Nome do usuário',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: 'R$900.00',
      description: 'Depósito Orpag',
      type: 'positive',
      img: EntryIcon,
    },
    {
      user: 'Nome do usuário',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: 'R$900.00',
      description: 'Depósito Orpag',
      type: 'positive',
      img: EntryIcon,
    },
    {
      user: 'Nome do usuário',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: 'R$900.00',
      description: 'Depósito Orpag',
      type: 'positive',
      img: EntryIcon,
    },
    {
      user: 'Nome do usuário',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: 'R$900.00',
      description: 'Depósito Orpag',
      type: 'negative',
      img: ExitIcon,
    },
    {
      user: 'Nome do usuário',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: 'R$900.00',
      description: 'Depósito Orpag',
      type: 'positive',
      img: EntryIcon,
    },
    {
      user: 'Nome do usuário',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: 'R$900.00',
      description: 'Depósito Orpag',
      type: 'positive',
      img: EntryIcon,
    },
  ];

  const coins = [
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

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <ItensContent>
          <TransactionsActiveIcon width={RFValue(29)} height={RFValue(29)} />

          <HeaderTitle>Transações</HeaderTitle>
        </ItensContent>

        <HeaderPicture
          source={{uri: 'https://s.conjur.com.br/img/b/coringa.jpeg'}}
        />
      </Header>

      <CardHome
        option_left="deposit"
        option_center="withdraw"
        option_right="transfer"
        type="Transaction"
        typeTransaction={typeTransaction}
        handlePress={() => setTypeTransaction(!typeTransaction)}
      />

      <SubTitlesContent>
        <SubTitle>Últimas atividades</SubTitle>
        <SeeAllButton onPress={handleTransactionExtract}>
          <SeeAll>Ver todas</SeeAll>
        </SeeAllButton>
      </SubTitlesContent>
      {!typeTransaction ? (
        <ActivityList
          data={extract}
          renderItem={({item, index}) => (
            <ButtonCard onPress={() => setModalVisible(true)}>
              <CardData data={item} background={index} img={item.img} />
            </ButtonCard>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <CardCoinsContent
          data={currencys}
          renderItem={({item}) => <CardCoin data={item} img={item.img} />}
        />
      )}
      <ModalTransaction
        visible={modalVisible}
        setVisible={() => setModalVisible(false)}
        type="BRL"
      />
    </Container>
  );
}
