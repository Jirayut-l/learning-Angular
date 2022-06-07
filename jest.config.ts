module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  "moduleNameMapper": {
    '^@shared/(.*)$':['<rootDir>/src/app/shared/$1'],
    '^@core/(.*)$':['<rootDir>/src/app/modules/core/$1'],
    '^@home/(.*)$':['<rootDir>/src/app/modules/home/$1'],
  }
};
