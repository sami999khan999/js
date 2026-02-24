/**
 * ============================================================
 * Topic: Factory Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To create objects without exposing the instantiation 
 *    logic and to point to a common interface for newly 
 *    created objects.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A creational pattern that uses factory methods to deal 
 *    with the problem of creating objects without having to 
 *    specify the exact class of the object that will be created.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Decoupling: Calling code doesn't need to know about 
 *      the specific classes.
 *    - Cleanliness: Centralizes the "choice" of which object to create.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Factory {
    create(type) {
        if (type === 'A') return new ProductA();
        if (type === 'B') return new ProductB();
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Developer { constructor() { this.type = 'Dev'; } }
 class Tester { constructor() { this.type = 'Test'; } }

 class EmployeeFactory {
    static create(role) {
        return role === 'dev' ? new Developer() : new Tester();
    }
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // A Button factory for multiple platforms
 class UIContext {
    static getButton(os) {
        if(os === 'iOS') return new AppleButton();
        if(os === 'Android') return new AndroidButton();
        return new WebButton();
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Over-using for simple objects (if you only have one type, you don't need a factory).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use when the "type" of object is decided at runtime.
 *    - Use to return objects that share the same methods.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Factory pattern is like a "vending machine" for 
 *    objects. You tell it what you want (via a string or 
 *    condition), and it handles the details of which 
 *    class to instantiate and return.
 * ============================================================
 */
