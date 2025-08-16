import BaseUtils from '../utils/BaseUtils.js'

class HomePage extends BaseUtils {
  // Page elements
  successMessage = '#flash_success'
  homeHeading = 'h2:contains("Books")'
  logoutButton = '#logout'

  userShouldBeOnHomePage() {
    cy.get(this.homeHeading).should('be.visible')
  }

  userShouldSeeSuccessMessage() {
    cy.get(this.successMessage).should('be.visible')
  }

  logout() {
    cy.get(this.logoutButton).click()
  }
}

export default HomePage