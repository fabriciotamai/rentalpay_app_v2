import React, {useState} from 'react';

import {
  Container,
  Content,
  Header,
  BackButtom,
  Title,
  Space,
  LogoContent,
  OptionsTab,
  AllButtom,
  AllButtomText,
  RequestButtom,
  RequestButtomText,
  PaymentButtom,
  PaymentButtomText,
  ActivityList,
} from './styles';

import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';

import {CardData} from '../../../components/CardData';

import ArrowLeft from '../../../assets/icons/arrow_left_white.svg';
import LogoCredit from '../../../assets/icons/logo_rental_credit.svg';
import CreditIcon from '../../../assets/icons/credit_secondary_icon.svg';

interface FilterProps {
  filter: string;
}

export function CreditExtract() {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('all');

  const data = [
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
    {
      user: 'Número ID',
      date: 'Qua 7 Nov 2021 07:18:00',
      value: '0.930293',
      description: 'Valor solicitado',
      img: CreditIcon,
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeFilter(dataFilter: 'all' | 'request' | 'payment') {
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

        <Title>Histórico de Solicitações</Title>

        <Space />
      </Header>
      <LogoContent>
        <LogoCredit width={RFValue(205)} />
      </LogoContent>
      <Content>
        <OptionsTab>
          <AllButtom
            isActive={filter === 'all'}
            onPress={() => handleChangeFilter('all')}>
            <AllButtomText>Todos</AllButtomText>
          </AllButtom>
          <RequestButtom
            isActive={filter === 'request'}
            onPress={() => handleChangeFilter('request')}>
            <RequestButtomText>Solicitações</RequestButtomText>
          </RequestButtom>
          <PaymentButtom
            isActive={filter === 'payment'}
            onPress={() => handleChangeFilter('payment')}>
            <PaymentButtomText>Pagamentos</PaymentButtomText>
          </PaymentButtom>
        </OptionsTab>
        <ActivityList
          data={data}
          renderItem={({item, index}) => (
            <CardData data={item} background={index} img={item.img} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Content>
    </Container>
  );
}
