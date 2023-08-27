// !1. Print all even numbers from 0 – 10
for (let i = 0; i <= 10; i += 2) {
  //   console.log(i);
}

// !2. Print a table containing multiplication tables
for (let i = 1; i <= 10; i++) {
  //   console.log(`7 * ${i} = ${7 * i}`);
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i}*${j}=${i * j}`);
  }
}

// !3. Create a length converter function
function lengthConverter(cm) {
  return (mm = cm * 1000);
}
// console.log(lengthConverter(5));

// !4. Calculate the sum of numbers within an array
let arr100 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;
for (let i = 0; i < arr100.length; i++) {
  sum += i;
}
// console.log(sum);

// !5. Create a function that reverses an array
function reverseArr(arr) {
  return arr.reverse();
}
// console.log(reverseArr(arr100));

// ! JavaScript Program to Find the Factorial of a Number

const number = 4;

if (number < 0) {
  console.log("'Error! Factorial for negative number does not exist.'");
} else if (number === 0 || number === 1) {
  console.log("The factorial is 1");
} else {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(fact);
}

// TODO: Using recursive function
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(4));
