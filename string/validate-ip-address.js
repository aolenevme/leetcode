/**
468. Validate IP Address

Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00", and "192.168@1.1" are invalid IPv4 addresses.

A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:

1 <= xi.length <= 4
xi is a hexadecimal string which may contain digits, lowercase English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
Leading zeros are allowed in xi.
For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.

Example 1:
Input: queryIP = "172.16.254.1"
Output: "IPv4"
Explanation: This is a valid IPv4 address, return "IPv4".

Example 2:
Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".

Example 3:
Input: queryIP = "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.

Constraints:
queryIP consists only of English letters, digits and the characters '.' and ':'.
*/

/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  if (isIPv4(queryIP)) {
    if (isValidIP4(queryIP)) {
      return "IPv4";
    }
  } else {
    if (isValidIP6(queryIP)) {
      return "IPv6";
    }
  }

  return "Neither";
};

const isIPv4 = (ip) => {
  return ip.includes(".");
};

const isValidIP4 = (ip) => {
  const [first, second, third, fourth, ...rest] = ip.split(".");

  if (rest.length >= 1) {
    return false;
  }

  if (
    !isCorrectString(first) ||
    !isCorrectString(second) ||
    !isCorrectString(third) ||
    !isCorrectString(fourth)
  ) {
    return false;
  }

  if (
    hasLeadingZeroes(first) ||
    hasLeadingZeroes(second) ||
    hasLeadingZeroes(third) ||
    hasLeadingZeroes(fourth)
  ) {
    return false;
  }

  return (
    isXiIP4Correct(first) &&
    isXiIP4Correct(second) &&
    isXiIP4Correct(third) &&
    isXiIP4Correct(fourth)
  );
};

const isCorrectString = (str) => {
  return typeof str === "string" && str.length > 0;
};

const hasLeadingZeroes = (str) => {
  return str.startsWith("0") && str.length > 1;
};

const isXiIP4Correct = (str) => {
  const number = Number(str);
  const isRangeCorrect = number >= 0 && number <= 255;

  if (!isRangeCorrect) {
    return false;
  }

  for (const char of str) {
    const charNumber = Number(char);

    if (!(charNumber >= 0 && charNumber <= 9)) {
      return false;
    }
  }

  return true;
};

const isValidIP6 = (ip) => {
  const [first, second, third, fourth, fifth, sixth, seventh, eighth, ...rest] =
    ip.split(":");

  if (rest.length >= 1) {
    return false;
  }

  if (
    !isCorrectString(first) ||
    !isCorrectString(second) ||
    !isCorrectString(third) ||
    !isCorrectString(fourth) ||
    !isCorrectString(fifth) ||
    !isCorrectString(sixth) ||
    !isCorrectString(seventh) ||
    !isCorrectString(eighth)
  ) {
    return false;
  }

  return (
    isXiIP6Correct(first) &&
    isXiIP6Correct(second) &&
    isXiIP6Correct(third) &&
    isXiIP6Correct(fourth) &&
    isXiIP6Correct(fifth) &&
    isXiIP6Correct(sixth) &&
    isXiIP6Correct(seventh) &&
    isXiIP6Correct(eighth)
  );
};

const isXiIP6Correct = (str) => {
  const length = str.length;
  const hasCorrectLength = length >= 1 && length <= 4;

  if (!hasCorrectLength) {
    return false;
  }

  for (const char of str) {
    const code = char.codePointAt();

    if (
      !(
        (code >= 48 && code <= 57) ||
        (code >= 97 && code <= 102) ||
        (code >= 65 && code <= 70)
      )
    ) {
      return false;
    }
  }

  return true;
};
