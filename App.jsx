import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import Main from './src/Main';

const App = () => {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font];
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [
      require('./assets/logo_purple_row.png'),
      require('./assets/logo_white_row.png'),
      require('./assets/logo_purple_column.png'),
    ];
    const imagePromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };

  if (loading) return <AppLoading startAsync={preload} onFinish={onFinish} onError={console.warn} />;

  return <Main />;
};

export default App;
