/**
 * ============================================================
 * Topic: Dynamic Dispatch
 * Folder: 08_Polymorphism
 * Purpose:
 *    To understand how JavaScript decides which method implementation 
 *    to run at runtime based on the object's type.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Dynamic dispatch is the process of selecting which implementation 
 *    of a polymorphic operation (method or function) to call at runtime.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Essential for making polymorphism work.
 *    - Allows for late binding: the code doesn't know the exact 
 *      instance until it's actually running.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // The engine looks up the prototype chain at the MOMENT of calling
 myObject.someMethod();


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class A { method() { console.log('A'); } }
 class B extends A { method() { console.log('B'); } }

 let instance = new B();
 instance.method(); // Engine finds 'B' implementation first


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // plugin system
 function runJob(plugin) {
    // Dynamic dispatch ensures the correct 'run' is called
    // regardless of what the plugin actually is.
    plugin.run();
 }


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting that JS lookups are slightly slower than 
 *      static dispatch (in languages like C++).
 *    - Thinking a method call is "hardcoded" to a class.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Don't overly worry about performance until it's an issue;  modern engines optimize this heavily.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Dynamic Dispatch is the "Engine" of Polymorphism. It 
 *    happens every time you call a method on an object; 
 *    JS looks at the object's prototype chain to decide 
 *    which code to execute.
 * ============================================================
 */
