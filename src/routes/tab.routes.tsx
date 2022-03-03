import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import theme from '../global/styles/theme';

import {Home} from '../screens/Main/Home';
import {Receiver} from '../screens/Main/Receiver';
import {ReceiverConfirm} from '../screens/Main/ReceiverConfirm';
import {Pay} from '../screens/Main/Pay';
import {PayCode} from '../screens/Main/PayCode';
import {PayScanner} from '../screens/Main/PayScanner';
import {SelectPayment} from '../screens/Main/SelectPayment';
import {PayConfirm} from '../screens/Main/PayConfirm';
import {PayConfirmWallet} from '../screens/Main/PayConfirmWallet';
import {PayConfirmRentalCredit} from '../screens/Main/PayConfirmRentalCredit';
import {PayReview} from '../screens/Main/PayReview';
import {PayWalletReview} from '../screens/Main/PayWalletReview';
import {PayRentalCreditReview} from '../screens/Main/PayRentalCreditReview';
import {Pay2FA} from '../screens/Main/Pay2FA';
import {Transactions} from '../screens/Main/Transactions';
import {TransactionExtract} from '../screens/Main/TransactionExtract';
import {Deposit} from '../screens/Main/Deposit';
import {DepositCode} from '../screens/Main/DepositCode';
import {DepositReminder} from '../screens/Main/DepositReminder';
import {Withdraw} from '../screens/Main/Withdraw';
import {WithdrawConfirm} from '../screens/Main/WithdrawConfirm';
import {Withdraw2FA} from '../screens/Main/Withdraw2FA';
import {Transfer} from '../screens/Main/Transfer';
import {TransferAmount} from '../screens/Main/TransferAmount';
import {Transfer2FA} from '../screens/Main/Transfer2FA';
import {TransferEmail} from '../screens/Main/TransferEmail';
import {TransferSelectCoin} from '../screens/Main/TransferSelectCoin';
import {TransactionWallets} from '../screens/Main/TransactionWallets';
import {Credit} from '../screens/Main/Credit';
import {CreditExtract} from '../screens/Main/CreditExtract';
import {CreditRequest} from '../screens/Main/CreditRequest';
import {CreditAmount} from '../screens/Main/CreditAmount';
import {CreditReview} from '../screens/Main/CreditReview';
import {Credit2FA} from '../screens/Main/Credit2FA';
import {Financial} from '../screens/Main/Financial';
import {Setting} from '../screens/Main/Setting';
import {SettingAvatar} from '../screens/Main/SettingAvatar';
import {SettingRegister} from '../screens/Main/SettingRegister';
import {SettingAddress} from '../screens/Main/SettingAddress';
import {Setting2FA} from '../screens/Main/Setting2FA';
import {DepositCrypto} from '../screens/Main/DepositCrypto';
import {DepositCryptoCode} from '../screens/Main/DepositCryptoCode';
import {TransferCrypto} from '../screens/Main/TransferCrypto';

import {TransferCryptoAmount} from '../screens/Main/TransferCryptoAmount';
import {TransferCrypto2FA} from '../screens/Main/TransferCrypto2FA';
import {TransferCryptoSuccess} from '../screens/Main/TransferCryptoSuccess';
import {TransactionCryptoExtract} from '../screens/Main/TransactionCryptoExtract';

import HomeActiveIcon from '../assets/icons/home_active_icon.svg';
import HomeIcon from '../assets/icons/home_icon.svg';
import TransactionsIcon from '../assets/icons/transactions_icon.svg';
import TransactionsActiveIcon from '../assets/icons/transactions_active_icon.svg';
import CreditIcon from '../assets/icons/credit_icon.svg';
import CreditActiveIcon from '../assets/icons/credit_active_icon.svg';
import FinanceIcon from '../assets/icons/finance_icon.svg';
import FinanceActiveIcon from '../assets/icons/finance_active_icon.svg';
import ConfigIcon from '../assets/icons/config_icon.svg';
import ConfigActiveIcon from '../assets/icons/config_active_icon.svg';

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Receiver" component={Receiver} />
      <Stack.Screen name="ReceiverConfirm" component={ReceiverConfirm} />
      <Stack.Screen name="Pay" component={Pay} />
      <Stack.Screen name="PayCode" component={PayCode} />
      <Stack.Screen name="PayScanner" component={PayScanner} />
      <Stack.Screen name="SelectPayment" component={SelectPayment} />
      <Stack.Screen name="PayConfirm" component={PayConfirm} />
      <Stack.Screen name="PayConfirmWallet" component={PayConfirmWallet} />
      <Stack.Screen
        name="PayConfirmRentalCredit"
        component={PayConfirmRentalCredit}
      />
      <Stack.Screen name="PayReview" component={PayReview} />
      <Stack.Screen name="PayWalletReview" component={PayWalletReview} />
      <Stack.Screen
        name="PayRentalCreditReview"
        component={PayRentalCreditReview}
      />
      <Stack.Screen name="Pay2FA" component={Pay2FA} />
      <Stack.Screen name="TransactionWallets" component={TransactionWallets} />
    </Stack.Navigator>
  );
}

function TransactionStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Transactions" component={Transactions} />
      <Stack.Screen name="TransactionExtract" component={TransactionExtract} />
      <Stack.Screen name="Deposit" component={Deposit} />
      <Stack.Screen name="DepositCode" component={DepositCode} />
      <Stack.Screen name="DepositReminder" component={DepositReminder} />
      <Stack.Screen name="Withdraw" component={Withdraw} />
      <Stack.Screen name="WithdrawConfirm" component={WithdrawConfirm} />
      <Stack.Screen name="Withdraw2FA" component={Withdraw2FA} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="TransferAmount" component={TransferAmount} />
      <Stack.Screen name="Transfer2FA" component={Transfer2FA} />
      <Stack.Screen name="TransferEmail" component={TransferEmail} />
     
      <Stack.Screen name="TransferSelectCoin" component={TransferSelectCoin} />
      <Stack.Screen name="TransactionWallets" component={TransactionWallets} />
      <Stack.Screen name="DepositCrypto" component={DepositCrypto} />
      <Stack.Screen name="DepositCryptoCode" component={DepositCryptoCode} />
      <Stack.Screen name="TransferCrypto" component={TransferCrypto} />
      <Stack.Screen name="TransferCrypto2FA" component={TransferCrypto2FA} />
      <Stack.Screen
        name="TransactionCryptoExtract"
        component={TransactionCryptoExtract}
      />
      <Stack.Screen
        name="TransferCryptoAmount"
        component={TransferCryptoAmount}
      />
      <Stack.Screen
        name="TransferCryptoSuccess"
        component={TransferCryptoSuccess}
      />
    </Stack.Navigator>
  );
}

function CreditStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Credit" component={Credit} />
      <Stack.Screen name="CreditExtract" component={CreditExtract} />
      <Stack.Screen name="CreditRequest" component={CreditRequest} />
      <Stack.Screen name="CreditAmount" component={CreditAmount} />
      <Stack.Screen name="CreditReview" component={CreditReview} />
      <Stack.Screen name="Credit2FA" component={Credit2FA} />
    </Stack.Navigator>
  );
}

function FinancialStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Financial" component={Financial} />
    </Stack.Navigator>
  );
}

function SettingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="SettingAvatar" component={SettingAvatar} />
      <Stack.Screen name="SettingRegister" component={SettingRegister} />
      <Stack.Screen name="SettingAddress" component={SettingAddress} />
      <Stack.Screen name="Setting2FA" component={Setting2FA} />
    </Stack.Navigator>
  );
}

export function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.text_grey_light,
        tabBarActiveTintColor: theme.colors.primary,
        unmountOnBlur: true,
        tabBarStyle: {
          borderTopColor: 'transparent',
          borderTopWidth: 0,
          backgroundColor: theme.colors.shape,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.textActive : styles.textInactive}>
              Início
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeActiveIcon width={RFValue(19)} height={RFValue(19)} />
            ) : (
              <HomeIcon width={RFValue(19)} height={RFValue(19)} />
            ),
        }}
      />
      <Tab.Screen
        name="TransactiontTab"
        component={TransactionStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('TransactiontTab');
          },
        })}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.textActive : styles.textInactive}>
              Transações
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <TransactionsActiveIcon
                width={RFValue(19)}
                height={RFValue(19)}
              />
            ) : (
              <TransactionsIcon width={RFValue(19)} height={RFValue(19)} />
            ),
        }}
      />
      <Tab.Screen
        name="CreditTab"
        component={CreditStack}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('CreditTab');
          },
        })}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.textActive : styles.textInactive}>
              Crédito
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <CreditActiveIcon width={RFValue(19)} height={RFValue(19)} />
            ) : (
              <CreditIcon width={RFValue(19)} height={RFValue(19)} />
            ),
        }}
      />
      <Tab.Screen
        name="FinanceTab"
        component={FinancialStack}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.textActive : styles.textInactive}>
              Financeiro
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <FinanceActiveIcon width={RFValue(19)} height={RFValue(19)} />
            ) : (
              <FinanceIcon width={RFValue(19)} height={RFValue(19)} />
            ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={SettingStack}
        options={{
          tabBarLabelPosition: 'below-icon',
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.textActive : styles.textInactive}>
              Ajustes
            </Text>
          ),
          tabBarIcon: ({focused}) =>
            focused ? (
              <ConfigActiveIcon width={RFValue(19)} height={RFValue(19)} />
            ) : (
              <ConfigIcon width={RFValue(19)} height={RFValue(19)} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  textActive: {
    fontSize: RFValue(10),
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
  },

  textInactive: {
    fontSize: RFValue(10),
    color: theme.colors.text_grey_light,
    fontFamily: theme.fonts.bold,
  },
});
