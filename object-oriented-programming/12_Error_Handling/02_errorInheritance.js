/**
 * ============================================================
 * Topic: Error Inheritance
 * Folder: 12_Error_Handling
 * Purpose:
 *    To build a hierarchy of errors for complex applications.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Creating a base application error class and then 
 *    subclassing it for specific domains (Database, Network, UI).
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows "broad" catching (catch all AppErrors) or 
 *      "specific" catching (catch only DatabaseErrors).
 *    - Keeps error handling logic consistent.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class AppError extends Error {}
 class NetworkError extends AppError {}
 class TimeoutError extends NetworkError {}


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 try {
    throw new TimeoutError('Request took too long');
 } catch (e) {
    if (e instanceof NetworkError) {
        console.log('A network issue occurred');
    }
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class DatabaseError extends Error { /* ... */ }
 class DuplicateKeyError extends DatabaseError { /* ... */ }
 class ConnectionError extends DatabaseError { /* ... */ }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Overly deep error hierarchies (usually 2-3 levels is enough).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Make sure your base class correctly initializes and handles stack traces.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Error inheritance allows you to categorize errors 
 *    hierarchically. This gives you the flexibility to handle 
 *    a whole "group" of errors with a single catch block or 
 *    drill down into specifics.
 * ============================================================
 */
