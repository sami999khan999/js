/**
 * ============================================================
 * Topic: Property Descriptors
 * Folder: 09_Advanced_Object_Features
 * Purpose:
 *    To understand the "metadata" attached to every property in 
 *    a JavaScript object.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A Property Descriptor is an object that describes a 
 *    property's configuration: Value, Writable, Enumerable, 
 *    and Configurable.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - `writable`: Can the value be changed?
 *    - `enumerable`: Does it show up in `Object.keys` or `for...in`?
 *    - `configurable`: Can the property be deleted or changed later?
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Getting the descriptor
 const descriptor = Object.getOwnPropertyDescriptor(obj, 'propName');


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const car = { model: 'T' };
 console.log(Object.getOwnPropertyDescriptor(car, 'model'));
 // { value: 'T', writable: true, enumerable: true, configurable: true }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // toString is not enumerable!
 const desc = Object.getOwnPropertyDescriptor(Object.prototype, 'toString');
 console.log(desc.enumerable); // false


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting that when you create a property normally (`obj.a = 1`), 
 *      the defaults are TRUE. When using `defineProperty`, defaults are FALSE.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Check descriptors when debugging library objects that 
 *      behave unexpectedly (e.g., properties not showing up in loops).
 *
 * ------------------------------------------------------------
 * Summary:
 *    Descriptors are the "DNA" of an object property. They 
 *    define the rules for how that specific piece of data 
 *    can be interacted with.
 * ============================================================
 */
