import 'dotenv/config';

export default {
  name: 'rn-movie-app',
  slug: 'rn-movie-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  platforms: ['ios', 'android'],
  primaryColor: '#000000',
  backgroundColor: '#000000',

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
    bundleIdentifier: 'com.wooing.rnMovieApp',
    buildNumber: '1.0.0',
  },
  android: {
    package: 'com.wooing.rn_movie_app',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#000000',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  userInterfaceStyle: 'automatic',
  androidStatusBar: {
    barStyle: 'dark-content',
    backgroundColor: '#000000',
  },
  androidNavigationBar: {
    barStyle: 'dark-content',
    backgroundColor: '#000000',
  },
  extra: {
    theMovieDBAPIKey: process.env.THE_MOVIE_DB_API_KEY,
  },
};
