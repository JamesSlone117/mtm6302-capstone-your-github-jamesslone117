# Quiz App JavaScript Development

## Overview
This README aims to document the missteps and lessons learned during the development of the JavaScript code for a quiz app.
## Missteps

### 1. Not Handling User Answers Properly
Initially, the code did not handle user answers correctly. It allowed users to select multiple answers before submitting, which could lead to an incorrect output. This issue was resolved by disabling answer buttons after the user selects an answer.

### 2. Incorrect Image Reset
In the reset functionality, I tried to reset the image by setting the `innerHTML` of the image element to a variable (`picture`). However, this approach did not work as expected. The correct approach was to set the `innerHTML` directly to the image HTML string.

### 3. Lack of Readability in Event Listeners
In some event listeners, the code was hard to follow due to nested functions and unclear variable names. This made it difficult to understand the flow of the code. Refactoring the event listeners and using descriptive variable names improved readability.

### 4. Incomplete Error Handling
Error handling was not comprehensive in the code. While there was basic error handling for fetching quiz questions, it could be improved to handle more edge cases and provide better feedback to the user.


## Lessons Learned

### 1. Test User Interaction Thoroughly
It's essential to test user interactions thoroughly to ensure the app behaves as expected. This includes handling user inputs, such as selecting answers and resetting the quiz.

### 2. Keep Code DRY (Don't Repeat Yourself)
Avoid repeating code by creating reusable functions and modules. This helps reduce duplication and makes the code easier to maintain.

### 3. Use Descriptive Variable Names
Using descriptive variable names improves code readability.

### 4. Regularly Review and Refactor Code
Regularly reviewing and refactoring code helps improve its quality, readability, and maintainability over time.