/**
 * ============================================================
 * Topic: Strategy Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To define a family of algorithms, encapsulate each one, 
 *    and make them interchangeable.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A behavioral pattern that turns a set of behaviors into 
 *    objects and allows them to be swapped at runtime.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Avoids conditional logic (`if/else` for different behaviors).
 *    - Open/Closed Principle: Add new strategies without 
 *      changing the main class.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Context {
    setStrategy(s) { this.strategy = s; }
    run() { this.strategy.execute(); }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const Fedex = { calculate: (p) => p.weight * 2 };
 const UPS = { calculate: (p) => p.weight * 1.5 };

 function Shipping(strategy) {
    this.strategy = strategy;
    this.calc = (p) => this.strategy.calculate(p);
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Authentication Strategies:
 // - Authenticate with Google
 // - Authenticate with Email
 // - Authenticate with JWT
 // The application chooses which 'Strategy' object to use.


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Using it when you only have one or two behaviors.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Ensure all strategy objects have the exact same method signatures.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Strategy pattern is about "Swapping Tools". 
 *    Instead of having one giant function that does 10 
 *    things, you have 10 small objects, and you pick the 
 *    one you need for the current situation.
 * ============================================================
 */
