/**
 * ============================================================
 * Topic: Getters and Setters
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To provide a way to intercept property access and assignment, 
 *    allowing for validation and computed properties.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Getters (`get`) are methods used to retrieve a value. 
 *    Setters (`set`) are methods used to update a value. 
 *    They act like properties but are executed as functions.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Data Validation: Ensure only valid data is set to properties.
 *    - Computed Properties: Derive values from other state dynamically.
 *    - Encapsulation: Hide internal data representation.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class User {
    get name() { return this._name; }
    set name(value) { 
        if(value.length < 3) throw new Error('Too short');
        this._name = value; 
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Square {
    constructor(width) { this.width = width; }
    get area() {
        return this.width * this.width;
    }
 }

 const s = new Square(10);
 console.log(s.area); // 100 (Accessed like a property)


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Temperature {
    constructor(celsius) { this.c = celsius; }
    get fahrenheit() { return (this.c * 9) / 5 + 32; }
    set fahrenheit(f) { this.c = (f - 32) * 5 / 9; }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Creating infinite loops (using `this.prop` inside `get prop` instead of `this._prop`).
 *    - Overusing them for simple data that doesn't need logic.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use a prefix (like `_`) for the actual data property.
 *    - Keep getters "pure" (they shouldn't change the object state).
 *
 * ------------------------------------------------------------
 * Summary:
 *    Getters and Setters give you a "hook" into property 
 *    manipulation. They allow you to maintain a clean public 
 *    interface while having complex logic under the hood.
 * ============================================================
 */
