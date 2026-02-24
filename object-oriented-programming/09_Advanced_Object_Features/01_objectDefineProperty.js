/**
 * ============================================================
 * Topic: Object.defineProperty()
 * Folder: 09_Advanced_Object_Features
 * Purpose:
 *    To precisely add or modify a property on an object with 
 *    fine-grained control over its behavior.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A static method that defines a new property directly on 
 *    an object, or modifies an existing one, returning the object.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows making properties read-only (`writable: false`).
 *    - Allows hiding properties from loops (`enumerable: false`).
 *    - Prevents property deletion (`configurable: false`).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const obj = {};
 Object.defineProperty(obj, 'name', {
    value: 'Sami',
    writable: false,
    enumerable: true,
    configurable: true
 });


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const person = {};
 Object.defineProperty(person, 'age', {
    value: 25,
    writable: false // It can't be changed!
 });

 person.age = 30; // Fails silently (or throws in strict mode)
 console.log(person.age); // 25


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Defining a getter/setter on an existing object
 const circle = { radius: 2 };
 Object.defineProperty(circle, 'area', {
    get() { return Math.PI * this.radius * this.radius; }
 });


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Trying to set 'value' and 'get/set' at the same time (Invalid).
 *    - Thinking descriptors are the default (default for `defineProperty` is false for writable/enumerable/configurable).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for sensitive metadata properties that shouldn't be edited by library users.
 *
 * ------------------------------------------------------------
 * Summary:
 *    `Object.defineProperty` is the low-level way to control 
 *    how properties behave. It's the "behind the scenes" tool 
 *    used to implement features like getters/setters and constants.
 * ============================================================
 */
