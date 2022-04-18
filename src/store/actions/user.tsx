import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { setLoading } from './loading';
import { setMessage } from './message';

export interface UserProps {
  id?: string | null;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  email_verified_at: null;
  document_number?: string | null;
  phone_validated?: string | null;
  blocked?: boolean | null;
  blocked_pin?: boolean | null;
  created_at?: string | null;
  device_tokens?: [] | null;
  access_token?: string | null;
  totalBalance?: [] | null;
  pin?: string | null;
  currencys?: [] | null;
  google2fa_secret?: string | null;
  device_token_status?: boolean | null;
}

export interface deviceUser {
  device_token?: string | null;
  device_name?: string | null;
}

export const userLogged = (user: UserProps) => {
  return {
    type: 'SET_USER',
    payload: user,
  };
};

export const setBalance = (balance: object) => {
  return {
    type: 'GET_BALANCE',
    payload: balance,
  };
};
export const setTokenPush = (device_token: string) => {
  return {
    type: 'SET_TOKEN_PUSH',
    payload: device_token,
  };
};
export const setDeviceName = (device_name: string) => {
  return {
    type: 'SET_DEVICE_NAME',
    payload: device_name,
  };
};

// export const setBalance = (balance: UserProps) => {
//   return {
//     type: 'GET_BALANCE',
//     payload: balance,
//   };
// };

export const setWallet = (wallet: Object) => {
  return {
    type: 'SET_WALLET_SELECTED',
    payload: wallet,
  };
};

export const setCoinSelect = (coin: Object) => {
  return {
    type: 'SET_COIN',
    payload: coin,
  };
};

export const setAddressWalletReceive = (address: string) => {
  return {
    type: 'SET_ADDRESS_WALLET_RECEIVE',
    payload: address,
  };
};



export const setLoadExtract = (extract: object) => {
  return {
    type: 'GET_EXTRACT',
    payload: extract,
  };
};

export const onClearState = () => {
  return {
    type: 'CLEAR_STATE',
  };
};

export const onLogin = payload => {
  return dispatch => {

    dispatch(setLoading({ loading: true }));
    api
      .post('api/login', {
        email: payload.email,
        password: payload.password,
        device_token: payload.device_token,
      })

      .then(async response => {

        const { access_token } = response.data;
        const { pin, device_token_status, } = response.data.api;

        if (response.data.status) {
          dispatch(
            userLogged({
              access_token: access_token,
              pin: pin,
              device_token_status: device_token_status,
              email_verified_at: null
            }),
          );
          await AsyncStorage.setItem(
            '@RentalPay:user',
            JSON.stringify(response.data),
          );

          api.defaults.headers.common = {
            Authorization: `Bearer ${access_token},`,
          };
        } else {
          dispatch(
            setMessage({
              title: 'Oops...',
              text: 'Error logging account ',
            }),
          );
        }
      })
      .catch(err => {
        dispatch(
          setMessage({
            title: 'Oops...',
            text: 'Usuário/senha inválidos ',
          }),
        );
      }).finally(() => dispatch(setLoading({ loading: false })));
  };
};

export const onLoadBalance = payload => {
  return dispatch => {
    dispatch(setLoading({ loading: true }));
    api
      .get('api/balance', {
        headers: { 'device-token': payload.device_token },
      })
      .then(response => {
        console.log(response.data)
        dispatch(setLoading({ loading: false }));
        const { coins, total } = response.data;
        dispatch(
          setBalance({
            totalBalance: total,
            currencys: Object.values(coins),
          }),
        );

        if (response.data.status) {
        } else {
          return;
        }
      })
      .catch(err => {
        dispatch(setLoading({ loading: false }));
      })
      .finally(() => dispatch(setLoading({ loading: false })));
  };
};

export const getExtract = payload => {
  return  dispatch => {
    dispatch(setLoading({ loading: true }));
    api
      .get('api/extract', {
        headers: { 'device-token': payload.device_token },
      })
      .then(response => {
     
        const { results } = response.data;
        if (response.data.status) {
          dispatch(setLoadExtract({ extract: results }));
        }

        dispatch(setLoading({ loading: false }));
      })
      .catch(error => {
        dispatch(setLoading({ loading: false }));
      })
      .finally(() => dispatch(setLoading({ loading: false })));
  };
};
