// ===== 1. PRINT =====
// Python's print() becomes console.log()
console.log("Hello, world!");


// ===== 2. INPUT =====
// Python's input() becomes prompt() in the browser
// (Note: prompt() only works when this runs in a browser tab,
// not in Node.js or a terminal)
let name = prompt("What is your name?");
console.log("Hi, " + name);


// ===== 3. IF / ELSE =====
// No colons, no indentation rules -- curly braces { } mark the blocks
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}


// ===== 4. LOOP =====
// Python's "for i in range(5)" becomes a counter-based for loop
for (let i = 0; i < 5; i++) {
  console.log("Loop number:", i);
}


// ===== 5. LIST =====
// Python lists become JS arrays. .append() becomes .push()
let fruits = ["apple", "banana"];
fruits.push("cherry");

console.log(fruits[0]);
console.log(fruits);


// ===== 6. FUNCTION (def) =====
// Python's def becomes the function keyword. return works the same way
function greet(person) {
  return "Hi " + person;
}

console.log(greet("Sam"));

// node main.js