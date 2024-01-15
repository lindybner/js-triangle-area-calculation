/* 

JavaScript Exercise: Calculate Triangle Area
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

*/

// Variable declarations
const output = document.querySelector("#output");
const side1 = 5;
const side2 = 6;
const side3 = 7;

// Function to calculate semi-perimeter
function calculateSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

// Function to calculate triangle area using Heron's formula
function calculateTriangleArea(a, b, c) {
  const s = calculateSemiPerimeter(a, b, c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Function to display the calculated area
function displayTriangleArea() {
  output.innerHTML = calculateTriangleArea(side1, side2, side3);
}

// Call the function to display the result
displayTriangleArea();
