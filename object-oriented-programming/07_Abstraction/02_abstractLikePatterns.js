/**
 * ============================================================
 * Topic: Abstract-like Patterns
 * Folder: 07_Abstraction
 * Purpose:
 *    To simulate Abstract Classes (classes that cannot be 
 *    instantiated) in JavaScript.
 *
 * ------------------------------------------------------------
 * Definition:
 *    An abstract class is a blueprint for other classes. In JS, 
 *    we simulate this by throwing errors if someone tries to 
 *    directly create an instance of the "Parent" class.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Ensures that certain shared logic is only used via a specific child.
 *    - Mandates that subclasses implement specific methods.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class AbstractClass {
    constructor() {
        if (this.constructor === AbstractClass) {
            throw new Error('Cannot instantiate abstract class');
        }
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Shape {
    constructor() {
        if (this.constructor === Shape) throw new Error('Abstract!');
    }
    draw() { throw new Error('Method must be implemented'); }
 }

 class Circle extends Shape {
    draw() { console.log('Circle drawn'); }
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class BaseService {
    constructor() {
        if(new.target === BaseService) throw new Error('BaseService is abstract');
    }
    execute() {
        throw new Error('Execute logic missing in subclass');
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Thinking JS has a native `abstract` keyword (it doesn't).
 *    - Forgetting to throw an error in the "abstract" methods themselves.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use `new.target` for a cleaner abstraction check in the constructor.
 *    - Clearly label your abstract classes in comments.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Since JS doesn't have an `abstract` keyword, we use 
 *    runtime checks to prevent base class instantiation and 
 *    ensure that subclasses fulfill their "contract" by 
 *    implementing required methods.
 * ============================================================
 */
