// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, Platform, Alert} from 'react-native';

import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './services/queryClient';
import Loader from 'react-native-modal-loader';
import KeyboardManager from 'react-native-keyboard-manager';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';
import {setDeviceName, setTokenPush} from './store/actions/user';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {RootState} from './store/storeConfig';



import {AppRoutes} from './routes/app.routes';
import theme from './global/styles/theme';
import store from './store/storeConfig';





const AppWrapper = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.loading);
  const message = useSelector((state: RootState) => state.message);
  // const  {message} = useSelector((state:RootState) => state.message);

  async function getFcmToken() {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
    
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

  useEffect(() => {
    if (message.text && message.text.toString().trim()) {
      Alert.alert(message.title, message.text);
    }
  }, [message]);

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
