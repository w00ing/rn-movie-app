import React, { useEffect, useLayoutEffect } from 'react';
import { Platform } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MovieScreen from 'src/screens/MovieScreen';
import FavoritesScreen from 'src/screens/FavoritesScreen';
import SearchScreen from 'src/screens/SearchScreen';
import TvScreen from 'src/screens/TvScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  const routeName = getFocusedRouteNameFromRoute(props.route);

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: routeName || 'MovieScreen' });
  }, [props.route]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          switch (route.name) {
            case 'MovieScreen':
              iconName += 'film';
              break;
            case 'TvScreen':
              iconName += 'tv';
              break;
            case 'SearchScreen':
              iconName += 'search';
              break;
            case 'FavoritesScreen':
              iconName += 'heart';
              break;
          }
          return <Ionicons name={iconName} color={focused ? 'white' : 'grey'} size={26} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          borderTopColor: 'black',
        },
      }}
    >
      <Tab.Screen name="MovieScreen" component={MovieScreen} />
      <Tab.Screen name="TvScreen" component={TvScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
