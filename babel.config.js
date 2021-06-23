module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            src: './src',
            icons: './assets/icons',
            images: './assets/images',
            lotties: './assets/lotties',
          },
        },
      ],
    ],
  };
};
