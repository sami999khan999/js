/**
 * ============================================================
 * Topic: Module Pattern (Design Pattern)
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To structure code in a way that provides public-private 
 *    separation without the overhead of Classes.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A structural pattern used to group related functions into 
 *    a single object, using closures to keep some logic private.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Encapsulates code.
 *    - Minimizes global scope pollution.
 *    - Organizes utility functions into logical namespaces.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const MyModule = (function() {
    // Private
    return {
        // Public
    };
 })();


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const Basket = (function() {
    const _items = []; // Private
    return {
        add: (i) => _items.push(i),
        get: () => [..._items]
    };
 })();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const AuthManager = (function() {
    let _token = null;
    return {
        login: (t) => { _token = t; },
        isLoggedIn: () => !!_token
    };
 })();


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Hard to extend (unlike Classes which have inheritance).
 *    - Private variables aren't easily accessible for unit tests.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for Utility libraries (like a Math or Storage helper).
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Module pattern is about organization. It creates a 
 *    protected scope for your logic while exposing only a 
 *    specific set of tools to the user.
 * ============================================================
 */
