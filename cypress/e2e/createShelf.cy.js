import LoginPage from '../support/pages/LoginPage'
import HomePage from '../support/pages/HomePage'
import NavigationPage from '../support/pages/NavigationPage'
import CreateShelf from '../support/pages/CreateShelfPage'
import BaseUtils from '../support/utils/BaseUtils'

describe('Create a shelf', () => {
  const loginPage = new LoginPage()
  const homePage = new HomePage()
  const navigationPage = new NavigationPage()
  const createShelf = new CreateShelf()
  const baseUtils = new BaseUtils()
  const validUsername = Cypress.env('username')
  const validPassword = Cypress.env('password')
  const shelfTitle = 'My Test Shelf'

  before(() => {
    loginPage.visit()
    loginPage.login(validUsername, validPassword)
    homePage.userShouldBeOnHomePage()
  })

  after(() => {
    baseUtils.clearSession()
  })

  it('should create a shelf', () => {
    navigationPage.navigateToCreateShelf()
    createShelf.userShouldBeOnCreateShelfPage()
    createShelf.createShelf(shelfTitle)
    createShelf.userShouldSeeSuccessMessage(shelfTitle)
    navigationPage.elementIsVisibleInListOfNavLinks(shelfTitle)
  })
})