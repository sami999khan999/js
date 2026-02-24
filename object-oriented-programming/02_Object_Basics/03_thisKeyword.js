/**
 * ============================================================
 * Topic: The 'this' Keyword
 * Folder: 02_Object_Basics
 * Purpose:
 *    To allow methods to refer to the object they belong to, 
 *    making code dynamic and reusable.
 *
 * ------------------------------------------------------------
 * Definition:
 *    In JavaScript, `this` refers to the object that is 
 *    currently executing the code. Its value depends on 
 *    how a function is called.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Enables code reusability (same method works for different instances).
 *    - Essential for accessing an object's state from its methods.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // 1. In a method: `this` refers to the owner object.
 // 2. Alone: `this` refers to the global object (window).
 // 3. In a function: `this` refers to the global object (unless strict mode).
 // 4. In a constructor: `this` refers to the new instance created.


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const person = {
    name: 'Mosh',
    walk() {
        console.log(this); // Refers to 'person' object
    }
 };

 person.walk();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const video = {
    title: 'OOP Tutorial',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); 
        }, this); // Passing 'this' as 2nd arg to forEach
    }
 };

 video.showTags();


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Using arrow functions for methods (arrow functions don't have their own `this`).
 *    - Losing the context of `this` when passing methods as callbacks.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use arrow functions inside methods to preserve context for callbacks.
 *    - Use `.bind()`, `.call()`, or `.apply()` if you need to manually set `this`.
 *
 * ------------------------------------------------------------
 * Summary:
 *    `this` is determined by the call site. In regular methods, 
 *    it's the object. In constructors, it's the new instance. 
 *    In arrow functions, it's inherited from the parent scope.
 * ============================================================
 */
