/**
 * ============================================================
 * Topic: Functional Composition
 * Folder: 11_Composition_and_Mixins
 * Purpose:
 *    To build objects using purely functional approaches, 
 *    often involving "higher-order" functions.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Creating complex objects by passing a "base" object 
 *    through a series of functions that each add one specific 
 *    capability.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Extremely decoupled: capabilities don't even know each other exists.
 *    - Testable: each capability is just a simple function.
 *    - No `this` context issues.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const withAbility = (obj) => ({ ...obj, ability() {} });
 const finalObj = withAbility(baseObj);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const hasName = (name) => (o) => ({ ...o, name });
 const canFart = (o) => ({ ...o, fart: () => console.log('pfft') });

 const person = canFart(hasName('Joe')({}));
 person.fart();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 const pipe = (...fns) => (val) => fns.reduce((acc, fn) => fn(acc), val);

 const createSuperUser = pipe(
    hasName('Admin'),
    (o) => ({ ...o, deleteUser: () => {} }),
    (o) => ({ ...o, editUser: () => {} })
 );

 const admin = createSuperUser({});


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Creating deep object snapshots that use a lot of memory.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use a `pipe` or `compose` utility to manage the flow.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Functional composition is the modern way to avoid the 
 *    pitfalls of traditional OOP. It treats objects as data 
 *    and behavior as pure functions that transform that data.
 * ============================================================
 */
