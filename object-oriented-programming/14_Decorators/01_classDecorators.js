/**
 * ============================================================
 * Topic: Class Decorators
 * Folder: 14_Decorators
 * Purpose:
 *    To observe, modify, or replace a class definition using 
 *    a declarative syntax.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A special kind of declaration that can be attached to a 
 *    class declaration, method, accessor, property, or parameter.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Clean, declarative syntax for boilerplate code.
 *    - Highly popular in frameworks like Angular and NestJS.
 *    - Stage 3 TC39 proposal (modern JS feature).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // @decoratorName
 // class MyClass {}

/**
 * ------------------------------------------------------------
 * Example 1: Basic Class Decorator
 */

 function Logger(target) {
    console.log(`Class ${target.name} registered.`);
    target.prototype.timestamp = new Date().toISOString();
 }

 // Simulating @Logger
 class Service {}
 Logger(Service);

 const s = new Service();
 // console.log(s.timestamp);

/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example (Metadata)
 */

 function Version(versionString) {
    return function(target) {
        target.prototype.version = versionString;
    };
 }

 class API {}
 Version('1.0.2')(API);

 const myApi = new API();
 // console.log(myApi.version);

/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Using decorators in environments without transpilers.
 *    - Confusing decorator syntax with standard function calls.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for cross-cutting concerns (logging, metadata).
 *    - Keep decorators small and focused.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Class decorators provide a way to wrap classes and 
 *    attach metadata or functionality globally before an 
 *    instance is even created.
 * ============================================================
 */
