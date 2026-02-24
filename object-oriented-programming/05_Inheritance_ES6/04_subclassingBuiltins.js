/**
 * ============================================================
 * Topic: Subclassing Built-ins
 * Folder: 05_Inheritance_ES6
 * Purpose:
 *    To extend the functionality of standard JavaScript objects 
 *    like Array, Error, Map, etc.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Creating a custom class that inherits from a native JS 
 *    constructor like `Array`, `Date`, or `RegExp`.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows creating specialized data structures (e.g., a "LoggedArray").
 *    - Better than adding methods to native prototypes (keeps things localized).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class MyArray extends Array {
    first() { return this[0]; }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Stack extends Array {
    peek() {
        return this[this.length - 1];
    }
 }

 const s = new Stack();
 s.push(1, 2, 3);
 console.log(s.peek()); // 3


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class CustomError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
        this.name = 'CustomError';
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Some older built-ins (pre-ES6) don't subclass perfectly.
 *    - Over-optimizing by extending Array when a simple object would do.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use the static `[Symbol.species]` if you want methods like `map()` to return the base Array instead of your Subclass.
 *    - Always call `super()` with correct arguments for the built-in.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Subclassing built-ins lets you "enhance" native types. 
 *    Your custom class inherits all native methods (like `push`, 
 *    `pop`, `forEach`) while allowing you to add more.
 * ============================================================
 */
