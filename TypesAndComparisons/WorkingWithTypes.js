// + is the joing or adding sign. When joing two caribles, we can get different results depending on their types. Join the values and take a look at the difference between using + with string, and with numbers.

console.log("10" + " " + "10"); // 1010
console.log(10 + 10); // 20

// When joing numbers with string, the number will be automatically transformed in to a string. Join the values and take a look at the resulting string.

const result = "10" + " " + 10;
console.log(result); // 1010

// Combine a string and number to display a player's score.
const result2 = "Your score is: " + 69;
console.log(result2); // Your score is: 69

// Adding a number to a string also works when we use a variable like score that stores a number, instead of a numeric value
const score2 = 99;
const result3 = "Your score: " + 99;
console.log(score);
