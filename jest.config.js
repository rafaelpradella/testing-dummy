module.exports = {
    preset: 'react-native',
    setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
    setupFilesAfterEnv: ['./node_modules/@testing-library/jest-native/dist/extend-expect.js'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    ],
  };