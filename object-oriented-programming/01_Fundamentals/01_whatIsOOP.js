/**
 * ============================================================
 * Topic: What is OOP?
 * Folder: 01_Fundamentals
 * Purpose:
 *    To provide a high-level paradigm for organizing code into reusable,
 *    relatable units that model real-world entities.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Object-Oriented Programming (OOP) is a programming paradigm based on the 
 *    concept of "objects", which can contain data (properties) and code (methods).
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Modular code: Easier to manage large-scale applications.
 *    - Reusability: Code can be reused across different parts of the app.
 *    - Maintenance: Updating logic in one place reflects everywhere the object is used.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // In JS, OOP is often implemented using Class syntax (ES6+)
 class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log(`${this.make} ${this.model} is starting...`);
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const myCar = new Car('Tesla', 'Model 3');
 myCar.start();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    login() {
        console.log(`${this.username} has logged in.`);
    }
 }

 const admin = new User('admin_king', 'admin@example.com');
 admin.login();


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Thinking OOP is the only way (functional is also powerful).
 *    - Over-engineering simple tasks with deep class hierarchies.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Keep classes focused on a single responsibility (SRP).
 *    - Use meaningful names for classes and methods.
 *
 * ------------------------------------------------------------
 * Summary:
 *    OOP is a way of writing code that focuses on "Objects" rather than just
 *    "Functions". It helps in modeling complex real-world systems by 
 *    grouping related data and behaviors together.
 * ============================================================
 */
