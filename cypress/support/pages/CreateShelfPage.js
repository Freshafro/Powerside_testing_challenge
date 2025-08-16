import BaseUtils from '../utils/BaseUtils'

class CreateShelfPage extends BaseUtils {
  // Page elements
  titleInput = '#title'
  saveButton = '#submit'
  successMessage = '#flash_success'
  deleteShelfButton = '#delete_shelf'
  editShelfButton = '#edit_shelf'

  // Page actions
  createShelf(title) {
    cy.get(this.titleInput).type(title)
    cy.get(this.saveButton).click()
  }

  userShouldBeOnCreateShelfPage() {
    cy.get('h1').should('contain', 'Create a Shelf')
  }

  userShouldSeeSuccessMessage(shelfTitle) {
    cy.get(this.successMessage).should('contain', shelfTitle + ' created')
  }
}

export default CreateShelfPage