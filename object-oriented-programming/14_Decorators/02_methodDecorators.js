/**
 * ============================================================
 * Topic: Method Decorators
 * Folder: 14_Decorators
 * Purpose:
 *    To intercept method calls, modify arguments, or change 
 *    the return value of individual functions within a class.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A decorator applied to the property descriptor of a 
 *    class method.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Perfect for timing, logging, or caching.
 *    - Allows locking properties (making them read-only).
 *    - Simplifies access control and validation logic.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // class Example {
 //    @ReadOnly
 //    method() {}
 // }

/**
 * ------------------------------------------------------------
 * Example 1: Read-Only Property (Simulated)
 */

 function ReadOnly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
 }

 class Config {}
 // Simulated: @ReadOnly check
 // descriptor = Object.getOwnPropertyDescriptor(Config.prototype, 'apiKey');

/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example (Execution Time)
 */

 function Time(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function(...args) {
        const start = performance.now();
        const result = original.apply(this, args);
        const end = performance.now();
        console.log(`${key} took ${end - start}ms`);
        return result;
    };
    return descriptor;
 }

 class Worker {
    work() { /* some heavy loop */ }
 }
 // Simulated decorator application

/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting to return the descriptor.
 *    - Breaking 'this' binding by using arrow functions incorrectly.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Always reuse the original method logic when wrapping.
 *    - Use for non-business logic (concerns like performance).
 *
 * ------------------------------------------------------------
 * Summary:
 *    Method decorators are the most powerful type of 
 *    decorator as they allow you to wrap the actual 
 *    logic inside your class methods.
 * ============================================================
 */
