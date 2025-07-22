# Fibonacci Generator

This is a simple web application that generates Fibonacci numbers. Users can input a number, and the application will display the Fibonacci sequence up to that number.

## Features

- Generates Fibonacci numbers based on user input.
- Displays numbers in a horizontally scrollable container.
- Numbers are displayed in reverse order (largest first).
- Click on a number to expand it and view its full value.
- Horizontal scrolling with mouse wheel.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Use

1. Open `index.html` in your web browser.
2. Enter a number in the input field.
3. Click the "Calculate" button or press Enter.
4. The Fibonacci sequence will be displayed.
5. Use your mouse wheel to scroll horizontally through the numbers.
6. Click on any number to see its full value if it's truncated.

## Project Structure

- `index.html`: The main HTML file that structures the web page.
- `style.css`: Contains the CSS rules for styling the application.
- `script.js`: Implements the Fibonacci calculation logic and handles user interactions.

## Styling Details

- **Body:** Full viewport height, light background color, flex column layout.
- **Header (h1):** "Fibonacci" title, centered, Courier New font.
- **Scroll Container:** Horizontal scrolling, flexible display for numbers, custom scrollbar styling for Webkit and Firefox.
- **Number Divs:** Individual number display boxes, styled with borders, rounded corners, centered text, and hover effects. Includes expand/collapse functionality on click for large numbers.
- **Input Field:** Styled for user input, centered placeholder text.
- **Button:** "Calculate" button with hover effects.

## Development Notes

- The Fibonacci sequence is calculated using `BigInt` to handle large numbers without precision loss.
- The `render` function dynamically creates and displays the number divs.
- Event listeners are set up for button clicks and 'Enter' key presses in the input field.
- Smooth horizontal scrolling is implemented using `requestAnimationFrame` for animation.

## Author
Nakib Noor