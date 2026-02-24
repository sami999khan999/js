/**
 * ============================================================
 * Topic: Object.defineProperties()
 * Folder: 09_Advanced_Object_Features
 * Purpose:
 *    To define or modify multiple properties on an object in 
 *     a single call.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Similar to `defineProperty`, but it accepts an object 
 *    where keys are property names and values are descriptors.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Cleaner syntax when initializing complex objects.
 *    - Efficient: minimizes calls to the engine.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 Object.defineProperties(obj, {
    prop1: { value: 1, writable: true },
    prop2: { value: 2, enumerable: false }
 });


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const user = {};
 Object.defineProperties(user, {
    id: { value: 101, writable: false },
    username: { value: 'cool_guy', enumerable: true }
 });


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function createPerson(name, secret) {
    const p = {};
    Object.defineProperties(p, {
        name: { value: name, enumerable: true },
        id: { value: Date.now(), writable: false },
        _secret: { value: secret, enumerable: false }
    });
    return p;
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Overwhelming an object with too many descriptors makes it hard to maintain.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use when multiple properties need specific (non-default) behaviors.
 *
 * ------------------------------------------------------------
 * Summary:
 *    `Object.defineProperties` is simply the plural version of 
 *    `defineProperty`. Use it for batch operations to keep 
 *    your code organized and readable.
 * ============================================================
 */
