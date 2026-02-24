/**
 * ============================================================
 * Topic: Mixins
 * Folder: 11_Composition_and_Mixins
 * Purpose:
 *    To add reusable functionality to classes without using 
 *    the inheritance chain.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A Mixin is a class or object that contains methods for 
 *    use by other classes without needing to be the parent 
 *    class of those other classes.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Avoids "Pyramid of Doom" inheritance.
 *    - Allows a class to "inherit" from multiple sources 
 *      (simulating multiple inheritance).
 *    - Promotes horizontal code reuse.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const canEat = { eat: () => console.log('eating') };
 const canWalk = { walk: () => console.log('walking') };

 Object.assign(Person.prototype, canEat, canWalk);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const swimmer = {
    swim() { console.log('Swimming...'); }
 };

 class Human { constructor(name) { this.name = name; } }
 Object.assign(Human.prototype, swimmer);

 const h = new Human('Bob');
 h.swim();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const loggerMixin = {
    log(msg) { console.log(`[LOG]: ${msg}`); }
 };

 class UserService {}
 Object.assign(UserService.prototype, loggerMixin);


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Name collisions: If two mixins have the same method name, one will overwrite the other.
 *    - Hard to track where a method came from in a large codebase.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use descriptive names for mixins.
 *    - Consider Functional Composition (Folder 11/04) for a cleaner approach.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Mixins are a way to "copy-paste" functionality into 
 *    classes. They are the primary tool for sharing features 
 *    between classes that aren't logically related through 
 *    inheritance (e.g., both a User and a Product might need Logging).
 * ============================================================
 */
