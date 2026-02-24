/**
 * ============================================================
 * Topic: Instance vs Static Methods
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To differentiate between behaviors tied to a specific 
 *    object instance versus those tied to the blueprint itself.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Instance Methods: Available on objects created via `new`.
 *    Static Methods: Called on the Class itself, not on instances.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Static methods are great for utility functions related 
 *      to the class but not to a specific object state.
 *    - Memory: Static methods exist only on the class, not 
 *      duplicated on every object.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class MyClass {
    instanceMethod() {}   // Call on: obj.instanceMethod()
    static staticMethod() {} // Call on: MyClass.staticMethod()
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Circle {
    constructor(radius) { this.radius = radius; }

    draw() { console.log('Drawing...'); } // Instance

    static parse(str) { // Static
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
 }

 const c = Circle.parse('{"radius": 1}');
 c.draw();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Math is a great example of static-only usage
 // Math.random(), Math.floor() -> You never do 'new Math()'
 class Validator {
    static isEmail(str) {
        return str.includes('@');
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Accessing `this` (instance data) inside a static method.
 *    - Calling a static method on an instance.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use static methods for Factory functions or Utility helpers.
 *    - Use instance methods for behavior that needs object state.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Instance methods represent what an object "does". 
 *    Static methods represent what the "idea" or "category" 
 *    of the class provides as a service.
 * ============================================================
 */
