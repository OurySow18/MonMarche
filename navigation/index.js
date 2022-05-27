import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/authentification/SignInScreen';
import SignUpScreen from '../screens/authentification/SignUpScreen';
import ConfirmEmailScreen from '../screens/authentification/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/authentification/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/authentification/NewPasswordScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return ( 
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> 

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    
  );
};

export default Navigation;
