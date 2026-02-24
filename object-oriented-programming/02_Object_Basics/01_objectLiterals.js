/**
 * ============================================================
 * Topic: Object Literals
 * Folder: 02_Object_Basics
 * Purpose:
 *    The simplest way to create and group related data in JavaScript.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A comma-separated list of name-value pairs wrapped in curly braces {}.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Fast and lightweight way to create objects.
 *    - Perfect for configuration or one-off data containers.
 *    - Foundation for JSON (JavaScript Object Notation).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const obj = {
    key: 'value',
    method: function() { /* logic */ }
 };


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const circle = {
    radius: 1,
    location: { x: 1, y: 1 },
    draw: function() { console.log('draw'); }
 };

 circle.draw();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const userProfile = {
    id: 101,
    name: 'John Doe',
    interests: ['coding', 'music'],
    getFullName() {
        return this.name;
    }
 };


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting commas between properties.
 *    - Using arrow functions for methods when you need `this`.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use shorthand property names if variable name matches key.
 *    - Use method shorthand ( `name() {}` ) instead of `name: function() {}`.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Object literals are the most common way to define objects in JS. 
 *    They are dynamic, meaning you can add or remove properties at 
 *    any time after creation.
 * ============================================================
 */
