import BaseUtils from '../utils/BaseUtils'

class NavigationPage extends BaseUtils {
  // Page elements
  booksLink = '#nav_new'
  hotBooksLink = '#nav_hot'
  downloadedBooksLink = '#nav_download'
  topRatedBooksLink = '#nav_rated'
  readBooksLink = '#nav_read'
  unreadBooksLink = '#nav_unread'
  discoverLink = '#nav_rand'
  categoriesLink = '#nav_cat'
  seriesLink = '#nav_serie'
  authorsLink = '#nav_author'
  publishersLink = '#nav_publisher'
  languagesLink = '#nav_lang'
  ratingsLink = '#nav_rate'
  fileFormatsLink = '#nav_format'
  archivedBooksLink = '#nav_archived'
  booksListLink = '#nav_list'
  createShelfLink = '#nav_createshelf'

  // Page actions
  navigateToBooks() {
    cy.get(this.booksLink).click()
  }

  navigateToHotBooks() {
    cy.get(this.hotBooksLink).click()
  }
  
  navigateToDownloadedBooks() {
    cy.get(this.downloadedBooksLink).click()
  }

  navigateToTopRatedBooks() {
    cy.get(this.topRatedBooksLink).click()
  }
  
  navigateToReadBooks() {
    cy.get(this.readBooksLink).click()
  }

  navigateToUnreadBooks() {
    cy.get(this.unreadBooksLink).click()
  }
  
  
  navigateToDiscover() {
    cy.get(this.discoverLink).click()
  }

  navigateToCategories() {
    cy.get(this.categoriesLink).click()
  }
  
  
  navigateToSeries() {
    cy.get(this.seriesLink).click()
  }

  navigateToAuthors() {
    cy.get(this.authorsLink).click()
  }

  navigateToPublishers() {
    cy.get(this.publishersLink).click()
  }

  navigateToLanguages() {
    cy.get(this.languagesLink).click()
  }
  
  navigateToRatings() {
    cy.get(this.ratingsLink).click()
  }

  navigateToFileFormats() {
    cy.get(this.fileFormatsLink).click()
  }
  
  navigateToArchivedBooks() {
    cy.get(this.archivedBooksLink).click()
  }

  navigateToBooksList() {
    cy.get(this.booksListLink).click()
  }
  
  navigateToCreateShelf() {
    cy.get(this.createShelfLink).click()
  }
}

export default NavigationPage