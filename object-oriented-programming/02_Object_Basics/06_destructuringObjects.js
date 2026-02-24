/**
 * ============================================================
 * Topic: Destructuring Objects
 * Folder: 02_Object_Basics
 * Purpose:
 *    To extract multiple properties from an object and assign 
 *    them to variables in a concise way.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A JavaScript expression that makes it possible to unpack 
 *    values from arrays, or properties from objects, into distinct variables.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Makes code much more readable and dry.
 *    - Convenient for handling API responses or function arguments.
 *    - Allows setting default values easily.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const { name, age } = user;
 // Renaming: const { name: userName } = user;
 // Defaults: const { role = 'guest' } = user;


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const address = {
    street: '123 Main St',
    city: 'NY',
    zip: 10001
 };

 const { street, city } = address;
 console.log(street); // '123 Main St'


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function displayStats({ hp, mp, level = 1 }) { // Destructuring param
    console.log(`Lv: ${level}, HP: ${hp}, MP: ${mp}`);
 }

 const warrior = { name: 'Grog', hp: 100, mp: 10 };
 displayStats(warrior);


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Trying to destructure `null` or `undefined` (causes error).
 *    - Using parentheses incorrectly order in complex destructuring.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use destructuring for cleaner function signatures.
 *    - Provide default values when properties might be missing.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Object destructuring is a powerful syntax for extracting 
 *    properties. It reduces the need for repetitive `obj.prop` 
 *    access and helps in writing cleaner, more expressive code.
 * ============================================================
 */
