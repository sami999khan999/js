/**
 * ============================================================
 * Topic: Decorator Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To dynamically add extra functionality to an object at 
 *    runtime without modifying its original source code.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A structural design pattern that wraps an existing object 
 *    to extend its behavior by "decorating" it with new features.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Follows the Open/Closed Principle.
 *    - Prevents "class explosion" (too many subclasses).
 *    - Behavior can be added or removed dynamically.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 function Coffee() {
    this.cost = function() { return 5; };
 }

 // Decorator
 function withMilk(coffee) {
    const cost = coffee.cost();
    coffee.cost = function() { return cost + 2; };
    return coffee;
 }

/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function SimpleCoffee() {
    this.cost = () => 10;
 }

 function withSugar(coffee) {
    const baseCost = coffee.cost();
    coffee.cost = () => baseCost + 1;
    return coffee;
 }

 let myCoffee = new SimpleCoffee();
 myCoffee = withSugar(myCoffee); 
 // costs 11

/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class BasicUser {
    constructor(name) {
        this.name = name;
        this.permissions = ['read'];
    }
 }

 // Admin Decorator
 function makeAdmin(user) {
    user.permissions.push('write', 'delete');
    user.isAdmin = true;
    return user;
 }

 const user = new BasicUser("Alice");
 const adminUser = makeAdmin(user);

/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Over-decorating (creating too many layers of complexity).
 *    - Not maintaining the original object interface.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use when subclassing would be unwieldy.
 *    - Ensure decorators have 1 clear responsibility.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Decorator pattern is about wrapping objects to give 
 *    them more powers. It’s a powerful alternative to 
 *    inheritance for adding optional features.
 * ============================================================
 */
