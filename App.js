import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Busqueda from './screens/Busqueda';
import Content from './screens/Content';

import React from 'react'

const App = () => {
  //la variable de carga siempre comienza siendo verdadera

//return principal
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        
          <>
        <Text>hola</Text>
        </>

  <>
  <Busqueda></Busqueda>
  </>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#09f'

  }
})





