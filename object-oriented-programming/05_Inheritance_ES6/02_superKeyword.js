/**
 * ============================================================
 * Topic: The super Keyword
 * Folder: 05_Inheritance_ES6
 * Purpose:
 *    To access and call the constructor or methods of a 
 *    parent class from within a child class.
 *
 * ------------------------------------------------------------
 * Definition:
 *    `super` acts as a reference to the parent class. It is 
 *    used as `super()` to call the parent constructor or 
 *    `super.method()` to call a parent method.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Required in the child constructor to initialize the 
 *      parent part of the object.
 *    - Allows "extending" parent behavior instead of just 
 *      completely replacing it.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Child extends Parent {
    constructor() {
        super(); // Calls Parent constructor
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Animal {
    constructor(name) { this.name = name; }
 }

 class Dog extends Animal {
    constructor(name, breed) {
        super(name); // MUST call super before accessing 'this'
        this.breed = breed;
    }
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class UIComponent {
    render() { console.log('Rendering basic layout...'); }
 }

 class Sidebar extends UIComponent {
    render() {
        super.render(); // Call parent rendering logic
        console.log('Rendering sidebar icons...'); // Add specific logic
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Accessing `this` before calling `super()` in a constructor (ReferenceError).
 *    - Forgetting `super()` entirely in a child class with a constructor.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Pass all required arguments to `super()`.
 *    - Only use `super.methodName()` if you actually want to reuse the parent logic.
 *
 * ------------------------------------------------------------
 * Summary:
 *    `super` is the bridge to the parent class. In a constructor, 
 *    it's mandatory to call it first. In methods, it's optional 
 *    but useful for augmenting parent behavior.
 * ============================================================
 */
