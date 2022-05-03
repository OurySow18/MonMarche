import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryBottom from './components/CategoryBottom';

import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
        <StatusBar style="auto"/>
      <NavigationContainer>
          <SafeAreaView style={{backgroundColor:"#eee", flex: 2}}>
          <Stack.Navigator>
            <Stack.Screen name="CategoryBottom" component={CategoryBottom}  options={{ headerShown: false }}/>            
          </Stack.Navigator>                  
        </SafeAreaView>
      </NavigationContainer>
    </>
  );  
}