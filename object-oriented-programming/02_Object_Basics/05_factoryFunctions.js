/**
 * ============================================================
 * Topic: Factory Functions
 * Folder: 02_Object_Basics
 * Purpose:
 *    To produce objects without using the `new` keyword, providing 
 *    a cleaner and often more flexible alternative to constructors.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A regular function that creates and returns a new object.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - No `this` context issues (since `new` isn't used).
 *    - Better encapsulation (can use closures to keep data private).
 *    - Easier to implement object composition.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const circle1 = createCircle(1);
 circle1.draw();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function createUser(name, role) {
    return {
        name,
        role,
        permissions: role === 'admin' ? ['all'] : ['read'],
        describe() {
            return `${this.name} is an ${this.role}`;
        }
    };
 }

 const admin = createUser('Khan', 'admin');


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Not returning the object from the function.
 *    - Thinking they are always better than classes (Classes can be more memory efficient).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use camelCase for factory function names.
 *    - Use shorthand property syntax when parameters match keys.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Factory functions are just functions that return objects. 
 *    They are an excellent alternative to constructors when you 
 *    don't need the prototype chain complexity or want to avoid 
 *    `new` keyword pitfalls.
 * ============================================================
 */
