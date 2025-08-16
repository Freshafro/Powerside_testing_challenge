import BaseUtils from '../utils/BaseUtils'

class BooksPage extends BaseUtils {
  // Page elements
  booksHeader = 'h2:contains("Books")'
  allBooks = '#books'
  addToShelfButton = '#add-to-shelf'
  shelfList = '#add-to-shelves'
  detailsCloseButton = '#details_close'

  // Page actions
  userShouldBeOnBooksPage() {
    cy.get(this.booksHeader).should('be.visible')
  }

  clickOnBook(bookTitle) {
    cy.get(this.allBooks).contains(bookTitle).click()
  }

  clickOnAddToShelfButton() {
    cy.get(this.addToShelfButton).click()
  }

  clickOnShelf(shelfTitle) {
    cy.get(this.shelfList).contains(shelfTitle).click()
  }

  clickOnDetailsCloseButton() {
    cy.get(this.detailsCloseButton).click()
  }
}

export default BooksPage