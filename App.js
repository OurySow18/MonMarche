import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex: 1}}>  
      <Home/>        
    </SafeAreaView>
  );  
}