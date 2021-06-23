import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from 'src/screens/WelcomeScreen';
import LoginScreen from 'src/screens/LoginScreen';
import CreateAccountScreen from 'src/screens/CreateAccountScreen';

const Stack = createStackNavigator();

export default function LoggedOutNavigator() {
  return (
    <Stack.Navigator headerMode="screen" screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
    </Stack.Navigator>
  );
}
