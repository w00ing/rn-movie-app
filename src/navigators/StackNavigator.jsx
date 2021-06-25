import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import DetailScreen from 'src/screens/DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator(props) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerStyle: { backgroundColor: 'black', borderBottomColor: 'black', shadowColor: 'black' },
        headerBackTitleVisible: false,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
