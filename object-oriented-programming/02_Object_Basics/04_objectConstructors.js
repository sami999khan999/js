/**
 * ============================================================
 * Topic: Object Constructors
 * Folder: 02_Object_Basics
 * Purpose:
 *    A blueprint for creating multiple objects of the same type.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A function used with the `new` operator to initialize a 
 *    newly created object with properties and methods.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Avoids code duplication when creating many similar objects.
 *    - Establishes a "type" or "class" of object.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
 }

 const c1 = new Circle(1);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function User(name, age) {
    this.name = name;
    this.age = age;
 }

 const user1 = new User('Bob', 25);
 const user2 = new User('Alice', 30);


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function Product(name, price) {
    this.name = name;
    this.price = price;
    this.getDetails = function() {
        return `${this.name} costs $${this.price}`;
    };
 }

 const laptop = new Product('MacBook', 1500);
 console.log(laptop.getDetails());


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting the `new` keyword (which makes `this` global).
 *    - Defining methods inside the constructor (inefficient; better on prototype).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Capitalize constructor names (PascalCase).
 *    - Use `new` to instantiate.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Constructors are functions that "construct" objects. When 
 *    called with `new`, an empty object is created, `this` is 
 *    bound to it, and the object is returned automatically.
 * ============================================================
 */
