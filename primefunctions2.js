/* eslint no-var: 0 */
var _ = require('underscore');

function primeGen(num) {
  const retArr = [];
  for (let i = 1; i < num; i++) { // create a list of all number from 1 - num
    retArr.push(i + 1);
  }

  for (let j = 0; j <= num - 1; j++) { // iterate through the numbers
    for (let k = j + 1; k < num - 1; k++) { // start at a index and check all nums after
      if (retArr[k] % retArr[j] === 0) {
        retArr[k] = 0; // if a non prime is found replace it with 0
      }
    }
  }

  return _.without(retArr, 0); // get rid of 0s
}

function cumulativeSum(retArr) {
  let temp = 0;
  const final = [];
  const len = retArr.length;

  for (let i = 0; i < len; i++) { // iterate through the list
    for (let j = 0; j <= i; j++) { // add all values before it
      temp += retArr[j];
    }
    final.push(temp); // push on to a new array
    temp = 0;
  }

  return final; // return new array
}

function maxPrimeSum(num) {
  let maxPrime = 0;
  let maxCount = 0;
  let temp = [];
  const listOfPrimes = primeGen(num); // generate list of primes

  while (listOfPrimes.length > 0) { // While the list is not empty
    const listOfSums = cumulativeSum(listOfPrimes); // generate list of cumulative sums
    temp = _.intersection(listOfPrimes, listOfSums); // find elements that the 2 lists share
    const i = temp.pop(); // Get the greatest number off the array
    const j = (_.indexOf(listOfSums, i) + 1);
    if (i > maxPrime && j > maxCount) { // if the array is empty -> false
      maxPrime = i;
      maxCount = j;
    }
    temp = []; // clear temp
    listOfPrimes.shift(); // Try again with a list of primes that is smaller
  }

  return ([maxPrime, maxCount]);
}

console.log(primeGen(100));
console.log(cumulativeSum([1, 2, 3, 4]));
console.log(maxPrimeSum(100));

/* Optimization 1: Replaced the retArr.length line 26 to a const var that was declared
before the loop. Tested 100 for test1 and 1000 for test2. Changed test1 from 4ms to 2ms and test2 from
35ms to 28 ms. */
/* Optimization 2: Got rid of the retArr.shift(); at line 10 and adjusted the loop. Changed test2 to 16ms */
