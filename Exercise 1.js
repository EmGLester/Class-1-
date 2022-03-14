// Aim: Create a new project (with only an HTML file) that uses JavaScript to change the color of a Heading element.

// Create new folder with HTML file
 //Add a Heading Element with text inside
 // Create a <script></script> tag at the bottom of the page
 // Write the logic to select a heading and change its color



// Aim: Create a new project (with an HTML and JavaScript) that uses JavaScript to change the color 
// of a Heading element on a button click.


// Change the body's background color, and the text color on click

const headingOne = document.querySelector("h1");
const bodyEl = document.querySelector("body");


function Updatecolor () {
    bodyEl.style.backgroundColor = "#0c4a6e";
    headingOne.style.color = "#f0f9ff";  
}

