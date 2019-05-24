module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.js'],
  collectCoverageFrom: ['<rootDir>/tests/*.test.{js,jsx}'],
  moduleNameMapper: {
    '.scss$': 'scss-stub.js',
  },
};
