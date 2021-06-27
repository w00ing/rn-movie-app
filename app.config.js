import 'dotenv/config';

export default {
  name: 'rn-movie-app',
  slug: 'rn-movie-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  platforms: ['ios', 'android'],
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  packagerOpts: {
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#000000',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  userInterfaceStyle: 'automatic',

  extra: {
    theMovieDBAPIKey: process.env.THE_MOVIE_DB_API_KEY,
  },
};
