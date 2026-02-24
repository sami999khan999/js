/**
 * ============================================================
 * Topic: ES Modules (ESM)
 * Folder: 13_OOP_with_Modules
 * Purpose:
 *    The modern, official standard for modules in JavaScript (both 
 *    browser and Node.js).
 *
 * ------------------------------------------------------------
 * Definition:
 *    Uses the `import` and `export` keywords to share code. 
 *    It is asynchronous and more optimized than CommonJS.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Static analysis: tools can optimize the code better (Tree shaking).
 *    - Browser support: Works directly in modern browsers.
 *    - Modern Standard: The future of JS development.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // User.js: export class User {}
 // App.js: import { User } from './User.js';


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 // Exporting default
 export default class Calculator { add(a, b) { return a+b; } }

 // Importing default
 import Calc from './Calculator.js';


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // named exports are better for libraries with multiple classes
 export class Button {}
 export class Input {}

 import { Button, Input } from './Components.js';


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting the `.js` extension in the import path (required in browsers and some Node settings).
 *    - Trying to use `import` in a script tag without `type="module"`.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Prefer named exports over default exports for better discoverability.
 *
 * ------------------------------------------------------------
 * Summary:
 *    ES Modules are the new way to write modular OOP. They 
 *    are clean, fast, and supported everywhere. They offer 
 *    better tooling support compared to any other module system.
 * ============================================================
 */
