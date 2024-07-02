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
