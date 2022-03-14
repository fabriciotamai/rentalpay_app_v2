module.exports = {
    project: {
      ios: {},
      android: {}, // grouped into "project"
    },
    getTransformModulePath() {
      return require.resolve('react-native-typescript-transformer');
    },
    assets: ['./assets/fonts/'], // stays the same
    getSourceExts() {
      return ['ts', 'tsx'];
    }
  };
  