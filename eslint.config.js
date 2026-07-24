const expoConfig = require('eslint-config-expo/flat');

module.exports = [
  ...expoConfig,
  {
    rules: {
      // Not meaningful for React Native Text (no HTML entities).
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    ignores: [
      'node_modules',
      'site',
      'android',
      'ios',
      '.expo',
      'public',
      'registry/items',
      'scripts',
    ],
  },
];
