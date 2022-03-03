// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {StatusBar, Platform} from 'react-native';
import {ThemeProvider} from 'styled-components';
import Loader from 'react-native-modal-loader';
import KeyboardManager from 'react-native-keyboard-manager';
import SplashScreen from 'react-native-splash-screen';

import messaging from '@react-native-firebase/messaging';
import {setDeviceName, setTokenPush} from './store/actions/user';
// import DeviceInfo from 'react-native-device-info';
import {AppRoutes} from './routes/app.routes';
import theme from './global/styles/theme';
import DeviceInfo from 'react-native-device-info';
import {QueryClientProvider} from 'react-query';

import {Provider, useSelector, useDispatch} from 'react-redux';
import store from './store/storeConfig';
import {queryClient} from './services/queryClient';

const AppWrapper = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.loading);

  async function getFcmToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      DeviceInfo.getDeviceName().then(deviceName => {
        dispatch(setDeviceName({device_name: deviceName}));
        dispatch(setTokenPush({device_token: fcmToken}));
      });
    }
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
    }
  }

  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // useEffect(() => {
  //   if (message.text && message.text.toString().trim()) {
  //     Alert.alert(message.title, message.text);
  //   }
  // }, [message]);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Loader loading={loading} color={theme.colors.primary} />
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const App = () => {
  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setToolbarDoneBarButtonItemText('OK');
    KeyboardManager.setToolbarTintColor('#000000');
    KeyboardManager.setToolbarBarTintColor('#FFFFFF');
    KeyboardManager.isKeyboardShowing();
  }

  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};

export default App;
