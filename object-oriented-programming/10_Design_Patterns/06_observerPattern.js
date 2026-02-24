/**
 * ============================================================
 * Topic: Observer Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To allow objects to "listen" for changes in another 
 *    object and get notified automatically.
 *
 * ------------------------------------------------------------
 * Definition:
 *    A behavioral pattern where a "Subject" maintains a list 
 *    of "Observers" and notifies them of state changes.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Decoupling: The Subject doesn't need to know what the 
 *      Observers do with the notification.
 *    - Core of Event-Driven programming (DOM events, Redux).
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Subject {
    constructor() { this.observers = []; }
    subscribe(o) { this.observers.push(o); }
    notify(data) { this.observers.forEach(o => o.update(data)); }
 }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 const newsAgency = new Subject();

 const subscriber1 = { update: (news) => console.log('S1 got: ' + news) };
 const subscriber2 = { update: (news) => console.log('S2 got: ' + news) };

 newsAgency.subscribe(subscriber1);
 newsAgency.subscribe(subscriber2);
 newsAgency.notify('Big Sale!');


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // A button click handler is a simplified observer pattern.
 // The button (Subject) notifies the listeners (Observers) 
 // when it is clicked.


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Forgetting to "unsubscribe" (leads to memory leaks).
 *    - Creating notification loops (Subject -> Obs -> Subject).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Always provide a way to remove an observer.
 *
 * ------------------------------------------------------------
 * Summary:
 *    The Observer pattern is the "Social Media" of patterns. 
 *    One object "posts" an update, and all its "followers" 
 *    automatically see it in their feed.
 * ============================================================
 */
