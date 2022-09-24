/**
247. Strobogrammatic Number II

Given an integer n, return all the strobogrammatic numbers that are of length n. You may return the answer in any order.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Example 1:
Input: n = 2
Output: ["11","69","88","96"]

Example 2:
Input: n = 1
Output: ["0","1","8"]

Constraints:
1 <= n <= 14
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function(n) {
    if (n === 1) {
        return ["0", "1", "8"];
    }
    
    const numbers = ["0", "1", "6", "8", "9"];
    const counter = Math.floor(n / 2);
    const strings = recurse([], numbers, counter);
    const stringsWithMiddle = addMiddle(strings, n);
    
    const chars = new Map();
    chars.set("0", "0");
    chars.set("1", "1");
    chars.set("8", "8");
    chars.set("6", "9");
    chars.set("9", "6");
    
    const fullStrings = addSecondPart(stringsWithMiddle, n, chars);
    const withoutLeadingZeroStrings = removeLeadingZero(fullStrings, n);  
    const result = withoutLeadingZeroStrings.map((string) => string.join(""));
    
    return result;
};

const recurse = (strings, numbers, counter) => {
    if (counter === 0) {
        return strings;
    }
    
    if (strings.length === 0) {
        const nextStrings = numbers.map((number) => [number]);
        
        return recurse(nextStrings, numbers, counter - 1);
    }
    
    const nextStrings = [];
    for (const string of strings) {
        for (const number of numbers) {
            nextStrings.push([...string, number]);
        }
    }
    
    return recurse(nextStrings, numbers, counter - 1);
}

const addMiddle = (strings, n) => {
    if (n % 2 === 0) {
        return strings;
    }
    
    const middleNumbers = ["0", "1", "8"];
    const nextStrings = [];
    
    for (const string of strings) {
        for (const number of middleNumbers) {
            nextStrings.push([...string, number]);
        }
    }
    
    return nextStrings;
}

const addSecondPart = (strings, n, revert) => {
    const nextStrings = [...strings];
    
    for (const string of nextStrings) {
        const length = string.length;
        
        for (let i = length - 1 - n % 2; i >= 0; i--) {
            const number = string[i];
            
            string.push(revert.get(number));
        } 
    }
    
    return nextStrings;
}

const removeLeadingZero = (strings, n) => {
    const isLong = n > 1;
    
    return strings.filter((string) => {
        const hasLeadingZero = string[0] === "0";
        const isShort = n === 1;
        
        return !hasLeadingZero || isShort;
    })
}
