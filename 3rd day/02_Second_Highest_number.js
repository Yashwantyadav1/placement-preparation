let numbers = [5, 9, 1, 3, 7, 9];
let uniqueNumbers = [...new Set(numbers)];
uniqueNumbers.sort((a, b) => b - a);
let secondLargest = uniqueNumbers[1];

console.log("Second largest number is:", secondLargest);
