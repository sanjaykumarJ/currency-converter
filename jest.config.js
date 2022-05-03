module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/dist'],
  collectCoverage: true,
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/test/styleMock.js',
  },
};