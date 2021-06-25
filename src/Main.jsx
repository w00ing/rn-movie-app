import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider } from 'react-redux';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';

import store from 'src/redux/store';
import RootNavigator from 'src/navigators/RootNavigator';

export default function Main() {
  const subscription = Appearance.addChangeListener(({ colorScheme }) => {
    console.log('Appearance mode:', colorScheme);
  });

  return (
    <Provider store={store}>
      <AppearanceProvider>
        <RootNavigator />
        <StatusBar style="light" />
      </AppearanceProvider>
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
