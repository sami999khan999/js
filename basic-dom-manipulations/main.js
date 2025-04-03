// ============================================================================
// Selecting Elements
// ============================================================================

// Selecting elements by ID
const title = document.getElementById("main-heading");
console.log(title);

// Selecting elements by class name
const countries = document.getElementsByClassName("country");
console.log(countries);

// Selecting elements by tag name
const listItems = document.getElementsByTagName("li");
console.log(listItems);

// Selecting the first element using a CSS selector
const titleSelector = document.querySelector("#main-heading"); // By ID
console.log(titleSelector);

const buttonSelector = document.querySelector("button"); // By tag
console.log(buttonSelector);

const countrySelector = document.querySelector(".country"); // By class
console.log(countrySelector);

// Selecting multiple elements using a CSS selector
const countryList = document.querySelectorAll("li");
console.log(countryList);

// ============================================================================
// Styling Elements
// ============================================================================
title.style.color = "lightgreen";
title.style.backgroundColor = "rgb(232, 243, 215)";
title.style.fontSize = "2rem";

// Apply styles to multiple elements
const ulItems = document.querySelectorAll("ul");
ulItems.forEach((ul, index) => {
  ul.style.color = "green";
  ul.style.marginTop = index === 0 ? "2rem" : "0.5rem";
});
ulItems[ulItems.length - 1].style.marginBottom = "2rem";

// ============================================================================
// Creating and Modifying Elements
// ============================================================================

// Create new elements
const ul = document.querySelector("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");

li1.textContent = "India";
li2.innerText = "Japan";

ul.append(li1, li2); // Add elements to the end of the list
ul.insertAdjacentElement("beforeend", li1); // Specify the position

// Modify existing elements
const firstCountry = document.querySelector("li");
firstCountry.innerText = "BD";
console.log(firstCountry.textContent);

// Set attributes
const h1 = document.querySelector("h1");
h1.setAttribute("class", "main-heading");

li1.setAttribute("class", "country");
li2.setAttribute("class", "country");

// Get and remove attributes
console.log(h1.getAttribute("class"));
h1.removeAttribute("class");

// Work with classList
ul.classList.add("countries");
ul.classList.toggle("countries", true); // Add conditionally
console.log(ul.classList.contains("countries")); // Check if a class exists

// ============================================================================
// Node Traversals
// ============================================================================

console.log(ul.parentElement); // Parent element
console.log(ul.parentNode); // Parent node (can include text nodes)
console.log(ul.childElementCount); // Number of child elements
console.log(ul.childNodes); // All child nodes (elements, text, comments)
console.log(ul.children); // Child elements only
console.log(ul.firstChild); // First child node
console.log(ul.lastChild); // Last child node

const heading = document.querySelector("h1");
console.log(heading.nextSibling); // Next sibling node
console.log(heading.previousSibling); // Previous sibling node
console.log(heading.nextElementSibling); // Next sibling element
console.log(heading.previousElementSibling); // Previous sibling element

// ============================================================================
// Event Handlers
// ============================================================================

// Adding an event handler for a button
const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const ul4 = document.querySelector("ul");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.classList.add("country");
  li.textContent = input.value; // Set the input value as list item text
  ul4.appendChild(li); // Add the new list item to the ul
  input.value = ""; // Clear the input field
});

// ============================================================================
// Working with innerHTML
// ============================================================================

// innerHTML allows us to get or set the HTML content of an element.

const contentDiv = document.querySelector("#content");

// Getting the HTML content of an element
console.log(contentDiv.innerHTML); // Retrieves the HTML content of the element

// Setting the HTML content of an element
contentDiv.innerHTML = "<p>This is a new paragraph added via innerHTML.</p>";

// Add multiple list items with innerHTML
const listContainer = document.querySelector("#list-container");
listContainer.innerHTML = `
  <ul>
    <li>USA</li>
    <li>Canada</li>
    <li>Germany</li>
  </ul>
`;

// Caution: Be careful when using innerHTML, as it can expose your code to XSS (Cross-Site Scripting) attacks if used improperly.
// Use textContent or create elements when dealing with user input to avoid this risk.

const userComment = "<script>alert('You have been hacked!');</script>";
const commentSection = document.querySelector("#comments");

// Setting innerHTML with user input can be dangerous (e.g., XSS attack).
commentSection.innerHTML = userComment; // Avoid this!
