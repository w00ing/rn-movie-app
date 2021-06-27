import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Platform } from 'react-native';
import DiscoveryScreen from 'src/screens/DiscoveryScreen';
import MovieScreen from 'src/screens/MovieScreen';
import SearchScreen from 'src/screens/SearchScreen';
import TvScreen from 'src/screens/TvScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(props.route);
    switch (routeName) {
      case 'MovieScreen':
        return 'Movies';
      case 'TvScreen':
        return 'Shows';
      case 'SearchScreen':
        return 'Search';
      case 'DiscoveryScreen':
        return 'Discovery';
    }
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({ title: getHeaderTitle(props.route) || 'Movies' });
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
            case 'DiscoveryScreen':
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
      <Tab.Screen name="MovieScreen" component={MovieScreen} options={{ title: 'Movies' }} />
      <Tab.Screen name="TvScreen" component={TvScreen} options={{ title: 'Shows' }} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Search' }} />
      <Tab.Screen name="DiscoveryScreen" component={DiscoveryScreen} options={{ title: 'Discovery' }} />
    </Tab.Navigator>
  );
}
