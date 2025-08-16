import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'

describe('Powerside Logout Tests', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const validUsername = Cypress.env('username')
  const validPassword = Cypress.env('password')

  beforeEach(() => {
    loginPage.visit()
    loginPage.login(validUsername, validPassword)
  })

  afterEach(() => {
    cy.clearLocalStorage()
    cy.clearCookies()
  })

  it('TC-007: should successfully logout and redirect to login page', () => {
    homePage.logout()
    loginPage.shouldShowLoginPage()
  })
})