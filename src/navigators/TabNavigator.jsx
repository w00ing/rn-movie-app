import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieScreen from 'src/screens/MovieScreen';
import FavoritesScreen from 'src/screens/FavoritesScreen';
import SearchScreen from 'src/screens/SearchScreen';
import TvScreen from 'src/screens/TvScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MovieScreen" component={MovieScreen} />
      <Tab.Screen name="TvScreen" component={TvScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
