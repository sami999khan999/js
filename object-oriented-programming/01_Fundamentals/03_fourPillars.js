/**
 * ============================================================
 * Topic: The Four Pillars of OOP
 * Folder: 01_Fundamentals
 * Purpose:
 *    Core principles that define true object-oriented design and 
 *    enable clean, scalable architectures.
 *
 * ------------------------------------------------------------
 * Definition:
 *    The four fundamental principles of OOP: Encapsulation, Abstraction,
 *    Inheritance, and Polymorphism.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Encapsulation reduces complexity + increases reusability.
 *    - Abstraction hides unnecessary details.
 *    - Inheritance eliminates redundant code.
 *    - Polymorphism allows for dynamic and flexible code.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Encapsulation: Grouping property + methods
 // Abstraction: Hiding implementation details
 // Inheritance: Reusing code from other classes
 // Polymorphism: Overriding methods in subclasses


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example (High Level)
 */

 class Animal {
    move() { console.log('Moving...'); } // Abstraction (we don't care how yet)
 }

 class Dog extends Animal { // Inheritance
    move() { console.log('Running on 4 legs'); } // Polymorphism
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // A Remote Control (Abstraction)
 // You press "Power", you don't care about the circuit board logic.
 class Remote {
    #circuitry = "complex wires"; // Encapsulation (Private)
    pressPower() { console.log('Turning TV on...'); } // Abstraction
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Overusing inheritance when composition would be better.
 *    - Breaking encapsulation by making everything public.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Favor composition over inheritance.
 *    - Keep interfaces (Abstraction) simple and stable.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Four Pillars (E.A.I.P) are the bedrock of OOP. They help 
 *    developers build systems that are easy to understand, maintain, 
 *    and extend over time.
 * ============================================================
 */
