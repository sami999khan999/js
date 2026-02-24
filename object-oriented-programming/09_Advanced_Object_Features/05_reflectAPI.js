/**
 * ============================================================
 * Topic: Reflect API
 * Folder: 09_Advanced_Object_Features
 * Purpose:
 *    To provide a cleaner, more consistent set of tools for 
 *    interceptable JavaScript operations.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Reflect is a built-in object that provides methods for 
 *    interceptable operations. It's essentially a collection of 
 *    all internal methods used by the JS engine.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Predictive: It returns boolean results instead of throwing.
 *    - Complete: It covers every trap that the Proxy API supports.
 *    - Clean: It separates object methods from the global namespace.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 Reflect.get(obj, 'prop');
 Reflect.set(obj, 'prop', 'value');
 Reflect.has(obj, 'prop');


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const user = { name: 'Khan' };
 if (Reflect.has(user, 'name')) {
    console.log(Reflect.get(user, 'name'));
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // More elegant than try-catch for property definition
 if (Reflect.defineProperty(obj, 'test', { value: 1 })) {
    console.log('Success');
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Confusing it with `Object` methods (though they overlap, Reflect is designed for use inside Proxies).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Always use Reflect methods when writing Proxy traps.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Reflect API is the "Modern" version of standard Object 
 *    utility methods. It's more reliable and designed 
 *    specifically for metaprogramming (writing code that 
 *    manipulates other code).
 * ============================================================
 */
