import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'
import NavigationPage from '../support/pages/NavigationPage'
import BooksPage from '../support/pages/BooksPage'
import BaseUtils from '../support/utils/BaseUtils'

describe('Navigate to Pages', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const navigationPage = new NavigationPage()
  const booksPage = new BooksPage()
  const baseUtils = new BaseUtils()
  const validUsername = Cypress.env('username')
  const validPassword = Cypress.env('password')

  before(() => {
    loginPage.visit()
    loginPage.login(validUsername, validPassword)
    homePage.userShouldBeOnHomePage()
  })

  after(() => {
    baseUtils.clearSession()
  })

  it('should navigate to all pages successfully', () => {
    // Navigate to books page
    navigationPage.navigateToBooks()
    booksPage.userShouldBeOnBooksPage()
    
    // Navigate to hot books page
    navigationPage.navigateToHotBooks()
    cy.get('h2').should('contain', 'Hot')
    
    // Navigate to downloaded books page
    navigationPage.navigateToDownloadedBooks()
    cy.get('h2').should('contain', 'Downloaded')
    
    // Navigate to top rated books page
    navigationPage.navigateToTopRatedBooks()
    cy.get('h2').should('contain', 'Top Rated')
    
    // Navigate to read books page
    navigationPage.navigateToReadBooks()
    cy.get('h2').should('contain', 'Read')
    
    // Navigate to unread books page
    navigationPage.navigateToUnreadBooks()
    cy.get('h2').should('contain', 'Unread')
    
    // Navigate to discover page
    navigationPage.navigateToDiscover()
    cy.get('h2').should('contain', 'Discover')
    
    // Navigate to categories page
    navigationPage.navigateToCategories()
    cy.get('h1').should('contain', 'Categories')
    
    // Navigate to series page
    navigationPage.navigateToSeries()
    cy.get('h1').should('contain', 'Series')
    
    // Navigate to authors page
    navigationPage.navigateToAuthors()
    cy.get('h1').should('contain', 'Authors')
    
    // Navigate to publishers page
    navigationPage.navigateToPublishers()
    cy.get('h1').should('contain', 'Publishers')
    
    // Navigate to languages page
    navigationPage.navigateToLanguages()
    cy.get('h1').should('contain', 'Languages')
    
    // Navigate to ratings page
    navigationPage.navigateToRatings()
    cy.get('h1').should('contain', 'Ratings')
    
    // Navigate to file formats page
    navigationPage.navigateToFileFormats()
    cy.get('h1').should('contain', 'File formats')
    
    // Navigate to archived books page
    navigationPage.navigateToArchivedBooks()
    cy.get('h2').should('contain', 'Archived')
  })
})