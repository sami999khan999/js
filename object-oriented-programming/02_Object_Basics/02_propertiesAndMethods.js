/**
 * ============================================================
 * Topic: Properties and Methods
 * Folder: 02_Object_Basics
 * Purpose:
 *    To distinguish between the state (data) and behavior (logic) 
 *    of an object.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Properties are variables attached to objects (state). 
 *    Methods are functions attached to objects (behavior).
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows objects to "act" on their own data.
 *    - Keeps code organized by grouping what an object "is" with what it "does".
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const obj = {
    prop: 'Value', // Property
    method() {     // Method
        return this.prop;
    }
 };


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const dog = {
    breed: 'Labrador',
    bark() {
        console.log('Woof!');
    }
 };

 console.log(dog.breed); // Accessing property
 dog.bark();             // Calling method


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const counter = {
    value: 0,
    increment() {
        this.value++;
    },
    decrement() {
        this.value--;
    }
 };


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Confusing properties with local variables inside methods.
 *    - Not using `this` to access properties from within a method.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Name properties as nouns.
 *    - Name methods as verbs.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Properties represent the data/state of an object, while 
 *    methods represent actions the object can perform. Together, 
 *    they make up the public interface of an object.
 * ============================================================
 */
