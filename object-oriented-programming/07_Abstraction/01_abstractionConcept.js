/**
 * ============================================================
 * Topic: Abstraction Concept
 * Folder: 07_Abstraction
 * Purpose:
 *    To reduce complexity by hiding unnecessary implementation
 *    details and exposing only the essential features of an object.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Abstraction is the process of filtering out the details
 *    of how something works and focusing on what it does.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Reduces the impact of change (if internal logic changes,
 *      the interface stays the same).
 *    - Makes the system easier to understand for users.
 *    - Protects the object's integrity by limiting how it is used.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

// High-level interface
class CoffeeMachine {
  makeCoffee() {
    // 1. Boil water
    // 2. Grind beans
    // 3. Filter
    console.log("Coffee is ready!");
  }
}

/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

class AlarmClock {
  #internalTimer;

  setAlarm(time) {
    this.#validateTime(time);
    this.#internalTimer = time;
  }

  #validateTime(t) {
    /* hidden detail */
  } // Helper hidden from user
}

/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

// Searching on Google
// You enter a text (Interface).
// You don't know about the thousands of servers, algorithms,
// and databases involved (Abstraction).

/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Exposing implementation details (e.g., exposing the raw DB connection instead of a `save` method).
 *    - Abstracting too early (adding complexity before it's needed).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Focus on the "What" not the "How".
 *    - Keep the public API small and stable.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Abstraction is about creating a "black box". The user
 *    provides input and gets output without needing to see the
 *    gears turning inside. This is essential for managing
 *    complexity in large apps.
 * ============================================================
 */
