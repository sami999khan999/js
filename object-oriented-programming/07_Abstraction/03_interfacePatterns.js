/**
 * ============================================================
 * Topic: Interface Patterns
 * Folder: 07_Abstraction
 * Purpose:
 *    To define a "contract" that multiple classes must follow, 
 *    ensuring they provide a specific set of functionality.
 *
 * ------------------------------------------------------------
 * Definition:
 *    An interface defines what an object can do, without defining 
 *    how. In JS, interfaces are often enforced through Duck Typing 
 *    or manual checks.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows different classes to be used interchangeably.
 *    - Standardizes communication between different parts of the system.
 *    - Decouples implementation from usage.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Concept: Every 'Logger' must have a 'log' method
 function useLogger(logger) {
    if (typeof logger.log !== 'function') throw new Error('Invalid Interface');
    logger.log('Action happened');
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class ConsoleLogger { log(msg) { console.log(msg); } }
 class FileLogger { log(msg) { /* write to file */ } }

 [new ConsoleLogger(), new FileLogger()].forEach(l => l.log('Hi'));


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // A 'Renderable' interface concept
 const renderUI = (component) => {
    if ('render' in component) {
        component.render();
    }
 };


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Thinking JS validates interfaces at compile-time (it's always at runtime).
 *    - Overly complex interface checks that slow down performance.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use constant names for method signatures.
 *    - Prefer "Duck Typing" (trying to use the method) and handling errors.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Interfaces in JS are conceptual. By ensuring multiple 
 *    classes share the same method names and signatures, 
 *    we can write flexible code that works with any object 
 *    that "looks" like the interface we need.
 * ============================================================
 */
