# Calibre-Web Test Cases

## Application Information
- **Application**: Calibre-Web
- **URL**: https://testapp1.andresfloresv.com/
- **Test Credentials**: 
  - Username: Test_user1
  - Password: 8ebAS@Ui

## Test Environment
- **Browser**: Chrome, Firefox, Safari, Edge
- **Device Types**: Desktop
- **Test Data**: Various book formats, metadata, cover images

---

## 1. Authentication & Login Tests

### TC-001: Valid Login
**Objective**: Verify successful login with valid credentials
**Precondition**: User is on login page
**Test Steps**:
1. Navigate to https://testapp1.andresfloresv.com/
2. Enter username: "Test_user1"
3. Enter password: "8ebAS@Ui"
4. Click "Login" button
**Expected Result**: User is successfully logged in and redirected to main dashboard
**Priority**: High

### TC-002: Invalid Username
**Objective**: Verify error handling for invalid username
**Test Steps**:
1. Enter invalid username: "InvalidUser"
2. Enter valid password: "8ebAS@Ui"
3. Click "Login" button
**Expected Result**: Error message displayed, user remains on login page
**Priority**: High

### TC-003: Invalid Password
**Objective**: Verify error handling for invalid password
**Test Steps**:
1. Enter valid username: "Test_user1"
2. Enter invalid password: "WrongPassword"
3. Click "Login" button
**Expected Result**: Error message displayed, user remains on login page
**Priority**: High

### TC-004: Empty Fields
**Objective**: Verify validation for empty username/password
**Test Steps**:
1. Leave username field empty
2. Leave password field empty
3. Click "Login" button
**Expected Result**: Validation error message displayed
**Priority**: Medium

### TC-005: Remember Me Functionality
**Objective**: Verify "Remember Me" checkbox works
**Test Steps**:
1. Check "Remember Me" checkbox
2. Login successfully
3. Close browser and then reopen
4. Navigate to application URL
**Expected Result**: User remains logged in
**Priority**: Medium

### TC-006: Forgot Password Link
**Objective**: Verify forgot password functionality
**Test Steps**:
1. Click "Forgot Password" link
**Expected Result**: Password reset link is send to the email
**Priority**: Medium

---

## 2. Navigation & UI Tests

### TC-007: Logout functionality
**Objective**: Verify logout from application
**Test Steps**:
1. Login to application
2. Locate the logout button
2. Click the logout button
**Expected Result**: User should be successfully logged out of the application
**Priority**: High

### TC-008: Responsive Design
**Objective**: Verify application works on different screen sizes
**Test Steps**:
1. Test on desktop (1920x1080)
2. Test on tablet (768x1024)
3. Test on mobile (375x667)
**Expected Result**: UI adapts appropriately to screen size
**Priority**: Medium

### TC-009: Browser Compatibility
**Objective**: Verify application works across different browsers
**Test Steps**:
1. Test in Chrome
2. Test in Firefox
3. Test in Safari
4. Test in Edge
**Expected Result**: Consistent functionality across all browsers
**Priority**: High

---

## 3. Book Management Tests

### TC-010: Book List Display
**Objective**: Verify books are displayed in main view
**Test Steps**:
1. Login to application
2. Navigate to main dashboard (Books page)
**Expected Result**: List of books is displayed with covers and metadata
**Priority**: High

### TC-011: Book Search
**Objective**: Verify search functionality works
**Test Steps**:
1. Login to the application
2. Locate search bar
3. Enter book title/author
4. Submit search
**Expected Result**: Relevant books are displayed in search results
**Priority**: High

### TC-012: Book Details Modal
**Objective**: Verify book details are displayed correctly
**Test Steps**:
1. Login to the application
2. Make sure to be on the "Books" page
2. Click on a book cover/title
2. Verify book details modal opens
**Expected Result**: Modal displays book information, metadata, and options
**Priority**: Medium

### TC-013: Book Download
**Objective**: Verify book download functionality
**Test Steps**:
1. Login to the application
2. Make sure to be on the "Books" page
3. Click on a book to open book details
2. Click download button
3. Select format if multiple available
**Expected Result**: Book downloads successfully
**Priority**: High

### TC-014: Book Metadata Display
**Objective**: Verify book metadata is accurate
**Test Steps**:
1. Login to the application
2. Open book details
3. Click on "Edit Metadata"
3. Review displayed metadata
**Expected Result**: Title, author, series, rating, tags, etc. are correct
**Priority**: Medium

---

## 4. Library Management Tests

### TC-015: Sort Options
**Objective**: Verify sorting functionality
**Pre-requisite**:
- Logged in to the application
- On the Books view
**Test Steps**:
1. Test sort by book date
2. Test sort title by alphabetical order
3. Test sort authors by alphabetical order
4. Test sort by publishing date
**Expected Result**: Books are sorted according to selected criteria
**Priority**: Medium

### TC-016: Hot book View
**Objective**: Verify hot books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the hot books view
3. Browse books by popularity
**Expected Result**: Books are properly displayed by most downloaded
**Priority**: Medium

### TC-017: Downloaded books View
**Objective**: Verify downloaded books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to downloaded books view
3. Browse books by the ones that have been downloaded
**Expected Result**: Books having been downloaded are displayed
**Priority**: Medium

### TC-018: Top rated books view
**Objective**: Verify top rated books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to top rated books view
3. Browse books by the top rated
**Expected Result**: Books are properly displayed by their rating
**Priority**: Medium

### TC-019: Read books view
**Objective**: Verify read books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the read books view
3. Browse books by the ones that have been read
**Expected Result**: Books having the mark of "read" are displayed
**Priority**: Medium

### TC-020: Unread books view
**Objective**: Verify unread books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the unread books view
3. Browse books by the ones that have not been read
**Expected Result**: Books that don't have the mark of "read" are displayed
**Priority**: Medium

### TC-021: Discover view
**Objective**: Verify random books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to discover books view
3. Browse books by random assembly
**Expected Result**: Books that have been randomly selected are displayed
**Priority**: Medium

### TC-022: Categories view
**Objective**: Verify categories grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the categories view
3. Browse books by the categories listed
**Expected Result**: Books belonging to the chosen category are displayed
**Priority**: Medium

### TC-023: Series view
**Objective**: Verify series grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the series view
3. Browse books by the series listed
**Expected Result**: Books belonging to a chosen series are displayed
**Priority**: Medium

### TC-024: Authors View
**Objective**: Verify author grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to authors view
3. Browse books by author
**Expected Result**: Books are properly grouped by author
**Priority**: Medium

### TC-025: Publishers view
**Objective**: Verify publisher grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the publishers view
3. Browse books by the publishers listed
**Expected Result**: Books are properly grouped by their publishers
**Priority**: Medium

### TC-026: Languages view
**Objective**: Verify languages grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the languages view
3. Browse books by the languages listed
**Expected Result**: Books are properly grouped by their languages
**Priority**: Medium

### TC-027: Ratings view
**Objective**: Verify ratings grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the ratings view
3. Browse books by the ones that have received a rating
**Expected Result**: Books that have a rating should be displayed
**Priority**: Medium

### TC-028: File formats view
**Objective**: Verify file formats grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the file formats view
3. Browse books by their different formats
**Expected Result**: Books with the chosen format are being displayed
**Priority**: Medium

### TC-029: Archived books view
**Objective**: Verify archived books grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the archived books view
3. Browse books by the ones that have been archived
**Expected Result**: Books that have been archived should be displayed
**Priority**: Medium

### TC-030: Books list view
**Objective**: Verify books list grouping functionality
**Test Steps**:
1. Login to the application
2. Navigate to the books list view
3. Select/Unselect books
**Expected Result**: Books should be able to be selected or unselected
**Priority**: Medium

---

## 5. User Interface Tests

### TC-031: Book Cover Display
**Objective**: Verify book covers are displayed correctly
**Test Steps**:
1. Login to the application
2. Navigate to the books page
3. Click on a book
4. Check cover images
**Expected Result**: All book covers are visible and properly sized
**Priority**: Low

---

## 6. Error Handling Tests

### TC-032: Network Error Handling
**Objective**: Verify application handles network issues gracefully
**Test Steps**:
1. Simulate network disconnection
2. Attempt to perform actions
**Expected Result**: Appropriate error messages are displayed
**Priority**: Medium

### TC-033: Invalid Book Data
**Objective**: Verify handling of corrupted book data
**Test Steps**:
1. Attempt to open books with missing metadata
2. Attempt to download corrupted files
**Expected Result**: Error messages are displayed, application doesn't crash
**Priority**: Medium

---

## 7. Performance Tests

### TC-034: Page Load Time
**Objective**: Verify acceptable page load performance
**Test Steps**:
1. Measure time to load main dashboard
2. Measure time to load book details
**Expected Result**: Pages load within acceptable time limits (<3 seconds)
**Priority**: Medium

### TC-035: Search Performance
**Objective**: Verify search response time
**Test Steps**:
1. Perform searches with various terms
2. Measure response time
**Expected Result**: Search results appear within acceptable time limits
**Priority**: Medium

---

## 8. Security Tests

### TC-036: Session Timeout
**Objective**: Verify session security
**Test Steps**:
1. Login to application
2. Leave application idle for extended period
3. Attempt to perform actions
**Expected Result**: User is logged out and redirected to login
**Priority**: High

### TC-037: URL Manipulation
**Objective**: Verify direct URL access is restricted
**Test Steps**:
1. Logout from application
2. Attempt to access protected URLs directly
**Expected Result**: User is redirected to login page
**Priority**: High

---

## Test Execution Checklist

### Pre-Test Setup
- [ ] Test environment configured
- [ ] Test data prepared
- [ ] Browser profiles set up
- [ ] Network conditions documented

### Test Execution
- [ ] Authentication tests completed
- [ ] Navigation tests completed
- [ ] Book management tests completed
- [ ] UI tests completed
- [ ] Error handling tests completed
- [ ] Performance tests completed
- [ ] Security tests completed

### Post-Test Activities
- [ ] Bug reports created
- [ ] Test results documented
- [ ] Performance metrics recorded
- [ ] Recommendations provided

---

## Bug Report Template

**Bug ID**: [Auto-generated]
**Title**: [Brief description]
**Severity**: [Critical/High/Medium/Low]
**Priority**: [Critical/High/Medium/Low]
**Environment**: [Browser, OS, Device]
**Description**:
**Steps to Reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]
**Expected Result**: [What should happen]
**Actual Result**: [What actually happened]
**Screenshots**: [If applicable]
**Additional Notes**: [Any other relevant information]

---

## Test Results Summary

| Test Category | Total Tests | Passed | Failed | Blocked |
|---------------|-------------|---------|---------|---------|
| Authentication | 6 | - | - | - |
| Navigation & UI | 3 | - | - | - |
| Book Management | 5 | - | - | - |
| Library Management | 16 | - | - | - |
| User Interface | 1 | - | - | - |
| Error Handling | 2 | - | - | - |
| Performance | 2 | - | - | - |
| Security | 2 | - | - | - |
| **Total** | **37** | **-** | **-** | **-** |

---

*Document Version: 1.0*  
*Last Updated: [Current Date]*  
*Prepared by: [Tester Name]*
