**Bug ID**: 001
**Title**: Book date sorting not clear
**Severity**: Medium
**Priority**: Medium
**Environment**: Firefox
**Description**: There exist a filtering option called "book date", which is present on the Books page. The problem is that the book date doesn't specify what the sorting is doing. Question such as "Is it date added?", "Is it date modified?" come into play.
**Steps to Reproduce**:
1. Login to the application.
2. Navigate to the books page (if not already on it after login).
3. Click on the first sorting option (book date).
**Expected Result**: The filtering option should be more specific
**Actual Result**: Currently, the books are sorted by "book date", which is not a visible option for a specific book.
**Screenshots**: 
- See attached screenshot
**Additional Notes**: N/A


**Bug ID**: 002
**Title**: Database lock prevents modification of books metadata
**Severity**: High
**Priority**: High
**Environment**: Firefox
**Description**: When trying to modify a books metadata, or deleting book, an error message appears. The error message specifies a "Database is locked" error message.
**Steps to Reproduce**:
1. Login to the application.
2. Navigate to the books page (if not already on it after login).
3. Click on a book.
4. Click on the "Edit metadata" button.
5. Click on "Delete book".
6. Observe the error message.
**Expected Result**: The book should be successfully deleted.
**Actual Result**: Currently an error message is displayed and nothing further happens.
**Screenshots**: 
- See attached screenshot
**Additional Notes**:
- Please note that it's for trying to delete a book or trying to modify the metadata.