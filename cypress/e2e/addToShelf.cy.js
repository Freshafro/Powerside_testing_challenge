import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'
import NavigationPage from '../support/pages/NavigationPage'
import BooksPage from '../support/pages/BooksPage'
import BaseUtils from '../support/utils/BaseUtils'

describe('Add a book to a shelf', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const navigationPage = new NavigationPage()
  const booksPage = new BooksPage()
  const baseUtils = new BaseUtils()
  const validUsername = Cypress.env('username')
  const validPassword = Cypress.env('password')
  const shelfTitle = 'Test shelf Georges'
  const bookTitle = 'Critical Thinking - A Students Introduction'

  before(() => {
    loginPage.visit()
    loginPage.login(validUsername, validPassword)
    homePage.userShouldBeOnHomePage()
  })
  
  after(() => {
    baseUtils.clearSession()
  })

  it('should add a book to the shelf', () => {
    navigationPage.navigateToBooks()
    booksPage.clickOnBook(bookTitle)
    booksPage.clickOnAddToShelfButton()
    booksPage.clickOnShelf(shelfTitle)
    booksPage.clickOnDetailsCloseButton()

    cy.get('a').contains(shelfTitle).click()

    // cy.get('span').contains(bookTitle).should('be.visible')
    cy.get('p').contains(bookTitle).parent('a').should('be.visible')
  })
})