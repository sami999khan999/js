/**
 * ============================================================
 * Topic: Private Class Fields
 * Folder: 06_Encapsulation
 * Purpose:
 *    Language-level support for encapsulation within ES6 Classes.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Class members prefixed with `#` that are strictly 
 *    accessible only within the class declaration.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Formal syntax for something that previously required hacks.
 *    - Prevents name collisions with subclasses.
 *    - Better performance compared to closure-based privacy.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class MyClass {
    #privateField = 'Secret';
    #privateMethod() {}
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class User {
    #id = 1;
    name = '';

    constructor(name) { this.name = name; }

    getId() { return this.#id; }
 }

 const u = new User('Khan');
 console.log(u.getId()); // 1
 // console.log(u.#id); // SyntaxError


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Auth {
    #token = null;

    login(password) {
        if(password === '123') this.#token = 'ABC-XYZ';
    }

    sendRequest() {
        if(!this.#token) return 'Access Denied';
        return 'Data retrieved with: ' + this.#token;
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Adding `#` to variables that don't exist in the class scope.
 *    - Trying to access `#` fields from a subclass (Inheritance DOES NOT permit access).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for internal state that should never be touched by users.
 *    - Define all private fields at the top of the class for readability.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Private fields are the modern standard for encapsulation. 
 *    They provide a hard wall that makes it impossible to 
 *    bypass an object's intended interface.
 * ============================================================
 */
