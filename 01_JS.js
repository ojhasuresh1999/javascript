// !Q1: Explain what a callback function is and provide a simple example
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function modifiedArray(arr, callback) {
  arr.push(11);
  callback();
}

modifiedArray(arr, () => {
  //   console.log("Modified Array : ", arr);
});

// !Q2: Given a string, reverse each word in the sentence

var string = "I am Suresh Ojha";

let reverseEntireSentence = reverseBySeparator(string, "");

let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
// console.log(reverseEachWord);

// !Q3: How to check if an object is an array or not? Provide some code.
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(Array.isArray(arr2));

// !Q4: How to empty an array in JavaScript?
let arr3 = [1, 2, 3, 4, 5, 6];
// arr3.length = 0;
arr3 = [];
// console.log(arr3);

// !Q5: How would you check if a number is an integer?
function isInt(num) {
  return num % 1 === 0;
}
// console.log(isInt(5.2));

// !Q6:Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
/*
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  }
}
*/

// !Q11: Given two strings, return true if they are anagrams of one another
let firstWord = "Army";
let secondWord = "Mary";

function isAnagram(first, second) {
  let a = first.toLowerCase();
  let b = second.toLowerCase();
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
}
// console.log(isAnagram(firstWord, secondWord));

// !Q14: What will be the output of the following code?

var y = 1;
if (function f() {}) {
  y += typeof f;
}
// console.log(y);

// !Write a function that would allow you to do this multiply(5)(6);

function multiply(a) {
  return function (b) {
    return a * b;
  };
}
// console.log(multiply(5)(6));

// !JavaScript Program to Check Prime Number

let number = 17;
let isPrime = true;

if (number === 1) {
  console.log("1 is neither a prime number nor a composite number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    // console.log(`${number} is prime`);
  } else {
    // console.log(`${number} is not prime`);
  }
}

// ! All Array Methods
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// *1. map()
const mapped = arr4.map((element) => {
  return element * 2;
});
// console.log(mapped);

// *2. filter()
const filtered = arr4.filter((element) => {
  return element === 2 || element === 9;
});
// console.log(filtered);

// *3. sort()
const alphabet = ["f", "g", "a", "b", "m", "c"];
const descend = arr4.sort((a, b) => {
  return a > b ? -1 : 1;
});
const ascend = alphabet.sort((a, b) => {
  return a > b ? 1 : -1;
});
// console.log(ascend, descend);

// *4.forEach()
arr4.forEach((element) => {
  // console.log(element);
});

// *5.concat()
const arr5 = [11, 12, 13, 14, 15];
// console.log(arr4.concat(arr5));

// *6.spread operator
const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// *7.every()
const greaterFive = arr4.every((num) => num > 5);
const lessNine = arr4.every((num) => num < 9);
// console.log(greaterFive, lessNine);

// *8.some()
const greaterNum = arr4.some((num) => num > 5);
const lessNum = arr4.some((num) => num < 9);
// console.log(greaterNum, lessNum);

// *8. includes( )
// console.log(arr4.includes(50));
// console.log(arr4.includes(5));

// *9. join( )
const arr7 = ["S", "U", "R", "E", "S", "H"];
// console.log(arr7.join(""));

// *10. reduce( )
const reduced = arr4.reduce((total, current) => total + current);
// console.log(reduced);

// *11. find( )
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr8.find((a) => a > 5);
// console.log(found);

// *12. findIndex( )
const arr9 = ["Suresh", "Surasree", "Pushpita", "Saktipda"];
const indexFinder = arr9.findIndex((element) => element === "Pushpita");
// console.log(indexFinder);

// *14. fill( )
const arr10 = new Array(3);
// console.log(arr10);
// console.log(arr10.fill(2));

// *15. slice( )
const sliced = arr9.slice(1, 3);
// console.log(sliced);
// console.log(arr9);

// *splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(1, 2, "Guava", "Kiwi"));
// console.log(fruits);

// *16. reverse( )
fruits.reverse();
// console.log(fruits);

// *17. push( )
fruits.push("Apple");
console.log(fruits);

// *18. pop( )
fruits.pop();
console.log(fruits);

// *19. shift( )
console.log(fruits.shift());
console.log(fruits);

// *20. unshift( )
console.log(fruits.unshift("DragonFruit"));
console.log(fruits);
