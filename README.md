# ArrayJoiner

A simple utility to join elements of an array with a custom separator.

## Installation

You can install this package using npm:

```bash
npm install array-joiner
```

## Usage

Once you have installed the package, you can require it in your JavaScript file and use the `joinArray` function to join elements of an array with a custom separator.

### Example

```javascript
// Import the package
const joinArray = require('array-joiner');

// Example with an array of numbers
const numbers = [1, 2, 3, 4, 5];
const result1 = joinArray(numbers, ', '); 
console.log(result1);  // Output: "1, 2, 3, 4, 5"

// Example with an array of strings
const fruits = ['apple', 'banana', 'cherry'];
const result2 = joinArray(fruits, ' | '); 
console.log(result2);  // Output: "apple | banana | cherry"

// Example with a custom separator
const words = ['hello', 'world'];
const result3 = joinArray(words, '-'); 
console.log(result3);  // Output: "hello-world"
```

