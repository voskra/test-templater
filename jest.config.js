module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(tsx?|m?js)$': 'babel-jest'
  },
  setupFiles: [],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transformIgnorePatterns: ['node_modules/(?!(@babel/runtime)/)'],
  moduleFileExtensions: ['js', 'tsx'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'html', 'text-summary'],
  collectCoverageFrom: [
    './src/**/*.tsx',
    '!./src/**/*.view.ts',
    '!./src/**/*.view.tsx'
  ],
  moduleNameMapper: {
    '.+\\.(svg|png|jpg)$': 'identity-obj-proxy',
    '.+\\.module\\.css$': 'identity-obj-proxy'
  },
  testResultsProcessor: 'jest-sonar-reporter'
};
