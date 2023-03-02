import dotenv from 'dotenv';

dotenv.config();

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  roots: ['src'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.tsx$': 'ts-jest',
  },
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^components(.*)$': '<rootDir>/src/components$1',
  },
};
