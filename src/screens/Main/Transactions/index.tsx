import React, {useState, useEffect} from 'react';
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


import {RootStackParamList} from '../../../utils/RootStackParams';
import {onLoadExtractModal} from '../../../store/actions/extractUser';
import { useDispatch } from 'react-redux';


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

// interface CardProps {
//   type: 'brl' | 'crypto';
// }
type screens = NativeStackNavigationProp<RootStackParamList>;

import {RootState} from '../../../store/storeConfig';


export function Transactions() {
  const dispatch = useDispatch();
  const { totalBalance, currencys, extract} = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<screens>();
  const [typeTransaction, setTypeTransaction] = useState(false);
  // const {typeCurrency} = useUser();
  const [modalVisible, setModalVisible] = useState(false);

  const [ buttonActive, setButtonActive] = useState(false);

  function handleTransactionExtract() {
    if (!typeTransaction) {
      navigation.navigate('TransactionExtract');
    } else {
      navigation.navigate('TransactionWallets');
    }
  }

  function openModalExtractOrUpdateRedux(modalVisible:boolean, item:object):void {
   
    setModalVisible(modalVisible);


    dispatch(onLoadExtractModal({
      id:item.id,
      date:item.created_at,
      type_transaction:item.type_id,
      status:item.status,
      value:item.value,


    }))
    


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
           
              <CardData onPress={() => openModalExtractOrUpdateRedux(!modalVisible, item)} data={item} background={index} img={item.img} />
            
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <CardCoinsContent
          data={extract}
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


