# Powerside Testing Challenge - Cypress Test Suite

This repository contains automated tests for the Powerside web application challenge using the Cypress testing framework. The test suite covers high priority functionality and follows the Page Object Model (POM) design pattern.

## 🚀 Project Overview

- **Application Under Test**: Powerside testing challenge (https://testapp1.andresfloresv.com/)
- **Testing Framework**: Cypress
- **Design Pattern**: Page Object Model (POM)
- **Test Coverage**: Authentication, navigation, and core application features

## 📁 Project Structure

```
Powerside_testing_challenge/
├── cypress/
│   ├── e2e/
│   │   ├── authentication.cy.js     # Authentication test cases
│   │   ├── navigation.cy.js         # Navigation test cases
│   │   ├── feature-a.cy.js          # Feature A test cases
│   │   └── feature-b.cy.js          # Feature B test cases
│   ├── support/
│   │   ├── pages/
│   │   │   ├── LoginPage.js         # Login page object
│   │   │   ├── HomePage.js          # Home page object
│   │   │   ├── NavigationPage.js    # Navigation page object
│   │   │   ├── FeaturePage.js       # Feature page object
│   │   │   └── CommonPage.js        # Common page object
│   │   └── utils/
│   │       └── BaseUtils.js         # Common utility methods
│   ├── fixtures/                     # Test data files
│   ├── videos/                       # Test execution videos
│   └── screenshots/                  # Test failure screenshots
├── .env                              # Environment variables (not committed)
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── cypress.config.js                # Cypress configuration
├── package.json                     # Project dependencies
├── test-cases.md                    # Manual test cases documentation
├── bug-reports.md                   # Bug reports and issues found
├── test-execution-report.md         # Comprehensive test execution report
└── README.md                        # This file
```

## 🛠️ Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Access to the web application

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Powerside_testing_challenge
```

### 2. Install Dependencies
```bash
# First try installing dependencies
npm install

# ONLY IF the previous work, install Cypress explicitly
npm install cypress --save-dev

# Or install globally (optional)
npm install -g cypress
```

## **Best Practice:**

1. **Always run `npm install` first** - This installs everything from package.json
2. **Only install Cypress separately** if there are dependency issues
3. **Use local Cypress** (from node_modules) rather than global

### 3. Environment Configuration
```bash
# Create the .env file
touch .env

# Copy the example environment file contents
cp .env.example .env

# Edit .env file with your actual credentials
nano .env  # or use your preferred editor
```

### 4. Environment Variables
The `.env` file should contain the following variables with your actual values:

```bash
# .env file (never commit this file)
CYPRESS_USERNAME=your_actual_username
CYPRESS_PASSWORD=your_actual_password
```

**Important**: Never commit the `.env` file to version control. It contains sensitive information.

## 🧪 Running Tests

### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```
This opens the Cypress Test Runner where you can:
- Select "E2E Testing"
- Choose your browser
- Run tests interactively

### Run Tests in Headless Mode
```bash
# Run all tests
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/login.cy.js"

# Run with specific browser
npx cypress run --browser chrome

# Run with video recording disabled (faster)
npx cypress run --no-video
```

### Run Tests in CI/CD
```bash
# Set CI environment
CI=true npx cypress run

# Or export CI variable
export CI=true
npx cypress run
```

## 🏗️ Architecture

### Page Object Model (POM)
The project follows the Page Object Model design pattern:

- **`LoginPage.js`**: Encapsulates authentication page elements and actions
- **`HomePage.js`**: Handles main application page interactions
- **`NavigationPage.js`**: Manages navigation between different pages
- **`FeaturePage.js`**: Handles specific feature operations and interactions
- **`CommonPage.js`**: Manages common page elements and actions
- **`BaseUtils.js`**: Provides common utility methods

### Benefits of POM
- **Maintainability**: Selectors are centralized in page objects
- **Reusability**: Page objects can be used across multiple tests
- **Readability**: Tests read like natural language
- **Scalability**: Easy to add new pages and functionality

## 🔧 Configuration

### Cypress Configuration
The main configuration is in `cypress.config.js`:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://testapp1.andresfloresv.com/',
    setupNodeEvents(on, config) {
      // Load environment variables
      require('dotenv').config()
      
      // Set Cypress environment variables
      config.env = {
        ...config.env,
        username: process.env.CYPRESS_USERNAME,
        password: process.env.CYPRESS_PASSWORD
      }
      
      return config
    },
  },
})
```

### Environment Variables
- **`CYPRESS_USERNAME`**: Test user username
- **`CYPRESS_PASSWORD`**: Test user password

## 📊 Test Results

### Viewing Results
- **Interactive Mode**: Results displayed in Cypress Test Runner
- **Headless Mode**: Results displayed in terminal
- **Videos**: Automatically recorded (stored in `cypress/videos/`)
- **Screenshots**: Captured on test failures (stored in `cypress/screenshots/`)

## 🐛 Troubleshooting

### Common Issues

#### 1. Environment Variables Not Loading
```bash
# Ensure .env file exists and has correct format
cat .env

# Check if dotenv is installed
npm list dotenv
```

#### 2. Cypress Not Found
```bash
# Install Cypress locally
npm install cypress --save-dev

# Or install globally
npm install -g cypress
```

#### 3. Test Failures
- Check if the application is accessible
- Verify credentials in `.env` file
- Check network connectivity
- Review test selectors if UI has changed

### Debug Mode
```bash
# Run with debug logging
DEBUG=cypress:* npx cypress run

# Run specific test with debug
npx cypress run --spec "cypress/e2e/login.cy.js" --headed
```

## 📝 Contributing

### Adding New Tests
1. Create new test file in `cypress/e2e/`
2. Follow existing naming conventions
3. Use Page Object Model pattern
4. Add test case to documentation

### Adding New Page Objects
1. Create new page class in `cypress/support/pages/`
2. Extend `BaseUtils` if needed
3. Follow existing structure and naming
4. Update documentation

## 📚 Additional Resources

### Documentation
- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Environment Variables](https://docs.cypress.io/guides/guides/environment-variables)

### Related Files
- **`Powerside_Test_Cases.md`**: Complete manual test cases
- **`Found_issues.md`**: Bug reports and issues found during testing
- **`.env.example`**: Environment variables template

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section above
2. Review Cypress documentation
3. Check existing issues in the repository
4. Create a new issue with detailed information

## 📄 License

This project is part of the Powerside Testing Challenge and is intended for educational and testing purposes.

---

**Happy Testing! 🧪✨**