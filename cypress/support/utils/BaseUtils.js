class BaseUtils {
  // Session management
  clearSession() {
    cy.clearLocalStorage()
    cy.clearCookies()
  }
}

export default BaseUtils
