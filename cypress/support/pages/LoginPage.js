import BaseUtils from '../utils/BaseUtils.js'

class LoginPage extends BaseUtils {
  // Page URL
  url = 'https://testapp1.andresfloresv.com/'

  // Page elements - these should be properties, not getters
  usernameInput = '#username'
  passwordInput = '#password'
  loginButton = 'button[name="submit"]'
  rememberMeCheckbox = 'input[type="checkbox"]'
  forgotPasswordButton = 'button[value="forgot"]'
  loginHeading = 'h2:contains("Login")'
  errorMessage = '#flash_danger'
  validationMessage = 'body:contains("required"), body:contains("Required"), body:contains("empty")'

  // Page actions
  visit() {
    cy.visit(this.url)
    cy.get(this.loginHeading).should('be.visible')
  }

  login(username, password) {
    cy.get(this.usernameInput).clear().type(username)
    cy.get(this.passwordInput).clear().type(password)
    cy.get(this.loginButton).click()
  }

  attemptLoginWithEmptyFields() {
    cy.get(this.loginButton).click()
  }

  attemptLoginWithEmptyUsername(password) {
    cy.get(this.passwordInput).clear().type(password)
    cy.get(this.loginButton).click()
  }

  attemptLoginWithEmptyPassword(username) {
    cy.get(this.usernameInput).clear().type(username)
    cy.get(this.loginButton).click()
  }

  shouldShowError() {
    cy.get(this.errorMessage).should('be.visible')
  }
}

export default LoginPage
