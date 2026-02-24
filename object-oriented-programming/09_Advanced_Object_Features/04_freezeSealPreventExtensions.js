/**
 * ============================================================
 * Topic: Freeze, Seal, and PreventExtensions
 * Folder: 09_Advanced_Object_Features
 * Purpose:
 *    To protect the structure and content of objects from 
 *    unwanted modification.
 *
 * ------------------------------------------------------------
 * Definition:
 *    - preventExtensions: No new properties.
 *    - seal: No new properties, no deletes.
 *    - freeze: No new, no deletes, no value changes.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Immutable state: Essential for some frameworks/patterns.
 *    - Safety: Prevents other developers from breaking object structures.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 Object.preventExtensions(obj);
 Object.seal(obj);
 Object.freeze(obj);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const settings = { theme: 'dark' };
 Object.freeze(settings);

 settings.theme = 'light'; // Ignored
 settings.newProp = 'val'; // Ignored
 console.log(settings.theme); // 'dark'


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const API_CONFIG = Object.freeze({
    url: 'https://api.v1',
    timeout: 5000
 });


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Freeze is "shallow": nested objects are NOT frozen.
 *    - Not checking `Object.isFrozen(obj)` before trying to modify.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Freeze configuration objects.
 *    - Seal objects that have a strict schema.
 *
 * ------------------------------------------------------------
 * Summary:
 *    These three methods provide increasing levels of protection. 
 *    `Freeze` is the strongest, making an object effectively 
 *    immutable (read-only) in terms of its direct properties.
 * ============================================================
 */
