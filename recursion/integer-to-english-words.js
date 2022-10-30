/**
273. Integer to English Words

Convert a non-negative integer num to its English words representation.

Example 1:
Input: num = 123
Output: "One Hundred Twenty Three"

Example 2:
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Constraints:
0 <= num <= 231 - 1
*/

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  return recurse(num);
};

const recurse = (num) => {
  switch (num) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 10:
      return "Ten";
    case 11:
      return "Eleven";
    case 12:
      return "Twelve";
    case 13:
      return "Thirteen";
    case 14:
      return "Fourteen";
    case 15:
      return "Fifteen";
    case 16:
      return "Sixteen";
    case 17:
      return "Seventeen";
    case 18:
      return "Eighteen";
    case 19:
      return "Nineteen";
    case 20:
      return "Twenty";
    case 30:
      return "Thirty";
    case 40:
      return "Forty";
    case 50:
      return "Fifty";
    case 60:
      return "Sixty";
    case 70:
      return "Seventy";
    case 80:
      return "Eighty";
    case 90:
      return "Ninety";
  }

  if (
    (num >= 21 && num < 30) ||
    (num >= 31 && num < 40) ||
    (num >= 41 && num < 50) ||
    (num >= 51 && num < 60) ||
    (num >= 61 && num < 70) ||
    (num >= 71 && num < 80) ||
    (num >= 81 && num < 90) ||
    (num >= 91 && num < 100)
  ) {
    return `${recurse(Math.floor(num / 10) * 10)} ${recurse(num % 10)}`;
  }

  if (num >= 100 && num <= 999) {
    const rest = num % 100 ? ` ${recurse(num % 100)}` : "";

    return `${recurse(Math.floor(num / 100))} Hundred${rest}`;
  }

  if (num >= 1000 && num <= 999999) {
    const str = `${num}`;
    const restNumber = Number(str.slice(str.length - 3));
    const rest = restNumber ? ` ${recurse(restNumber)}` : "";

    return `${recurse(Math.floor(num / 1000))} Thousand${rest}`;
  }

  if (num >= 1000000 && num <= 999999999) {
    const str = `${num}`;
    const restNumber = Number(str.slice(str.length - 6));
    const rest = restNumber ? ` ${recurse(restNumber)}` : "";

    return `${recurse(Math.floor(num / 1000000))} Million${rest}`;
  }

  const str = `${num}`;
  const restNumber = Number(str.slice(str.length - 9));
  const rest = restNumber ? ` ${recurse(restNumber)}` : "";

  return `${recurse(Math.floor(num / 1000000000))} Billion${rest}`;
};
