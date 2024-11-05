/** Gets random integer: [1..6]. */

function d6() {
  return Math.floor(Math.random() * 6) + 1;
}

/** Get n rolls => [num, ...]. */

function getRolls(n) {
  return Array.from({ length: n }, () => d6());
}

/** Get sum of nums. */

function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };


/*
Parameter n:
The function accepts a single parameter n, which represents the number of times you want to roll the die. In other words, n is how many dice rolls you want in the array.

Array.from({ length: n }):

Array.from() creates a new array. The first argument is an object with a property length, which specifies the size of the array.
{ length: n } creates an array-like object where the length of the array will be n. For example, if n = 5, it creates an array of 5 elements.
() => d6():

The second argument in Array.from() is a mapping function that runs for each element of the array.
This means for each element in the array, the d6() function is called, and its result (a random number between 1 and 6) is placed into the corresponding position in the array.*/


// return nums.reduce((prev, cur) => prev + cur, 0);
// This uses the reduce() method in JavaScript to sum up all the numbers in an array nums. Here's how it works:
//
// nums.reduce() applies the provided callback function (prev, cur) => prev + cur to each element of the array.
// prev is the accumulator, and cur is the current value in the array. The function adds them together.
// The 0 at the end specifies the initial value of the accumulator, meaning the summation starts from 0.
