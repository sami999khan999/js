/**
 * ============================================================
 * Topic: Singleton Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To ensure a class has only one instance and provides a 
 *    global point of access to it.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A creational pattern that restricts the instantiation of 
 *    a class to one single object.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Global State: Perfect for App Settings, Database pools, or Loggers.
 *    - Resource Management: Prevents multiple connections to the same resource.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Singleton {
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        Singleton.instance = this;
    }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const Database = (function() {
    let instance;
    function create() { return { connected: true }; }
    
    return {
        getInstance: () => instance || (instance = create())
    };
 })();


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 class AppConfig {
    static instance;
    settings = { env: 'prod' };

    constructor() {
        if(AppConfig.instance) return AppConfig.instance;
        AppConfig.instance = this;
    }
 }

 const c1 = new AppConfig();
 const c2 = new AppConfig();
 console.log(c1 === c2); // true


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Overusing singletons (they can make testing hard because of shared state).
 *    - Forgetting that ES6 modules are singletons by default when imported.
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use for truly global resources (Logger, Config).
 *    - Avoid for data that should stay local to components.
 *
 * ------------------------------------------------------------
 * Summary:
 *    A Singleton is a "one-of-a-kind" object. No matter how 
 *    many times you try to create it, you always get the same 
 *    shared instance back.
 * ============================================================
 */
