/**
 * ============================================================
 * Topic: Private Fields
 * Folder: 04_ES6_Classes
 * Purpose:
 *    To truly hide internal data from the outside world, 
 *    preventing accidental or malicious modification.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Properties prefixed with a `#` (hash) that are only 
 *    accessible from within the class body.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Enforces Encapsulation at the language level.
 *    - prevents "outside" code from breaking the internal state.
 *    - Security: Sensitive data stays internal.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class BankAccount {
    #balance = 0; // Private Field

    deposit(amount) { this.#balance += amount; }
    get balance() { return this.#balance; }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class Secret {
    #key = '12345';

    check(val) { return val === this.#key; }
 }

 const s = new Secret();
 // console.log(s.#key); // ERROR: Private field


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class Database {
    #connectionString;
    
    constructor(conn) {
        this.#connectionString = conn;
    }

    connect() {
        console.log(`Connecting to ${this.#connectionString}...`);
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting the `#` prefix when accessing inside the class.
 *    - Trying to use private fields in old browsers (requires transpilation).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Privatize everything by default, then expose only what's necessary.
 *    - Use private methods (`#method()`) for internal helper logic.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Private fields (`#`) are a massive upgrade to JS OOP. 
 *    They finally provide a built-in way to hide state, 
 *    replacing old hacks like `_underscore` naming conventions.
 * ============================================================
 */
