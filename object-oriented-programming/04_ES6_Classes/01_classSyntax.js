/**
 * ============================================================
 * Topic: Class Syntax
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To provide a cleaner, more intuitive syntax for creating 
 *    objects and handling inheritance in JavaScript.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Introduced in ES6, 'Classes' are blueprints for objects. 
 *    They are "syntactic sugar" over JavaScript's existing 
 *    prototype-based inheritance.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - More readable and similar to other popular OOP languages.
 *    - Consolidates constructor logic and prototype methods in one block.
 *    - Mandatory for certain frameworks like React (Class Components) 
 *      or NestJS.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class MyClass {
    constructor() { /* ... */ }
    method() { /* ... */ }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
 }

 const user = new User('Sami');
 user.sayHello();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Logger {
    log(message) {
        const time = new Date().toLocaleTimeString();
        console.log(`[${time}] ${message}`);
    }
 }

 const myLog = new Logger();
 myLog.log('Application started');


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Thinking Classes in JS work exactly like Java/C++ (underneath it's still prototypes).
 *    - Forgetting the `new` keyword (Classes throw error if called as functions).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use PascalCase for class names.
 *    - Keep methods logic-driven and constructor data-driven.
 *
 * ------------------------------------------------------------
 * Summary:
 *    ES6 Classes don't introduce a new model; they just make 
 *    creating objects and managing prototypes much easier for 
 *    developers to read and write.
 * ============================================================
 */
