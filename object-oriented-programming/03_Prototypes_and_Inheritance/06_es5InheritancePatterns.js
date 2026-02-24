/**
 * ============================================================
 * Topic: ES5 Inheritance Patterns
 * Folder: 03_Prototypes_and_Inheritance
 * Purpose:
 *    To combine Property Inheritance and Method Inheritance 
 *    using pure ES5 syntax (The "Pseudo-classical" pattern).
 *
 * ------------------------------------------------------------
 * Definition:
 *    The combination of using `Parent.call(this)` inside the child 
 *    constructor and `Object.create(Parent.prototype)` to link methods.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Absolute core of how professional JS was written for decades.
 *    - Essential for understanding how modern transpilers (like Babel) 
 *      convert `class` syntax into ES5.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Parent(name) { this.name = name; }
 Parent.prototype.greet = function() { console.log('Hi ' + this.name); };

 function Child(name, age) {
    Parent.call(this, name); // 1. Inherit Properties
    this.age = age;
 }
 // 2. Inherit Methods
 Child.prototype = Object.create(Parent.prototype);
 // 3. Fix Constructor
 Child.prototype.constructor = Child;


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function Shape(color) { this.color = color; }
 Shape.prototype.duplicate = function() { console.log('Duplicate'); };

 function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
 }
 Circle.prototype = Object.create(Shape.prototype);
 Circle.prototype.constructor = Circle;


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function Employee(name) { this.name = name; }
 Employee.prototype.work = function() { console.log(this.name + ' is working'); };

 function Manager(name, dept) {
    Employee.call(this, name);
    this.dept = dept;
 }
 Manager.prototype = Object.create(Employee.prototype);
 Manager.prototype.constructor = Manager;
 Manager.prototype.plan = function() { console.log('Planning...'); };


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting `Shape.call(this)` (Child objects won't get parent properties).
 *    - Using `new Shape()` to set the prototype (calls the constructor unnecessarily).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Encapsulate the inheritance logic in a helper function like `extend(Child, Parent)`.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The ES5 inheritance pattern is a two-step process: 
 *    "Call" the parent constructor to get the data, and 
 *     "Link" the parent prototype to get the methods.
 * ============================================================
 */
