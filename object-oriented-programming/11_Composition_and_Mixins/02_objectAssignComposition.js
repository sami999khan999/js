/**
 * ============================================================
 * Topic: Object.assign() Composition
 * Folder: 11_Composition_and_Mixins
 * Purpose:
 *    To build complex objects by merging multiple source objects 
 *    into a single target object.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A static method that copies all enumerable own properties 
 *    from one or more source objects to a target object.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Simplest way to implement object composition.
 *    - Preferred over creating deep inheritance hierarchies.
 *    - Foundation for "Factory Function" based OOP.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 const combined = Object.assign({}, obj1, obj2);


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const defaults = { theme: 'light', size: 10 };
 const userSettings = { size: 12 };

 const finalConfig = Object.assign({}, defaults, userSettings);


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 function createRobot(name) {
    const robot = { name };
    const canFly = { fly: () => console.log('Flying') };
    const canTalk = { say: (m) => console.log(m) };

    return Object.assign(robot, canFly, canTalk);
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting that `Object.assign` is a "shallow" copy.
 *    - Modifying the first argument unintentionally (always pass `{}` as the first arg if you want a new object).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use it for simple composition and shallow merging.
 *
 * ------------------------------------------------------------
 * Summary:
 *    `Object.assign` is the workhorse of composition. It allows 
 *    you to "assemble" an object from various pieces, providing 
 *    a flat and flexible way to share logic across different 
 *    parts of your app.
 * ============================================================
 */
