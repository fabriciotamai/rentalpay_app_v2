import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/storeConfig';
import api from '../../../services/api';

import {
  Container,
  Content,
  Wrapper,
  Header,
  BackButtom,
  Title,
  Space,
  SubTitle,
  OptionContent,
  Options,
  OptionInfos,
  OptionTitle,
  OptionName,
  ButtonDropContent,
  OptionsData,
  OptionItem,
  OptionItemButton,
  ContentButton,
  ListCoins,
} from './styles';

import {Button} from '../../../components/Button';
import ArrowLeft from '../../../assets/icons/arrowLeftIcon.svg';

export function TransferCrypto() {
  const {device_token, totalBalance} = useSelector((state: RootState) => state.user);

  const [currencys, setCurrencys] = useState<Array>([]);
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);
  const [currencysSelect, setCurrencysSelect] = useState<string>('');

  const coins = [
    {
      id: 2,
      name: 'Real - BRL',
      symbol: 'BRL',
    },
  ];

  function handleBack() {
    navigation.goBack();
  }

  function handleTransferCryptoAmount() {
    navigation.navigate('TransferCryptoAmount', {
      currencysSelect: currencysSelect,
    });
  }
  function handleIsActive(active: boolean) {
    setIsActive(active);
  }

  function handleButton(symbol: string) {
    setCurrencysSelect(symbol);
  }

  
  useEffect(() => {
    function handleGetCoins() {
      api
        .get('api/coins', {
          headers: {'device-token': device_token},
        })
        .then(response => {
          const {coins} = response.data;
          console.log(coins);
          if (response.data.status) {
            setCurrencys(coins);
          }
        })
        .catch(error => {
          return;
        });
    }
    handleGetCoins();
  }, []);

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

            <Title>Transferir em cripto</Title>

            <Space />
          </Header>

          <SubTitle>Selecione a wallet que deseja</SubTitle>

          <Options>
            <OptionContent
              isActive={isActive}
              onPress={() => handleIsActive(!isActive)}>
              <OptionInfos>
                <OptionTitle>Wallet</OptionTitle>
                <OptionName>Bitcoin - BTC</OptionName>
              </OptionInfos>
              <ButtonDropContent onPress={() => handleIsActive(!isActive)}>
                <Icon name="chevron-down" color="#000000" size={RFValue(20)} />
              </ButtonDropContent>
            </OptionContent>
            {isActive && (
              <OptionsData>
                <ListCoins
                  data={currencys}
                  keyExtractor={item => item.id}
                  renderItem={({item, index}) => (
                    <OptionItemButton
                      onPress={() => handleButton(item.symbol)}
                      key={index}>
                      <OptionItem
                        currencysSelect={currencysSelect === item.symbol}>
                        {`${item.name} - (${item.symbol})`}
                      </OptionItem>
                    </OptionItemButton>
                  )}
                />
              </OptionsData>
            )}
          </Options>
        </Wrapper>
        <ContentButton>
          <Button
            title="Avançar"
            type="primary"
            onPress={handleTransferCryptoAmount}
          />
        </ContentButton>
      </Content>
    </Container>
  );
}
