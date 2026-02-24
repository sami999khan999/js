/**
 * ============================================================
 * Topic: Proxy Object
 * Folder: 09_Advanced_Object_Features
 * Purpose:
 *    To intercept and customize fundamental operations for 
 *    an object (e.g., property lookup, assignment, enumeration).
 *
 * ------------------------------------------------------------
 * Definition:
 *    A Proxy object wraps another object and intercepts 
 *    operations like `get` or `set`, allowing you to inject 
 *    custom logic.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Validation: Check data before it's set on an object.
 *    - Logging/Profiling: Track every time a property is accessed.
 *    - Reactivity: Foundation of modern frameworks like Vue.js.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const proxy = new Proxy(target, {
    get(target, prop) { /* logic */ },
    set(target, prop, value) { /* logic */ }
 });


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const user = { name: 'Sami' };
 const proxyUser = new Proxy(user, {
    get(target, prop) {
        return prop in target ? target[prop] : 'Property Not Found';
    }
 });

 console.log(proxyUser.age); // 'Property Not Found'


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Validation
 const account = new Proxy({ balance: 0 }, {
    set(target, prop, value) {
        if (prop === 'balance' && value < 0) throw new Error('Debt!');
        target[prop] = value;
        return true;
    }
 });


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Not returning `true` in the `set` trap (results in a TypeError in strict mode).
 *    - Creating infinite recursions by trying to access the proxy inside its own trap.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use together with the `Reflect` API for default behavior.
 *    - Keep traps lightweight to avoid performance bottlenecks.
 *
 * ------------------------------------------------------------
 * Summary:
 *    A Proxy is like a "Security Guard" for an object. Every 
 *    single interaction must pass through the proxy traps 
 *    first, giving you ultimate control over how an object 
 *    behaves.
 * ============================================================
 */
