# JavaScript Exercise: Calculate Triangle Area

This is a simple JavaScript exercise where we calculate the area of a triangle with sides of lengths 5, 6, and 7.

## Project Structure

- **index.html**: The main HTML file that sets up the structure of the webpage.
- **script.js**: The JavaScript file that contains the logic for calculating the triangle area.

## HTML Structure

The `index.html` file follows a standard HTML5 structure. Notable elements:

- `<!DOCTYPE html>`: Specifies the document type and version.
- `<html lang="en">`: Declares the document language as English.
- `<head>`: Contains metadata such as charset, viewport settings, and the title.
- `<body>`: Holds the content of the webpage.

## JavaScript Logic

The `script.js` file contains the following logic:

### Variable Declarations

- `output`: A constant variable referencing the HTML element with the id "output."
- `side1`, `side2`, `side3`: Constants representing the lengths of the triangle sides.

### Functions

1. **`calculateSemiPerimeter(a, b, c)`**: Calculates and returns the semi-perimeter of the triangle.

2. **`calculateTriangleArea(a, b, c)`**: Utilizes `calculateSemiPerimeter` to calculate and return the area of the triangle using Heron's formula.

3. **`displayTriangleArea()`**: Populates the HTML element with the id "output" with the calculated triangle area.

### Execution

The `displayTriangleArea()` function is called to display the calculated area on the webpage.

## Running the Project

To see the result, open the `index.html` file in a web browser. The calculated triangle area will be displayed on the webpage.

Feel free to explore and modify the code for learning purposes!
