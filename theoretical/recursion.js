// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1);

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

function sumOfArray(arr, index = 0, sum = 0) {
  // This function returns the sum of all of the numbers in a given array.
  if(index === arr.length){
    return sum;
  }
  sum += arr[index];
  return sumArrayOfNums(arr, index +1, sum);
}

function findMax(arr, index = 0, largestNum = 0) {
  // This function returns the largest number in a given array.
  if(index === arr.length){
    return largestNum;
  }
  if(arr[index] > largestNum) {
    largestNum = arr[index];
  } else {
    return findMax(arr, index +1, largestNum);
  }
}

function factorial(num) {
  // This function returns the factorial of a given number.
  // must start with one as it is the multiplicative identity. 
  let result = 1;
  while (num > 1) {
    result = result * num;
    num -= 1;
  }
  return result;
}

function fibonacci(n) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  if (n == 0 || n == 1)
  return n;

  return fibonacci(n-1) + fibonacci(n-2);
}

function coinFlips(n) {
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  if (n === 0) {
    return [];
  }

  // Base case: If n is 1, return the array with two outcomes: ["H", "T"]
  if (n === 1) {
    return ["H", "T"];
  }

  // Recursive case: Generate combinations for n-1 flips
  const prevCombinations = letterCombinations(n - 1);

  // Generate new combinations by appending "H" and "T" to each previous combination
  const newCombinations = [];
  for (const combination of prevCombinations) {
    newCombinations.push(combination + "H");
    newCombinations.push(combination + "T");
  }

  return newCombinations;
}


function letterCombinations(letters) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  if (letters.length === 0) {
    return [];
  }

  const combinations = [];

  function generateCombos(currentCombo, remainingLetters) {
    combinations.push(currentCombo);

    for (let i = 0; i < remainingLetters.length; i++) {
      generateCombos(currentCombo + remainingLetters[i], remainingLetters.slice(i + 1));
    }
  }

  generateCombos("", letters);

  return combinations;
}


module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};
