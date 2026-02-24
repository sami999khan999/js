/**
 * ============================================================
 * Topic: Data Hiding (Concepts)
 * Folder: 06_Encapsulation
 * Purpose:
 *    To protect the integrity of data by preventing direct 
 *    modification from outside the object.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Encapsulation is the bundling of data (properties) and 
 *    the methods that operate on that data. Data hiding is 
 *    the mechanism of restricting access to those properties.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Predictability: State can only change through known paths (methods).
 *    - Security: Keeps sensitive logic internal.
 *    - Maintainability: Internal implementation can change without breaking external code.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Conceptual: hiding internal state
 class Person {
    constructor(name) {
        let _name = name; // Private local variable
        this.getName = () => _name;
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 function createAccount(initial) {
    let balance = initial; // Hidden
    return {
        checkBalance: () => console.log(balance),
        deposit: (amt) => balance += amt
    };
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class GameCharacter {
    constructor() {
        let health = 100; // Cannot be accessed directly
        this.hit = (dmg) => {
            health -= dmg;
            if (health < 0) console.log('Dead');
        };
    }
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Confusing "hiding" with "secret" (JS code is still readable in browser).
 *    - Using `_` prefix and assuming it's truly private (it's not).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use private class fields (`#`) for modern code.
 *    - Hide detail, expose behavior.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Data hiding ensures that an object controls its own state. 
 *    Instead of letting anyone change a value, we force them 
 *    to go through a method that can validate and process 
 *    the change safely.
 * ============================================================
 */
