import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from 'src/redux/store';
import LoggedOutNavigator from 'src/navigators/LoggedOutNavigator';

export default function Main() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoggedOutNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
