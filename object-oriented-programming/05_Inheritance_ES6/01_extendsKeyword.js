/**
 * ============================================================
 * Topic: The extends Keyword
 * Folder: 05_Inheritance_ES6
 * Purpose:
 *    To establish a parent-child relationship between classes, 
 *    allowing a subclass to inherit properties and methods 
 *    from a superclass.
 *
 * ------------------------------------------------------------
 * Definition:
 *    The `extends` keyword is used in class declarations to 
 *    create a class that is a child of another class.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Promotes code reuse and logical hierarchy.
 *    - Simplifies inheritance compared to ES5 prototypes.
 *    - Automatically sets up the prototype chain and static inheritance.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Parent {}
 class Child extends Parent {}


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Device {
    turnOn() { console.log('Powering up...'); }
 }

 class Phone extends Device {
    call() { console.log('Dialing...'); }
 }

 const myPhone = new Phone();
 myPhone.turnOn(); // Inherited


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class User {
    constructor(name) { this.name = name; }
    logout() { console.log('Logout successful'); }
 }

 class Admin extends User {
    deleteUser() { console.log('User deleted'); }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting that static methods are also inherited.
 *    - Extending classes that are too specific (keep parents general).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use inheritance for "is-a" relationships (A Dog is an Animal).
 *    - Avoid very deep inheritance trees (more than 3 levels).
 *
 * ------------------------------------------------------------
 * Summary:
 *    `extends` is the ES6 way to link classes. It makes sharing 
 *    logic between related entities simple and readable, handling 
 *    all the complex prototype linking behind the scenes.
 * ============================================================
 */
