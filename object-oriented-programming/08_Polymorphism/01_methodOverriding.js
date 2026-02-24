/**
 * ============================================================
 * Topic: Method Overriding (Polymorphism)
 * Folder: 08_Polymorphism
 * Purpose:
 *    The most common form of polymorphism, allowing a child 
 *    class to provide its own version of a method.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Polymorphism means "many forms". In JS, it refers to 
 *    diverse objects being able to respond to the same method 
 *    call in their own specific way.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Simplifies calling code: You can treat different objects 
 *      the same way.
 *    - Extensibility: You can add new classes without changing 
 *      existing code that uses those classes.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Animal { sound() { console.log('...'); } }
 class Cat extends Animal { sound() { console.log('Meow'); } }
 class Dog extends Animal { sound() { console.log('Woof'); } }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const animals = [new Cat(), new Dog()];
 animals.forEach(a => a.sound()); // Output depends on the object type


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Payment {
    process() { console.log('General payment logic'); }
 }

 class CreditCard extends Payment {
    process() { console.log('Processing via CC gateway...'); }
 }

 class PayPal extends Payment {
    process() { console.log('Redirecting to PayPal...'); }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Not having a common base class (while not required, it makes logic clearer).
 *    - Changing the return type in an override (breaks expectations).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use polymorphism to eliminate long `switch` or `if/else` chains.
 *    - Ensure overridden methods follow the same "contract".
 *
 * ------------------------------------------------------------
 * Summary:
 *    Polymorphism allows you to write one piece of code 
 *    (like a loop) that interacts with many different types 
 *    of objects seamlessly, as long as they all implement 
 *    the expected method.
 * ============================================================
 */
