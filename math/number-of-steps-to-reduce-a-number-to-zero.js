/**
1342. Number of Steps to Reduce a Number to Zero

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  return count(num, 0);
};

function count(num, counter) {
  if (num === 0) {
    return counter;
  }

  const nextCounter = counter + 1;

  if (num % 2 === 0) {
    return count(num / 2, nextCounter);
  }

  return count(num - 1, nextCounter);
}

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
