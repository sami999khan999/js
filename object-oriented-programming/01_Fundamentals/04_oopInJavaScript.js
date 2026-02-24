/**
 * ============================================================
 * Topic: OOP in JavaScript
 * Folder: 01_Fundamentals
 * Purpose:
 *    To understand JS's unique prototype-based approach to OOP 
 *    compared to class-based languages like Java/C++.
 *
 * ------------------------------------------------------------
 * Definition:
 *    JavaScript is a prototype-based language, where objects inherit 
 *    directly from other objects. The "Class" syntax is primarily 
 *    syntactic sugar over prototypes.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Helps understand how inheritance actually works under the hood.
 *    - Explains why `this` behaves differently in JS.
 *    - Allows for dynamic behavior (adding methods to prototypes at runtime).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Constructor Function (Old Way)
 function Person(name) {
    this.name = name;
 }
 Person.prototype.greet = function() { console.log('Hi ' + this.name); };

 // Class Syntax (ES6+ Way)
 class PersonES6 {
    constructor(name) { this.name = name; }
    greet() { console.log('Hi ' + this.name); }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const p1 = new PersonES6('Alice');
 p1.greet();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Built-in objects use prototypes
 const arr = [1, 2, 3];
 // arr inherits from Array.prototype
 console.log(arr.hasOwnProperty('push')); // false (inherited)
 console.log(Object.getPrototypeOf(arr) === Array.prototype); // true


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting that `class` is just a function in JS.
 *    - Misunderstanding the prototype chain.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use Class syntax for readability unless prototypes are needed specifically.
 *    - Avoid modifying built-in prototypes (Array, Object, etc.).
 *
 * ------------------------------------------------------------
 * Summary:
 *    JS OOP is "Prototypal Inheritance". Even with modern `class` 
 *    syntax, objects are linked to other objects to share properties 
 *    and methods. This makes JS highly flexible but different 
 *    from traditional OOP languages.
 * ============================================================
 */
