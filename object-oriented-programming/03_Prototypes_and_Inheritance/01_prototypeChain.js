/**
 * ============================================================
 * Topic: Prototype Chain
 * Folder: 03_Prototypes_and_Inheritance
 * Purpose:
 *    To understand how JavaScript implements inheritance through 
 *    a series of linked objects.
 *
 * ------------------------------------------------------------
 * Definition:
 *    The prototype chain is a mechanism where objects "delegate" 
 *    property/method lookups up a chain of linked objects until 
 *    the property is found or `null` is reached.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Memory efficiency: Shares methods across all instances.
 *    - Dynamic addition: Adding a method to a prototype instantly 
 *      makes it available to all linked instances.
 *    - Core of JS: Explains how `hasOwnProperty`, `toString`, etc., work.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Accessing prototype
 // obj.__proto__ (Legacy)
 // Object.getPrototypeOf(obj) (Modern)


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const person = { name: 'Sami' };
 console.log(person.toString()); 
 // Looked in 'person' -> Not found
 // Looked in 'Object.prototype' -> Found toString()


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function MyArray() {}
 MyArray.prototype = Object.create(Array.prototype);

 const list = new MyArray();
 list.push(1); // Works because of inheritance from Array.prototype


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Creating deep prototype chains (slows down property lookup).
 *    - Confusing `prototype` property (on functions) with `__proto__` (on instances).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use `Object.getPrototypeOf()` instead of `__proto__`.
 *    - Don't modify the prototypes of built-in objects.
 *
 * ------------------------------------------------------------
 * Summary:
 *    When you access a property on an object, JS first looks at 
 *    the object itself. If not found, it looks at its prototype, 
 *    then that prototype's prototype, and so on. This is the 
 *    Prototype Chain.
 * ============================================================
 */
