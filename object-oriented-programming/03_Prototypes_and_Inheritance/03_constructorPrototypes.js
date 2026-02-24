/**
 * ============================================================
 * Topic: Constructor Prototypes
 * Folder: 03_Prototypes_and_Inheritance
 * Purpose:
 *    To share methods across all instances of a constructor, 
 *    optimizing memory usage.
 *
 * ------------------------------------------------------------
 * Definition:
 *    The `prototype` property is an object that is part of 
 *    every single function in JS. Objects created with the 
 *    `new` keyword inherit methods from this object.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Memory efficiency: Instead of 1000 objects having 1000 
 *      copies of a method, they all point to ONE copy on the prototype.
 *    - Fast updates: Changing a method on the prototype affects all instances.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Circle(radius) {
    this.radius = radius;
 }

 Circle.prototype.draw = function() {
    console.log('draw');
 };


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const c1 = new Circle(1);
 const c2 = new Circle(5);
 console.log(c1.draw === c2.draw); // true (Shared reference)


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function Member(name) {
    this.name = name;
 }

 Member.prototype.active = true; // Shared property
 Member.prototype.greet = function() {
    console.log('Welcome ' + this.name);
 };


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Storing state (data) on the prototype (it becomes shared/shared state is usually bad).
 *    - Shadowing prototype properties without realizing it.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Keep methods on the prototype.
 *    - Keep instance-specific data (state) in the constructor.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The `prototype` object is a shared space for all instances 
 *    of a constructor. It is the core of how JS manages 
 *    method-sharing and efficient inheritance.
 * ============================================================
 */
