/**
 * ============================================================
 * Topic: Revealing Module Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    A variation of the Module Pattern that improves readability 
 *    by defining everything privately first.
 *
 * ------------------------------------------------------------
 * Definition:
 *    You define all functions and variables in the private scope, 
 *    then return an object with pointers to those private members.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Consistent Syntax: Everything is written as a variable/function.
 *    - Clear API: You can see exactly what is being exposed at the end.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const Module = (function() {
    const a = 1;
    function b() {}

    return { a, b }; // Just exposure!
 })();


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const Storage = (function() {
    function save() { console.log('Saving...'); }
    function load() { console.log('Loading...'); }

    return {
        save,
        load
    };
 })();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const UserSvc = (function() {
    function validate() {}
    function register() { validate(); /* ... */ }

    return {
        register // Only exposing register, validate stays internal
    };
 })();


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - If a private function is modified locally, the public 
 *      reference might still point to the old version.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for complex modules where separating logic from 
 *      exposure improves readability.
 *
 * ------------------------------------------------------------
 * Summary:
 *    This pattern makes the structure of your module much 
 *    cleaner. You write your code normally, then simply "reveal" 
 *    the pieces you want the outside world to use.
 * ============================================================
 */
