/**
 * ============================================================
 * Topic: Composition vs Inheritance
 * Folder: 11_Composition_and_Mixins
 * Purpose:
 *    To understand the trade-offs between "is-a" (Inheritance) 
 *    and "has-a" (Composition) relationships.
 *
 * ------------------------------------------------------------
 * Definition:
 *    Inheritance: Structuring code by what objects ARE.
 *    Composition: Structuring code by what objects can DO.
 *
 * ------------------------------------------------------------
 * Why It Matters:
 *    - Inheritance is rigid; changes in parent affect all children.
 *    - Composition is flexible; you can swap "capabilities" easily.
 *    - "Favor composition over inheritance" is a key principle in modern OOP.
 *
 * ------------------------------------------------------------
 * Syntax:
 */

 // Inheritance: A Penguin IS AN Animal
 class Penguin extends Animal {}

 // Composition: A Penguin HAS THE ABILITY to Swim
 const p = { ...data, ...swimAbility };


/**
 * ------------------------------------------------------------
 * Example 1: Basic Example (Inheritance Problem)
 */

 // If we have Animal -> Mammal -> Dog
 // What if we want a 'FlyingDog'? Inheritance makes this hard.
 // With Composition, we just add 'canFly' to 'Dog'.


/**
 * ------------------------------------------------------------
 * Example 2: Real-World Example
 */

 // A Player in a game might be a Warrior, Mage, or both.
 // Inheritance: Multi-player classes are nightmare-ish.
 // Composition: 
 const warrior = { attack: () => {} };
 const mage = { cast: () => {} };
 const battleMage = { ...warrior, ...mage };


/**
 * ------------------------------------------------------------
 * Common Mistakes:
 *    - Using inheritance for everything just because it's "traditional OOP".
 *
 * ------------------------------------------------------------
 * Best Practices:
 *    - Use inheritance for stable, clear hierarchies.
 *    - Use composition for everything else, especially features 
 *      that might shared across unrelated classes.
 *
 * ------------------------------------------------------------
 * Summary:
 *    Inheritance is like a family tree (fixed). Composition is 
 *    like Lego blocks (flexible). For modern JS development, 
 *    Lego blocks (Composition) are usually more maintainable.
 * ============================================================
 */
