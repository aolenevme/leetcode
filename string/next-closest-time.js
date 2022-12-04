/**
681. Next Closest Time

Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.

Example 1:
Input: time = "19:34"
Output: "19:39"
Explanation: The next closest time choosing from digits 1, 9, 3, 4, is 19:39, which occurs 5 minutes later.
It is not 19:33, because this occurs 23 hours and 59 minutes later.

Example 2:
Input: time = "23:59"
Output: "22:22"
Explanation: The next closest time choosing from digits 2, 3, 5, 9, is 22:22.
It may be assumed that the returned time is next day's time since it is smaller than the input time numerically.

Constraints:
time.length == 5
time is a valid time in the form "HH:MM".
0 <= HH < 24
0 <= MM < 60
*/

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function (time) {
  const [hours, minutes] = time.split(":");
  const hoursSplitted = hours.split("").map(Number);
  const minutesSplitted = minutes.split("").map(Number);
  const splitted = [...hoursSplitted, ...minutesSplitted];
  const set = new Set(splitted);

  const combinations = sort(filter(generateCombinations(set, [])));
  const nextTime = getNextTime(combinations, splitted);

  return format(nextTime);
};

const generateCombinations = (set, combinations) => {
  const results = [];

  for (const digit of set) {
    if (combinations.length === 0) {
      results.push([digit]);

      continue;
    }

    for (const combination of combinations) {
      if (combination.length === 4) {
        return combinations;
      }

      results.push([...combination, digit]);
    }
  }

  return generateCombinations(set, results);
};

const filter = (combinations) => {
  const filtered = combinations.filter((combination) => {
    const [firstHour, secondHour, firstMinute, secondMinute] = combination;
    const total = Number(combination.join(""));
    const hours = firstHour * 10 + secondHour;
    const minutes = firstMinute * 10 + secondMinute;

    return total <= 2359 && hours <= 23 && minutes <= 59;
  });

  return filtered;
};

const sort = (combinations) => {
  return [...combinations].sort((first, second) => {
    const firstNumber = Number(first.join(""));
    const secondNumber = Number(second.join(""));

    return firstNumber - secondNumber;
  });
};

const getNextTime = (combinations, time) => {
  const length = combinations.length;

  for (let i = 0; i < length; i++) {
    const current = combinations[i];

    if (String(current) === String(time)) {
      return combinations[i + 1] ?? combinations[0];
    }
  }
};

const format = (nextTime) => {
  const [firstHour, secondHour, firstMinute, secondMinute] = nextTime;

  return `${firstHour}${secondHour}:${firstMinute}${secondMinute}`;
};
