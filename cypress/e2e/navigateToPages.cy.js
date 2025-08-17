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
    cy.url().should('include', '/hot/stored/')
    
    // Navigate to downloaded books page
    navigationPage.navigateToDownloadedBooks()
    cy.get('h2').should('contain', 'Downloaded')
    cy.url().should('include', '/download/stored/')
    
    // Navigate to top rated books page
    navigationPage.navigateToTopRatedBooks()
    cy.get('h2').should('contain', 'Top Rated')
    cy.url().should('include', '/rated/stored/')

    // Navigate to read books page
    navigationPage.navigateToReadBooks()
    cy.get('h2').should('contain', 'Read')
    cy.url().should('include', '/read/stored/')

    // Navigate to unread books page
    navigationPage.navigateToUnreadBooks()
    cy.get('h2').should('contain', 'Unread')
    cy.url().should('include', '/unread/stored/')
    
    // Navigate to discover page
    navigationPage.navigateToDiscover()
    cy.get('h2').should('contain', 'Discover')
    cy.url().should('include', '/discover/stored/')

    // Navigate to categories page
    navigationPage.navigateToCategories()
    cy.get('h1').should('contain', 'Categories')
    cy.url().should('include', '/category')
    
    // Navigate to series page
    navigationPage.navigateToSeries()
    cy.get('h1').should('contain', 'Series')
    cy.url().should('include', '/series')

    // Navigate to authors page
    navigationPage.navigateToAuthors()
    cy.get('h1').should('contain', 'Authors')
    cy.url().should('include', '/author')

    // Navigate to publishers page
    navigationPage.navigateToPublishers()
    cy.get('h1').should('contain', 'Publishers')
    cy.url().should('include', '/publisher')

    // Navigate to languages page
    navigationPage.navigateToLanguages()
    cy.get('h1').should('contain', 'Languages')
    cy.url().should('include', '/language')

    // Navigate to ratings page
    navigationPage.navigateToRatings()
    cy.get('h1').should('contain', 'Ratings')
    cy.url().should('include', '/rating')
    
    // Navigate to file formats page
    navigationPage.navigateToFileFormats()
    cy.get('h1').should('contain', 'File formats')
    cy.url().should('include', '/formats')

    // Navigate to archived books page
    navigationPage.navigateToArchivedBooks()
    cy.get('h2').should('contain', 'Archived')
    cy.url().should('include', '/archived/stored/')
  })
})