/**
 * ============================================================
 * Topic: The Constructor Method
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To initialize an object's state at the moment it is created.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A special method in a class created for creating and 
 *    initializing an object instance of that class.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Automatically called when `new` is used.
 *    - Only one `constructor` method allowed in a class.
 *    - Perfect place to set up default values and bind properties.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Point {
    constructor(x = 0, y = 0) { // Default values
        this.x = x;
        this.y = y;
    }
 }

 const p1 = new Point(10, 20);
 const p2 = new Point(); // 0, 0


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class HttpRequest {
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method;
        this.timestamp = Date.now();
    }
 }

 const req = new HttpRequest('https://api.example.com');


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Trying to define two constructors (ReferenceError).
 *    - Not using `this.` to assign values to the instance.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Keep it simple; avoid heavy calculations inside.
 *    - Use it primarily for property assignment.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The `constructor` is the entry point of your class. It 
 *    receives the arguments from the `new` call and uses them 
 *    to set up the initial "shape" of the object.
 * ============================================================
 */
