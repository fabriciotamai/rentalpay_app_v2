import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';


import { Splash} from '../screens/Start/Splash';
import {StartPage} from '../screens/Start/StartPage';
import {Login} from '../screens/Start/Login';
import {Forgot} from '../screens/Start/Forgot';
import {ForgotSended} from '../screens/Start/ForgotSended';

import {TabRoutes} from './tab.routes';
import {Received} from '../screens/Main/Received';
import {PaySuccess} from '../screens/Main/PaySuccess';
import {PayError} from '../screens/Main/PayError';
import {DepositSuccess} from '../screens/Main/DepositSuccess';
import {TransferSuccess} from '../screens/Main/TransferSuccess';
import {WithdrawSuccess} from '../screens/Main/WithdrawSuccess';
import {CreditSuccess} from '../screens/Main/CreditSuccess';
import {CreditError} from '../screens/Main/CreditError';
import {Setting2FASuccess} from '../screens/Main/Setting2FASuccess';
import {AuthorizationDevice} from '../screens/Main/AuthorizationDevice';

// ---------PIN-----------
import {Pin} from '../screens/Main/Pin';
import {CreatePin} from '../screens/Main/CreatePin';

import {RootStackParamList} from '../utils/RootStackParams';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Splash">
      <Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Screen
          name="StartPage"
          component={StartPage}
          options={{headerShown: false}}
        />
        <Screen name="Login" component={Login} options={{headerShown: false}} />
        {/* <Screen name="Home" component={Home} options={{headerShown: false}} /> */}

        <Screen
          name="Forgot"
          component={Forgot}
          options={{headerShown: false}}
        />

        <Screen
          name="ForgotSended"
          component={ForgotSended}
          options={{headerShown: false}}
        />

        <Screen
          name="Received"
          component={Received}
          options={{headerShown: false}}
        />

        <Screen
          name="PaySuccess"
          component={PaySuccess}
          options={{headerShown: false}}
        />

        <Screen
          name="PayError"
          component={PayError}
          options={{headerShown: false}}
        />

        <Screen
          name="DepositSuccess"
          component={DepositSuccess}
          options={{headerShown: false}}
        />

        <Screen
          name="WithdrawSuccess"
          component={WithdrawSuccess}
          options={{headerShown: false}}
        />

        <Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{headerShown: false}}
        />

        <Screen
          name="CreditSuccess"
          component={CreditSuccess}
          options={{headerShown: false}}
        />
        <Screen
          name="CreditError"
          component={CreditError}
          options={{headerShown: false}}
        />
        <Screen
          name="Setting2FASuccess"
          component={Setting2FASuccess}
          options={{headerShown: false}}
        />
        <Screen name="Pin" component={Pin} options={{headerShown: false}} />

        <Screen
          name="CreatePin"
          component={CreatePin}
          options={{headerShown: false}}
        />
         <Screen
          name="AuthorizationDevice"
          component={AuthorizationDevice}
          options={{headerShown: false}}
        />

        <Screen
          name="TabRoutes"
          component={TabRoutes}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
}
