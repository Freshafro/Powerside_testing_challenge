import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'
import BaseUtils from '../support/utils/BaseUtils'

describe('Powerside Logout Tests', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
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
    homePage.logout()
    loginPage.shouldShowLoginPage()
  })
})