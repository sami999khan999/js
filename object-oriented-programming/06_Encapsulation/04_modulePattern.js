/**
 * ============================================================
 * Topic: Module Pattern
 * Folder: 06_Encapsulation
 * Purpose:
 *    To simulate a "Class" with private and public parts using 
 *    an IIFE (Immediately Invoked Function Expression).
 *
 * ------------------------------------------------------------
 * Definition:
 *    A design pattern that uses a closure to encapsulate 
 *    private members and returns an object exposing public ones.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Avoids global scope pollution (Namespace pattern).
 *    - Provides a clean separation of concerns.
 *    - Foundation of module systems before ES6 modules.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const MyModule = (function() {
    let privateVar = 0;
    return {
        publicMethod() { /* ... */ }
    };
 })();


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const Calculator = (function() {
    let _result = 0; // Private
    return {
        add: (v) => _result += v,
        val: () => _result
    };
 })();

 Calculator.add(5);
 console.log(Calculator.val()); // 5


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const DBConnection = (function() {
    const config = { host: 'localhost' }; // Private
    
    function log(msg) { console.log('DB: ' + msg); } // Private

    return {
        connect() {
            log('Connecting to ' + config.host);
        }
    };
 })();


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting the `()` at the end of the IIFE.
 *    - Hard to unit test private functions inside the module.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use 'Revealing Module Pattern' where you define everything 
 *      privately first and just return references to them.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Module Pattern is a structural pattern used to 
 *    keep pieces of code independent of other components. 
 *    It uses closures to define private state and returns an 
 *    API object for the user to interact with.
 * ============================================================
 */
