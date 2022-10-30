/**
1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
*/

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  return n.split("").reduce((max, next) => {
    const nextNumber = Number(next);
    if (nextNumber > max) {
      return nextNumber;
    }

    return max;
  }, 0);
};

console.log(minPartitions("32"));
console.log(minPartitions("82734"));
console.log(minPartitions("27346209830709182346"));
