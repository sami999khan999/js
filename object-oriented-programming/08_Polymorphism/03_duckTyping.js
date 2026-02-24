/**
 * ============================================================
 * Topic: Duck Typing
 * Folder: 08_Polymorphism
 * Purpose:
 *    To allow flexibility in object handling by focusing on 
 *    behavior (methods/properties) rather than the official class type.
 *
 * ------------------------------------------------------------
 * Definition:
 *    "If it walks like a duck and quacks like a duck, it's a duck." 
 *    An object's suitability is determined by the presence of 
 *    certain methods/properties rather than its actual type.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Allows for extremely flexible code.
 *    - No need for strict inheritance hierarchies.
 *    - Perfect for dynamic languages like JavaScript.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function fly(bird) {
    if (typeof bird.soar === 'function') {
        bird.soar();
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const duck = { quack: () => console.log('Quack!') };
 const person = { quack: () => console.log('I am mimicking a duck!') };

 function makeItQuack(obj) { obj.quack(); }

 makeItQuack(duck);   // Works
 makeItQuack(person); // Works (Duck Typing in action)


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Iterables in JS use Duck Typing via the [Symbol.iterator] property.
 // If an object has that method, it can be used in a for...of loop.


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Calling methods that might not exist without checking.
 *    - Relying on property names that are too generic (leads to false positives).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Always check for the existence of the method before calling it.
 *    - Use unique enough method names to represent the "capability".
 *
 * ------------------------------------------------------------
 * Summary:
 *    Duck Typing is the ultimate form of dynamic polymorphism. 
 *    It decouples your code from Class names and focuses 
 *    entirely on whether an object can "do the job" you 
 *    need it to do.
 * ============================================================
 */
