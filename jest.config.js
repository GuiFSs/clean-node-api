module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!**/test/**',
    '!<rootDir>/src/presentation/**/index.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
  ],
  preset: '@shelf/jest-mongodb',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
