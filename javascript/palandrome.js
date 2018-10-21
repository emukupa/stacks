const Stack = require('./stack');

// using an array
const stack1 = []; // Javascript array has stack operations, so we use an array

const word1 = 'racecar';

let rword1 = '';

// push the letters of a word into the stack
for (let i = 0; i < word1.length; i++) {
  stack1.push(word1[i]);
}

// pop off the stack
for (let i = 0; i < word1.length; i++) {
  rword1 += stack1.pop();
}

if (word1 === rword1) {
  console.log(`${word1} is a palandrome`);
} else {
  console.log(`${word1} is not a palandrome`);
}

// using a custom stack
const stack2 = new Stack();

const word2 = 'racecar';
let rword2 = '';
// push the letters of a word into the stack
for (let i = 0; i < word2.length; i++) {
  stack2.push(word2[i]);
}

// to see what's the top letter
console.log(`The top letter is ${stack2.peek()}`);

// pop off the stack
for (let i = 0; i < word2.length; i++) {
  rword2 += stack2.pop();
}

if (word2 === rword2) {
  console.log(`${word2} is a palandrome`);
} else {
  console.log(`${word2} is not a palandrome`);
}
