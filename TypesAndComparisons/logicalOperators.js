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
