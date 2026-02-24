/**
 * ============================================================
 * Topic: Class Fields (Public)
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To simplify the declaration of instance properties without 
 *    necessarily using the constructor.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Class fields allow you to declare and initialize properties 
 *    directly within the class body.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Cleaner syntax for default values.
 *    - Reduces boilerplate in the constructor.
 *    - Works perfectly for fields that don't depend on constructor arguments.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Counter {
    count = 0; // Public Class Field
    
    increment() { this.count++; }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Game {
    score = 0;
    status = 'idle';
    
    start() { this.status = 'playing'; }
 }

 const g = new Game();
 console.log(g.score); // 0


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Player {
    id = Math.random().toString(36).substr(2, 9);
    level = 1;

    constructor(name) {
        this.name = name;
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Trying to access other properties during initialization (risky).
 *    - Confusing them with local variables (they MUST be accessed with `this`).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for static/default data that doesn't change per-init.
 *    - Excellent for initializing arrow functions as methods (auto-bind `this`).
 *
 * ------------------------------------------------------------
 * Summary:
 *    Class fields are a modern way to define properties. They 
 *    live on the instance (just like properties set in the 
 *    constructor) but offer a much leaner way to write them.
 * ============================================================
 */
