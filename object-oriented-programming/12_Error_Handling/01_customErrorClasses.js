/**
 * ============================================================
 * Topic: Custom Error Classes
 * Folder: 12_Error_Handling
 * Purpose:
 *    To create specific error types that provide more context 
 *    and better debugging information than the generic `Error`.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Inheriting from the built-in `Error` class to create a 
 *    new category of error (e.g., `ValidationError`).
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows specific `catch` logic based on the error type.
 *    - Can carry extra data (like HTTP status codes or field names).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class MyError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'MyError';
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
 }

 // Usage
 throw new ValidationError('Invalid Age', 'age');


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
 }

 // In an API handler:
 // catch(e) { if (e instanceof ApiError) res.status(e.status).send(e.message); }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting `super(message)` (the error message won't be set).
 *    - Not setting `this.name` (the error will just show up as 'Error' in logs).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use `instanceof` to differentiate errors in catch blocks.
 *    - Capture the stack trace properly (built-in for simple extends).
 *
 * ------------------------------------------------------------
 * Summary:
 *    Custom error classes make your error handling logic 
 *    "smarter". Instead of checking error message strings, 
 *    you check the error's "Type" using OOP principles.
 * ============================================================
 */
