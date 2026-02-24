/**
 * ============================================================
 * Topic: Static Properties
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To store constants or configuration data that belongs 
 *    to the Class itself rather than any instance.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A property defined with the `static` keyword that is 
 *    accessed on the class name rather than on an instance.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Great for storing shared configuration or constants.
 *    - Prevents data redundancy across thousands of instances.
 *    - Perfect for Counters or Caches.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class App {
    static VERSION = '1.0.0';
 }
 console.log(App.VERSION);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class User {
    static totalUsers = 0;

    constructor() {
        User.totalUsers++; // Tracking global state
    }
 }

 new User();
 new User();
 console.log(User.totalUsers); // 2


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Config {
    static API_BASE_URL = 'https://api.myapp.com';
    static TIMEOUT = 5000;
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Accessing static properties via `this` (they require the ClassName).
 *    - Thinking they are inherited and mutable per instance.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for constants (all caps naming convention).
 *    - Use for factory-related counters or shared state.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Static properties are global to the class. They are 
 *    initialized once and shared by all code that has access 
 *    to the Class reference.
 * ============================================================
 */
