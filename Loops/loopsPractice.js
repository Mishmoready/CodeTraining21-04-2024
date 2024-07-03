// One way to repeat lines of code is to write them over and over again, but it takes a really long time if we want to create larger programs.
console.log("and again");
console.log("and again");

// To build larger programs and websites, we repeat lines of code using a while loop.
// Using a while loop to repeat lines of code starts with the while keyword.
// add break into code block to cancel loop.
while (true) {
  console.log("and again2");
  break;
}

// A while loop repeats its code block while its condition is true. We code a true condition with (true).
while (true) {
  console.log("and again3");
  break;
}

// Stopping While loops //

// So far we've learned how to create a while loop, now let's focus on how to stop them from looping infinitely.
while (true) {
  console.log("and again4");
  break;
}

// To stop a loop, we start by creating a variable outside of the loop.
let keepGoing = true;
while (true) {
  console.log("and again5");
  break;
}

// We use the variable in the condition to decide whether or not the loop should run its code block. For example, (keepGoing === true).
let keepGoing2 = true;
while (keepGoing2 === true) {
  console.log("and again6");
  break;
}

// Inside the code block, we stop the loop by setting keepGoing to false so that the condition returns false.
let keepGoing3 = true;
while (keepGoing3 === true) {
  console.log("and again till false");
  keepGoing3 = false;
}

// The loop runs its entire code block because keepGoing is true at first, but doesn't run again if we set keepGoing to false.
let keepGoing4 = true;
while (keepGoing4 === true) {
  console.log("keepGoing4: " + keepGoing4);
  keepGoing4 = false;
  console.log("keepGoing4: " + keepGoing4);
}

// In order to use the variable in the while loop's condition, create it outside of the code block.
let keepPlaying = true;
while (keepPlaying === true) {
  console.log("Now Playing: Ryan Paris");
  keepPlaying = false;
  break;
}

// Skip the loop by using the autopilotOn variable inside the condition.
let autopilotOn = false;
while (autopilotOn === true) {
  console.log("Autopilot on: vroom!");
  autopilotOn = false;
}

// Inside the code block, stop the loop after running its code block by updating keepPlaying to false.
let keepPlaying2 = true;
while (keepPlaying2 === true) {
  console.log("Now Playing: Yummy");
  keepPlaying2 = false;
}

//Inside the code block, stop the loop after running its code block by setting isOn to false.
let isOn = true;
while (isOn === true) {
  console.log("Now Playing: Yummy Yummy");
  isOn = false;
}

// We know how to repeat code using a while loop. Like this program repeating statements to display The American Flag.
let counter1 = 0;
while (counter1 < 5) {
  console.log("**********---------");
  counter1++;
}
let counter2 = 0;
while (counter2 < 4) {
  console.log("-------------------");
  counter2++;
}

//Using for loops, we can rewrite the same program making it easier for other programmers to understand.
for (let i = 0; i < 4; i++) {
  console.log("**********---------");
}
for (let i = 0; i < 4; i++) {
  console.log("-------------------");
}

// To create a for loop, we start with the for keyword, parentheses ( ), and braces { }.
// for () {}

//A for loop lets us create the counter variable inside the parentheses, like let counter = 1;.
// for let counter = 1; {}

// A common name for a counter variable is the letter i which stands for index. We'll use it for learning about for loops.
// for (let i =1;) {}

// After the semicolon, we place a condition like i < 5 and add another semicolon ;.
// for (let i = 1; i < 5; ) {}

// Last, we increment the counter variable with i++.
for (let i = 1; i < 5; i++) {
  console.log(i);
}

// Inside the parentheses, create the counter variable with let i = 5;.
for (let ii = 5; ii < 10; ii++) {
  console.log(ii);
}

//Inside the parentheses, create the counter variable and condition.
for (let i = 303; i < 306; i < 55) {
  console.log(i);
  break;
}

// Inside the for loop's code block, display the counter variable.
for (let index = 0; index <= 50; index++) {
  console.log(index);
}

//This for loop counts upward from 1 to 5. Let's learn how to change it to loop downward from 5 to 1.
for (let i = 1; i < 6; i++) {
  console.log(i);
}
// LOOPING DOWNWARD
for (let i = 5; i > -10; i--) {
  console.log(i);
}

// Rather than incrementing the counter variable, we decrement it with i--.
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// To include 0 when counting down, we use >= instead of >.
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// What does this code display in the console?
let acceleration = 0;
while (acceleration < 3) {
  acceleration++;
  console.log(acceleration); // 1 to 3
}

// What does this code display in the console?
let tracker = 1;
while (tracker <= 2) {
  tracker++;
}
console.log(tracker); //3

//What does this code display in the console?
let counter = 0;
while (counter < 3) {
  console.log(counter);
  counter++;
} // 0 to 2

// Display 1 through 4 in the console.
let counter3 = 0;
while (counter3 < 4) {
  counter3++;
  console.log(counter3);
}

// What's the name of the counter variable in this code?
console.log("Fastest runners:");
for (let index = 1; index < 4; index++) {
  console.log(index + ".");
} // index

//Assemble the for loop to print in the console numbers 1 to 4 .
for (let i = 1; i < 5; i++) {
  console.log(i);
}

// What does this code display in the console?
for (let i = 0; i < 3; i++) {
  console.log("Polly wants a cracker!");
}

// Inside the parentheses, increment the counter variable using the ++ operator.
console.log("*");
let line = "";
for (let i = 1; i <= 5; i++) {
  line += "~";
  console.log(line);
}

// Which variable is the counter variable of the for loop?
let title = "Numbers:";
let line2 = " ";
for (let i = 1; i < 6; i++) {
  line2 += i;
}
console.log(line2);

// Does the code inside the loop run?
for (let i = -10; i < 0; i++) {
  console.log(i);
}

// Code the condition where the loop runs until the counter variable reaches 5, but does not print 5 in the console.
for (let i = 10; i > 5; i--) {
  console.log(i);
}

// Create a counter variable named number and assign it -5.
let number = -5;
while (number < 5) {
  console.log(number);
  number++;
}

//Leaving the rest of the code the same, change the condition to prevent an infinite loop. The loop should run at least once.
let number2 = 0;
while (number2 <= 0) {
  console.log(number2);
  number2++;
}

// Display 10 through 40 (in increments of 10) in the console by changing the condition.
let counter4 = 10;
while (counter4 <= 40) {
  console.log(counter4);
  counter4 += 10;
}

// Change the initial value of the counter variable so that only negative numbers are displayed in the loop.
let counter5 = -3;
while (counter5 < 0) {
  console.log(counter5);
  counter5 += 1;
}

//Display 3 through 8 in the console by adding console.log(counter) in the correct position.
let counter6 = 2;
while (counter6 < 8) {
  counter6++;
  console.log(counter6);
}

// Inside the code block, increase the counter variable by ten to prevent an infinite loop.
let counter7 = 50;
while (counter7 < 100) {
  counter7 += 10;
  console.log(counter7);
}

// Code the missing keyword.
let lyric = "I want to hold your h";
for (let i = 0; i < 6; i++) {
  lyric += "a";
}
lyric += "nd";
console.log(lyric);

// Create the counter variable i and initialize its value to 0.
const notifications = 4;
for (i = 0; i < notifications; i++) {
  console.log("You've got mail!");
}

// Inside the for loop, display something in the console that includes the counter variable i.
let guest = 3;
for (let i = 0; i < guest; i++) {
  console.log(i);
}

// Code the missing counter variable and condition of the for loop. The loop should iterate 5 times. Do not alter anything else in the code.
console.log("*");
let line3 = "";
for (i = 0; i < 5; i++) {
  line3 += "~";
  console.log(line3);
}

// Make sure the counter variable increments by 1 during each loop.
console.log("- -");
console.log(". .");
let nose = "  >";
for (let i = 0; i < 3; i++) {
  nose += "-";
}
console.log(nose);
console.log(" o ");

// Fill in the parentheses to create a for loop that increments a counter variable i from 1 through 4.
for (i = 1; i < 5; i++) {
  console.log("Display Element");
}

//Code the counter variable with an initial value so that the output starts at 10 and ends at 1 .
for (i = 10; i > 0; i--) {
  console.log(i);
}
