/**
 * ============================================================
 * Topic: Method Overriding
 * Folder: 05_Inheritance_ES6
 * Purpose:
 *    To allow a child class to provide a specific implementation 
 *     of a method that is already provided by its parent class.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Redefining a method in a child class that has the same 
 *    name as a method in the parent class.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Enables Polymorphism (different objects responding to same method call).
 *    - Allows subclasses to customize parent behavior.
 *    - Essential for specialized classes (e.g., Bird fly() vs Penguin fly()).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Parent {
    save() { console.log('Saving to DB...'); }
 }

 class Child extends Parent {
    save() { console.log('Saving to Cloud...'); } // Method Overridden
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Shape {
    draw() { console.log('Drawing a shape'); }
 }

 class Circle extends Shape {
    draw() { console.log('Drawing a circle'); }
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Notification {
    send(msg) { console.log('Sending: ' + msg); }
 }

 class SMSNotification extends Notification {
    send(msg) {
        console.log('Validating phone number...');
        console.log('Sending SMS: ' + msg);
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Not overriding correctly (typo in method name).
 *    - Forgetting to call `super.method()` if you only wanted to add logic, not replace it.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Keep the method signature (arguments) the same as the parent's.
 *    - Document that the method is an override for clarity.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Method overriding allows child classes to be more 
 *    specific. When called on an instance, JS will always 
 *    use the implementation lowest in the inheritance chain.
 * ============================================================
 */
