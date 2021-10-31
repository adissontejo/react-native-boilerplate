module.exports = {
  preset: 'react-native',
  clearMocks: true,
  verbose: true,
  testRegex: '',
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/config/mock-assets.js',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  setupFiles: ['<rootDir>/tests/config/setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
