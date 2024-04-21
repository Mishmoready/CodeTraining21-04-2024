// With logical operators, we can connect two or more conditions to decide a result. Turn on the light bulb by connecting both the switch and battery.

// A logical operator connects the two conditions for the battery and switch to decide if the bulb must be turned on or off.

// The AND operator && returns true only if all the conditions are true
let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn); // added &&
console.log("====================================");

// The && operator will return false if one or more conditions are false. In the code, assign false to the isSwitchOn variable.
let isBatteryReallyOn = true;
let isSwitchReallyOn = false;
console.log(isBatteryReallyOn && isSwitchReallyOn);

// When operands and operators compute a boolean value together, it forms a logical expression, like isBatteryReallyReallyOn && isSwitchReallyReallyOn
let isBatteryReallyReallyOn = false;
let isSwitchReallyReallyOn = false;
console.log(isBatteryReallyReallyOn && isSwitchReallyReallyOn);

// You can also store the result of a logical expression in a variable.
let isBatteryReallyReallyReallyOn = false;
let isSwitchReallyReallyReallyOn = false;
let reallyResult =
  isBatteryReallyReallyReallyOn && isSwitchReallyReallyReallyOn;
console.log(reallyResult);

//What does this code print in the console?
let condition1 = false;
let condition2 = true;
let reallyReallyResult = condition1 && condition2;
console.log(reallyReallyResult);

// What does this code display in the console for the result variable? true or false? Go through the code step by step to figure it out.
let cost = 50;
let sellPrice = 60;
const profit = sellPrice - cost;
console.log(profit);
const resultReally = cost < sellPrice && profit > 0;
console.log("result: " + resultReally);

// Check if the user can send an e-mail. For that, the recipient should be valid and the subject should be filled.

let isRecipientValid = true;
let isSubjectFilled = false;
const isMailSent = isRecipientValid && isSubjectFilled;
console.log(`Mail Sending Successful?:  ${isMailSent}`);

// Store the logical expression in a const variable.
let isRecipientValid2 = true;
let isSubjectFilled2 = false;
const result4 = isRecipientValid2 && isSubjectFilled2;
console.log(result4);

// Store a logical expression in the willSiteLoad variable that checks if the WiFi is connected and the URL is valid to load a website
let isWiFiConnected = true;
let isURLValid = true;
const willSiteLoad = isWiFiConnected && isURLValid;
console.log(willSiteLoad);

//For such conditions, we use the OR operator ||, which returns true as long as at least one of the conditions is true
let isBatteryOn2 = true;
let isPowerOn = false;
console.log(isBatteryOn2 || isPowerOn);

// We know that the NOT operator ! negates a boolean value. That means that it returns true if a condition is false and vice versa.
let isBulbOn = true;
console.log(!isBulbOn);

// We can use ! to negate logical expressions as well. To do that, we place the logical expression between parenthesis.
let isBatteryOn3 = true;
let isPowerOn2 = false;
console.log(!(isBatteryOn3 && isBatteryOn3));

// The logical expression returns false but by negating it, we get true.
let isBatteryOn4 = true;
let isPowerOn3 = false;
console.log(isBatteryOn4 && isPowerOn3);
console.log(!(isBatteryOn4 && isPowerOn3));

//What does this code display in the console?
const condition3 = 5 >= 6;
const condition4 = 9 === 10;
console.log(condition3 || condition4);

//What does this code display in the console?
let condition5 = true;
let condition6 = false;
const logicalExpression = condition5 || condition6;
console.log(!logicalExpression || logicalExpression);

// Check if a person can buy a car depending on whether thie loan is approved or their cash amount is great than the car cost.
let isLoanApproved = true;
let cash = 30000;
let cost2 = 40000;
const isCarBought = isLoanApproved || cash > cost;
console.log(isCarBought);

//Save the opposite of isLoanRejected into the variable.
let isLoanRejected = false;
const isLoanGranted = !isLoanRejected;
console.log(isLoanGranted);

// Check if score is greater than or wqual to minScore with the greater-than-or-equal to operator.
const score3 = 11;
const minScore = 10;
const pass = score >= minScore;
console.log(pass);

// Use a comparison operator to compare score to expected that displays false in the console.
const score4 = "high";
const expected = "low";
console.log(score === expected);

// What does this code display in the console?
const resultA = "moon" !== "moon";
console.log(resultA);

// Create a const variable that contains a number.
const scorer = 20;
console.log(scorer);

// Save the value 101 in the const variable result.
const resultB = 100 + 1;
console.log(resultB);

// Create a const variable named isPasswordCorrect to check if the password introduced by the user is the same as the password the system has stored before.
//1. Initialize a const variable isPasswordCorrect to check if userPassword is exactly the same as savedPassword.
//Output:
// Access granted: true
const userPassword = "283746";
const savedPassword = "283746";
const isPasswordCorrect = userPassword === savedPassword;
console.log(`Access granted: ${isPasswordCorrect}`);

//Complete the code to determine if a client who is 23 years old is of legal drinking age.
// 1. On the first line, initialize a  c⁠o⁠n⁠s⁠t⁠  variable  a⁠g⁠e⁠ . Give it the number value of  2⁠3⁠ .
// 2.  Then, create another variable  a⁠g⁠e⁠C⁠h⁠e⁠c⁠k⁠  that checks if the  a⁠g⁠e⁠  variable is greater than or equal to the legal drinking age. The legal drinking age is 2⁠1⁠ .
// 3. Last, modify the  c⁠o⁠n⁠s⁠o⁠l⁠e⁠.⁠l⁠o⁠g⁠  such that it prints  O⁠f⁠ L⁠e⁠g⁠a⁠l⁠ D⁠r⁠i⁠n⁠k⁠i⁠n⁠g⁠ A⁠g⁠e⁠:⁠ t⁠r⁠u⁠e⁠  if the client is of legal drinking age and  O⁠f⁠ L⁠e⁠g⁠a⁠l⁠ D⁠r⁠i⁠n⁠k⁠i⁠n⁠g⁠ A⁠g⁠e⁠:⁠ f⁠a⁠l⁠s⁠e⁠  if the client is underaged. Use the  a⁠g⁠e⁠C⁠h⁠e⁠c⁠k⁠  variable.
const ageStop = 23;
const ageCheck = ageStop >= 21;
console.log(`O⁠f⁠ L⁠e⁠g⁠a⁠l⁠ D⁠r⁠i⁠n⁠k⁠i⁠n⁠g⁠ A⁠g⁠e⁠:⁠ ${ageCheck}`);

// You want to check if you have enough money to buy new headphones.
// 1. Complete the h⁠a⁠s⁠E⁠n⁠o⁠u⁠g⁠h⁠M⁠o⁠n⁠e⁠y⁠ variable so that it stores the boolean result of whether p⁠r⁠i⁠c⁠e⁠ is less than or equal to b⁠u⁠d⁠g⁠e⁠t⁠.
// Output:
// I⁠ h⁠a⁠v⁠e⁠ e⁠n⁠o⁠u⁠g⁠h⁠ m⁠o⁠n⁠e⁠y⁠:⁠ f⁠a⁠l⁠s⁠e
const budget = 23;
const price = 80;
const hasEnoughMoney = price <= budget;
console.log(`I have enough money: ${hasEnoughMoney}`);
