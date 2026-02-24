/**
 * ============================================================
 * Topic: Object.create()
 * Folder: 03_Prototypes_and_Inheritance
 * Purpose:
 *    To create a new object with a specified prototype, 
 *    offering more control than constructors.
 *
 * ------------------------------------------------------------
 * Definition:
 *    `Object.create(proto)` creates a new object and sets its 
 *    internal `[[Prototype]]` link to the `proto` object 
 *    passed in.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Cleaner way to set up inheritance.
 *    - Allows creating objects that don't have a prototype (`Object.create(null)`).
 *    - Very flexible for implementing the Prototype pattern.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const parent = { name: 'Parent' };
 const child = Object.create(parent);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const dog = {
    species: 'Canine',
    bark: function() { console.log('Woof!'); }
 };

 const mutt = Object.create(dog);
 mutt.bark(); // 'Woof!'
 console.log(Object.getPrototypeOf(mutt) === dog); // true


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Creating a "pure" dictionary with no inherited methods
 const dict = Object.create(null);
 // dict.toString() would throw an error here because it has no prototype!


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Assuming `Object.create(proto)` calls a constructor (it doesn't).
 *    - Not providing the second argument (propertiesObject) if you want to initialize data.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use it for clean inheritance setup.
 *    - Use `Object.create(null)` for map-like objects to avoid key collisions with `Object.prototype`.
 *
 * ------------------------------------------------------------
 * Summary:
 *    `Object.create()` is a powerful tool for linking objects. 
 *    It bypasses the need for a constructor function if all you 
 *    want is to inherit behaviors from an existing object.
 * ============================================================
 */
