// Aim: Create a new project (with only an HTML file) that uses JavaScript to change the color of a Heading element.

// Create new folder with HTML file
 //Add a Heading Element with text inside
 // Create a <script></script> tag at the bottom of the page
 // Write the logic to select a heading and change its color



// Aim: Create a new project (with an HTML and JavaScript) that uses JavaScript to change the color 
// of a Heading element on a button click.


// Selects the first "h1" tag in the document
const myHeading = document.querySelector("h1");

// Selects the first <h1> element
const headingOne = document.querySelector("h1");

// Selects the body element
const bodyEl = document.querySelector("body");

// Changes the "headingOne" variable's text content
headingOne.innerText = "Updated Hello World From JavaScript!";

// Changes the "headingTwo" variable's text color
headingTwo.style.color = "#134e4a";

// Change the body's background color, and the text color on click
function updateColors() {
  bodyEl.style.backgroundColor = "#0c4a6e";
  headingOne.style.color = "#f0f9ff";
  headingTwo.style.color = "#7dd3fc";
