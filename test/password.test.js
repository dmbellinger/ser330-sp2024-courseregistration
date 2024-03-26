// const PasswordManager = require('..src/examples/password-verification2.js')
// Import
const PasswordManager = require('../src/examples/password-verification.js')

describe('PasswordVerificationTests', () => {
  test('VerifyPassword_WhenCredentialsAreValid_ReturnsTrue', () => {
    // Arrange
    const passwordManager = new PasswordManager()
    const userName = 'TestUser'
    const password = 'Password'
    // Act
    const result = passwordManager.verifyPassword(userName, password)
    // Assert
    expect(result).toBe(true)
  })
})
