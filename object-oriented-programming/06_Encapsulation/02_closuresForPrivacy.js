/**
 * ============================================================
 * Topic: Closures for Privacy
 * Folder: 06_Encapsulation
 * Purpose:
 *    The classic way to create truly private variables in 
 *    JavaScript functions and classes.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A closure is the combination of a function bundled 
 *    together with references to its surrounding state. 
 *    This allows variables to persist even after the parent 
 *    function executes.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Variables inside the closure scope cannot be accessed from outside.
 *    - Enables private state in Factory functions.
 *    - Essential for the Module Pattern.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Counter() {
    let count = 0; // Private
    this.increment = function() { count++; console.log(count); };
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const makeSecret = (msg) => {
    const secret = msg;
    return () => console.log('The secret is: ' + secret);
 };

 const reveal = makeSecret('Coffee');
 reveal(); // Works
 // console.log(secret); // ReferenceError


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function APIClient(apiKey) {
    // apiKey is private to this client instance
    return {
        fetchData: (endpoint) => {
            console.log(`Using Key: ${apiKey} to fetch ${endpoint}`);
        }
    };
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Creating memory leaks (keeping too much data in closures).
 *    - Not realizing that every instance of a factory/constructor 
 *      creates a NEW set of variables in memory.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use closures for sensitive keys or state that shouldn't be mutable.
 *    - Prefer private class fields (#) in modern ES2020+ code for better memory.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Closures "wrap" a variable inside a function's scope. 
 *    By only exposing inner functions that use that variable, 
 *    we create a "private room" that the outside world 
 *    cannot enter directly.
 * ============================================================
 */
