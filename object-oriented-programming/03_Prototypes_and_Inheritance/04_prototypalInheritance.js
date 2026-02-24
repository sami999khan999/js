/**
 * ============================================================
 * Topic: Prototypal Inheritance
 * Folder: 03_Prototypes_and_Inheritance
 * Purpose:
 *    To create a parent-child relationship between two different 
 *    object types using prototypes.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Linking a child constructor's prototype to a parent 
 *    constructor's prototype, allowing the child to inherit 
 *    the parent's behaviors.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Promotes code reuse (DRY - Don't Repeat Yourself).
 *    - Allows building hierarchical models like Animal -> Mammal -> Dog.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Shape() {}
 function Circle() {}

 // Link Prototypes
 Circle.prototype = Object.create(Shape.prototype);
 // Reset Constructor
 Circle.prototype.constructor = Circle;


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function Parent() {}
 Parent.prototype.sayHi = () => console.log('Hi');

 function Child() {}
 Child.prototype = Object.create(Parent.prototype);
 Child.prototype.constructor = Child;

 const obj = new Child();
 obj.sayHi(); // Works!


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function Beverage(temp) { this.temp = temp; }
 Beverage.prototype.drink = function() { console.log('Drinking...'); };

 function Coffee() { Beverage.call(this, 'hot'); } // Inherit properties
 Coffee.prototype = Object.create(Beverage.prototype); // Inherit methods
 Coffee.prototype.constructor = Coffee;


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting to reset the `constructor` property after linking prototypes.
 *    - Direct assignment `Child.prototype = Parent.prototype` (this links them, but changes to Child also change Parent).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use `Object.create()` to create the prototype link.
 *    - Use `.call()` or `.apply()` in the child constructor to inherit parent properties.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Prototypal inheritance is the process of linking one 
 *    prototype object to another. This establishes the chain 
 *    that JS uses to look up methods from "ancestors".
 * ============================================================
 */
