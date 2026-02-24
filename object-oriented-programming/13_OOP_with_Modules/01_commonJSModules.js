/**
 * ============================================================
 * Topic: CommonJS Modules (Node.js)
 * Folder: 13_OOP_with_Modules
 * Purpose:
 *    To organize OOP code into separate files in a Node.js 
 *    environment.
 *
 * ------------------------------------------------------------
 * Definition:
 *    The traditional module system used by Node.js, where 
 *    `require()` and `module.exports` are used.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Enables multi-file project structures.
 *    - Provides file-level scope (no global variable leaks).
 *    - Standard for millions of npm packages.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Exporting
 module.exports = class User {};

 // Importing
 const User = require('./User');


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 // Logger.js
 class Logger { log(m) { console.log(m); } }
 module.exports = new Logger(); // Exporting an instance (Singleton)

 // App.js
 const logger = require('./Logger');
 logger.log('Hi');


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Models/User.js
 function User(name) { this.name = name; }
 module.exports = { User }; // Exported as part of an object


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting that `require` is synchronous (unlike ES modules).
 *    - Circular dependencies (File A requires B, which requires A).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - One class per file.
 *    - Name the file the same as the class (e.g., `User.js`).
 *
 * ------------------------------------------------------------
 * Summary:
 *    CommonJS is the foundation of Node.js modularity. It 
 *    allows you to build your OOP structures in separate files 
 *    and pull them together as needed.
 * ============================================================
 */
