/**
43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Constraints:
1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

var multiply = function(num1, num2) {
    let nums = [];
    let offset = 0;
    
    if (Number(num1) === 0 || Number(num2) === 0) {
        return "0";
    }
    
    for (let i = num1.length - 1; i >= 0; i--) {
        const first = Number(num1[i]);
        
        let number = [];
        let addition = 0;
        
        for (let j = num2.length - 1; j >= 0; j--) {
            const second = Number(num2[j]);
            
            const next = first * second + addition;
            
            number.push(next % 10);
            
            addition = Math.floor(next / 10);
        }
        
        if (addition !== 0) {
          number.push(addition);
        }
        
        nums.push(number);
    }

    

    nums = nums.map((num, index) => {
    	const longestNumLength = nums.reduce((acc, num) => Math.max(acc, num.length), -1);

        for (let i = Math.abs(longestNumLength - num.length) === 0 ? 1 : 0; i < nums.length - index; i++) {
            num.push(0);
        }
        
        for (let i = 0; i < index; i++) {
            num.unshift(0);
        }
        
        return num.reverse();
    });
        
    let result = [];
    
    let addition = 0;
    for (let i = 0; i < nums.length; i++) {
        addition = 0;
        
        const current = nums[i];
        
        if (i === 0) {
            result = [...current];
            
            continue;
        }
        
        const currentLength = current.length;
        
        for (let currentIdx = currentLength - 1; currentIdx >= 0; currentIdx--) {
            const currentNum = current[currentIdx];
            const resultNum = result[currentIdx];
            
            const next = currentNum + resultNum + addition;
            
            result[currentIdx] = next % 10;
            
            addition = Math.floor(next / 10);
        }
    }
    
    if (addition !== 0) {
        result.unshift(addition);
    }
    
    if (result[0] === 0) {
        result = result.slice(1);
    }
    
    return result.join("");
};
