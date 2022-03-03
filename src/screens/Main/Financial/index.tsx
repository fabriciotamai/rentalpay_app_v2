import React, {useState} from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  BalanceContent,
  BalanceText,
  BalanceValue,
  OptionsTab,
  AllButtom,
  AllButtomText,
  IncomeButtom,
  IncomeButtomText,
  OutComeButtom,
  OutComeButtomText,
  ActivityList,
  ButtonCard,
} from './styles';

import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {CardData} from '../../../components/CardData';
import {ModalTransaction} from '../../../components/ModalTransaction';

import ArrowLeft from '../../../assets/icons/arrow_left_white.svg';
import EntryIcon from '../../../assets/icons/entry_icon.svg';
import ExitIcon from '../../../assets/icons/exit_icon.svg';

interface FilterProps {
  filter: string;
}

export function Financial() {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);

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
      type: 'positive',
      img: EntryIcon,
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeFilter(dataFilter: 'all' | 'income' | 'outcome') {
    setFilter(dataFilter);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButtom onPress={handleBack}>
          <ArrowLeft width={RFValue(24)} height={RFValue(24)} />
        </BackButtom>

        <Title>Financeiro</Title>

        <Space />
      </Header>
      <BalanceContent>
        <BalanceText>Saldo em Real</BalanceText>
        <BalanceValue>R$ 669.10</BalanceValue>
      </BalanceContent>
      <Content>
        <OptionsTab>
          <AllButtom
            isActive={filter === 'all'}
            onPress={() => handleChangeFilter('all')}>
            <AllButtomText>Todos</AllButtomText>
          </AllButtom>
          <IncomeButtom
            isActive={filter === 'income'}
            onPress={() => handleChangeFilter('income')}>
            <IncomeButtomText>Entradas</IncomeButtomText>
          </IncomeButtom>
          <OutComeButtom
            isActive={filter === 'outcome'}
            onPress={() => handleChangeFilter('outcome')}>
            <OutComeButtomText>Saídas</OutComeButtomText>
          </OutComeButtom>
        </OptionsTab>
        <ActivityList
          data={data}
          renderItem={({item, index}) => (
            <ButtonCard onPress={() => setModalVisible(true)}>
              <CardData data={item} background={index} img={item.img} />
            </ButtonCard>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
      <ModalTransaction
        visible={modalVisible}
        setVisible={() => setModalVisible(false)}
        type="CREDIT"
      />
    </Container>
  );
}
