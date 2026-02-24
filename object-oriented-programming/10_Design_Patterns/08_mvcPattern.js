/**
 * ============================================================
 * Topic: MVC Pattern
 * Folder: 10_Design_Patterns
 * Purpose:
 *    To separate an application into three main logical 
 *    components: the Model, the View, and the Controller.
 *
 * ------------------------------------------------------------
 * Definition:
 *    - Model: Manages data and business logic.
 *    - View: Handles display and UI.
 *    - Controller: Accepts input and converts it into commands 
 *      for the Model or View.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Clear separation of concerns.
 *    - Multiple team members can work on UI vs Logic independently.
 *    - Code is much easier to test.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 class Model { /* data */ }
 class View { /* render UI */ }
 class Controller { /* bridge Model & View */ }


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example
 */

 class TodoModel { constructor() { this.todos = []; } }
 class TodoView { render(data) { console.log('UI: ', data); } }

 class TodoController {
    constructor(m, v) { this.model = m; this.view = v; }
    add(task) { 
        this.model.todos.push(task); 
        this.view.render(this.model.todos);
    }
 }


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // Most web frameworks (Express, Rails, ASP.NET) follow 
 // some variation of MVC to handle web requests and HTML responses.


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Bloated Controllers (putting logic in the controller 
 *      that belongs in the model).
 *    - View accessing the Model directly (breaks separation).
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - "Fat Model, Skinny Controller": Keep business logic in the Model.
 *
 * ------------------------------------------------------------
 * Summary:
 *    MVC is the "Grandfather" of architectural patterns. It's 
 *    the standard way to build user interfaces that are 
 *    clean, organized, and scalable.
 * ============================================================
 */
