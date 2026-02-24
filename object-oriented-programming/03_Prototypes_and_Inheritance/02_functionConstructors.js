/**
 * ============================================================
 * Topic: Function Constructors
 * Folder: 03_Prototypes_and_Inheritance
 * Purpose:
 *    The traditional way (pre-ES6) to define blueprints for objects in JS.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A regular function that is intended to be called with the 
 *    `new` keyword to create and initialize an object.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Foundation of old JS libraries (jQuery, etc.).
 *    - Helps understand how the `new` keyword sets up the prototype chain.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function User(name) {
    this.name = name;
 }
 const u1 = new User('Alice');


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function Point(x, y) {
    this.x = x;
    this.y = y;
 }

 const p1 = new Point(10, 20);


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function Button(label) {
    this.label = label;
    this.click = function() {
        console.log(`Button ${this.label} clicked`);
    };
 }

 const loginBtn = new Button('Login');


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Omitting `new` (results in `this` being `window` and no object being returned).
 *    - Defining logic inside the constructor that should be on the prototype.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use PascalCase for the function name.
 *    - Use `instanceof` to check the type of created objects.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Function constructors allow you to create specific types 
 *    of objects. When `new` is used, a link is also created 
 *    between the instance and the `Constructor.prototype` object.
 * ============================================================
 */
