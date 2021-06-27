import { NavigationContainer } from '@react-navigation/native';
import React, { useRef } from 'react';
import StackNavigator from './StackNavigator';


let devMode = false;
devMode = true;

export default function RootNavigator(props) {
  const navigationRef = useRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          devMode && console.log(`\n\n\n📲 NAV\n  [FROM] ${previousRouteName}\n  [  TO] ${currentRouteName}\n_`);
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      <StackNavigator />
    </NavigationContainer>
  );
}
