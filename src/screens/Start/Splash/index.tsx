import React, {useEffect} from 'react';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Logo from '../../../assets/icons/logo.svg';
import BackgroundRental from '../../../assets/icons/rentalBackGround.svg';

import api from '../../../services/api';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/storeConfig';
import {RootStackParamList} from '../../../utils/RootStackParams';

type screenPin = NativeStackNavigationProp<RootStackParamList, 'Pin'>;

export function Splash() {
  const {device_token} = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<screenPin>();

  useEffect(() => {
    async function getToken() {
      const getUserStorage = await AsyncStorage.getItem('@RentalPay:user');

      if (getUserStorage) {
        const userParse = JSON.parse(getUserStorage);
        handleRefreshToken(userParse);
      }
    }
    getToken();

    setTimeout(() => {
      navigation.navigate('StartPage');
    }, 4000);
  }, []);

  function handleRefreshToken(userParse: object) {
    api
      .get('api/refresh', {
        headers: {
          Authorization: `Bearer ${userParse.access_token}`,
          'device-token': device_token,
        },
      })
      .then(response => {
       
        if (response.data.status) {
          navigation.navigate('Pin');
        }
      });
  }

  return (
    <Container>
      <BackgroundRental />
    </Container>
  );
}
