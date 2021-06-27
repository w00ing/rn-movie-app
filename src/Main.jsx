import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import { Provider } from 'react-redux';
import RootNavigator from 'src/navigators/RootNavigator';
import store from 'src/redux/store';

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
