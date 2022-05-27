import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import Home from './screens/Home';
import Onboarding from './components/onboarding/Onboarding'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewOnboarding, setViewOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');

      if (value !== null){
        setViewOnboarding(true)
      }
    } catch (error) {
      console.log('Error @checkOnbording: ', error)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, [])

  const startSeite = () => {
    return  loading ? <Loading /> : viewedOnboarding ? <HomeScreen /> : <Onboarding />;
  };

  return (
    <>
        <StatusBar style="auto"/>
      <NavigationContainer>
          <SafeAreaView style={{backgroundColor:"#eee", flex: 2}}>
          <Stack.Navigator initialRouteName={startSeite}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen 
                  name="HomeScreen" 
                  component={HomeScreen}  
                  options={{ headerShown: false }}/>            
          </Stack.Navigator>                  
        </SafeAreaView>
      </NavigationContainer>
    </>
  );  
}