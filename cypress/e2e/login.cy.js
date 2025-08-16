import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'

describe('Powerside Login Tests', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const validUsername = Cypress.env('username')
  const validPassword = Cypress.env('password')
  const invalidUsername = 'InvalidUser'
  const invalidPassword = 'WrongPassword'

  beforeEach(() => {
    // Visit the login page before each test
    loginPage.visit()
  })

  afterEach(() => {
    // Clear any stored data after each test
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('TC-001: should successfully login with valid credentials and redirect to dashboard', () => {
    // Test Steps 1-4 from TC-001
    loginPage.login(validUsername, validPassword)

    // Expected Result: User is successfully logged in and redirected to main dashboard
    homePage.userShouldBeOnHomePage()
  })

  it('TC-002: should display error message for invalid username', () => {
    // Test Steps 1-3 from TC-002
    loginPage.login(invalidUsername, validPassword)

    // Expected Result: Error message displayed, user remains on login page
    loginPage.shouldShowError()
  })

  it('TC-003: should display error message for invalid password', () => {
    // Test Steps 1-3 from TC-003
    loginPage.login(validUsername, invalidPassword)

    // Expected Result: Error message displayed, user remains on login page
    loginPage.shouldShowError()
  })

  it('TC-004: should display validation error for empty username and password', () => {
    // Test Steps 1-3 from TC-004
    loginPage.attemptLoginWithEmptyFields()

    // Expected Result: Validation error message displayed
    loginPage.shouldShowError()
  })

  it('Should display validation error for empty username only', () => {
    loginPage.attemptLoginWithEmptyUsername(validPassword)

    loginPage.shouldShowError()
  })

  it('Should display validation error for empty password only', () => {
    loginPage.attemptLoginWithEmptyPassword(validUsername)

    loginPage.shouldShowError()
  })
})
