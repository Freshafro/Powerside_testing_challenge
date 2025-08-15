import BaseUtils from '../utils/BaseUtils.js'

class HomePage extends BaseUtils {
  // Page elements
  successMessage = '#flash_success'
  homeHeading = 'h2:contains("Books")'

  userShouldBeOnHomePage() {
    cy.get(this.homeHeading).should('be.visible')
  }

  userShouldSeeSuccessMessage() {
    cy.get(this.successMessage).should('be.visible')
  }
}

export default HomePage