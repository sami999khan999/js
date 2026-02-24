/**
 * ============================================================
 * Topic: Module Encapsulation
 * Folder: 13_OOP_with_Modules
 * Purpose:
 *    To demonstrate how modules provide a natural boundary 
 *    for encapsulation.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Variables and functions defined in a module are NOT 
 *    accessible unless they are explicitly exported.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Ultimate privacy: Anything not exported is truly unreachable.
 *    - Keeps the public surface area of your classes small.
 *    - Easier to refactor internal module logic.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const internalConfig = {}; // Secret!
 export class App {
    run() { console.log(internalConfig); }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 // Secret.js
 function validate() { return true; } // Internal helper
 export function process() { if(validate()) console.log('OK'); }

 // App.js
 import { process } from './Secret.js';
 process();
 // validate(); // ERROR: Not exported


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // A database module where the connection details are hidden 
 // in the module scope, and only the 'Query' class is exported.


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Exporting too much (exposing helpers that users don't need).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Export only what is necessary.
 *    - Put internal utility functions at the bottom of the file (unexported).
 *
 * ------------------------------------------------------------
 * Summary:
 *    Modules are a "box". You decide what to put 
 *    in the window (export) and what to keep in the back 
 *    room (unexported scope). This is one of the strongest 
 *    forms of encapsulation in JS.
 * ============================================================
 */
