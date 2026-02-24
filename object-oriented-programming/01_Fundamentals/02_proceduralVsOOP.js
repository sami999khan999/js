/**
 * ============================================================
 * Topic: Procedural vs OOP
 * Folder: 01_Fundamentals
 * Purpose:
 *    To highlight the structural differences between top-down execution
 *    and object-based modularity.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Procedural Programming follows a sequence of steps or functions, 
 *    while OOP organizes code around data objects and their interactions.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Procedural is great for simple scripts/logic.
 *    - OOP is better for complex systems where state management is key.
 *    - Understanding the shift helps in choosing the right tool for the job.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Procedural: Data and functions are separate
 let salary = 50000;
 let bonus = 2000;
 function getWage(s, b) { return s + b; }

 // OOP: Data and functions are grouped
 const employee = {
    salary: 50000,
    bonus: 2000,
    getWage() { return this.salary + this.bonus; }
 };


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 // Procedural approach
 const area = (w, h) => w * h;
 console.log(area(10, 5));

 // OOP approach
 class Rectangle {
    constructor(w, h) { this.w = w; this.h = h; }
    getArea() { return this.w * this.h; }
 }
 const rect = new Rectangle(10, 5);
 console.log(rect.getArea());


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Banking System (Procedural - Hard to manage state)
 let balance = 1000;
 function withdraw(amount) { balance -= amount; }

 // Banking System (OOP - Encapsulated state)
 class Account {
    constructor(initial) { this.balance = initial; }
    withdraw(amount) { this.balance -= amount; }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Using OOP for everything (even a simple one-line utility).
 *    - Having "God Functions" in procedural code that do too much.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use Procedural for simple, stateless logic.
 *    - Use OOP when you need to maintain state and behavior together.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Procedural programming is function-centric and linear. OOP is 
 *    object-centric and modular. OOP focuses on 'WHO' (the object) 
 *    does the action, whereas Procedural focuses on 'HOW' (the steps).
 * ============================================================
 */
