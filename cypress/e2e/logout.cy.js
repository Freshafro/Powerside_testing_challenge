import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'
import BaseUtils from '../support/utils/BaseUtils'
import NavigationPage from '../support/pages/NavigationPage'

describe('Powerside Logout Tests', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const navigationPage = new NavigationPage()
  const baseUtils = new BaseUtils()
  const validUsername = Cypress.env('username')
  const validPassword = Cypress.env('password')

  beforeEach(() => {
    loginPage.visit()
    loginPage.login(validUsername, validPassword)
  })

  afterEach(() => {
    baseUtils.clearSession()
  })

  it('TC-007: should successfully logout and redirect to login page', () => {
    // Verify user can access protected page while logged in
    navigationPage.navigateToHotBooks()
    cy.get('h2').should('contain', 'Hot Books')

    // Perform logout
    homePage.logout()

    // Navigate to protected page
    cy.visit('/hot/stored/')
    cy.url().should('include', '/login')

    // Verify user is redirected to login page
    loginPage.shouldShowLoginPage()
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
  })
})