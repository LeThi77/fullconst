import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { SplashScreen } from './src/screens/home';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    },1500);
    return () => clearTimeout(timeout);
  })


  return(
    isShowSplash ? (
    <SplashScreen/>) : (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>)
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
