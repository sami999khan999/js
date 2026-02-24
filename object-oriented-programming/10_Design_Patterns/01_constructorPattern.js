/**
 * ============================================================
 * Topic: Constructor Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    The most basic pattern for creating multiple object 
 *    instances with shared properties and methods.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A creational design pattern that uses a specialized 
 *    function to initialize new objects.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Simple to implement.
 *    - Supported in every JS environment.
 *    - Memory efficient when used with prototypes.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Employee(name, position) {
    this.name = name;
    this.position = position;
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function Car(model, year) {
    this.model = model;
    this.year = year;
 }

 const c1 = new Car('Model S', 2024);


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function DatabaseConnection(uri) {
    this.uri = uri;
    this.status = 'disconnected';
    this.connect = function() { this.status = 'connected'; };
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting to use `new`.
 *    - Putting big functions inside the constructor (use prototypes instead).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use PascalCase.
 *    - Prefer ES6 Class syntax for a cleaner version of this pattern.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Constructor pattern is the building block of OOP in 
 *    JS. It provides a blueprint for creating objects that 
 *    share the same structure.
 * ============================================================
 */
