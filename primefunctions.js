// CS 320 - Homework 4 Laurel Anderson

const _ = require('underscore');

function primeGen(num) {
  const retArr = [];
  for (let i = 0; i < num; i++) { // create a list of all number from 1 - num
    retArr.push(i + 1);
  }

  retArr.shift(); // get rid of 1

  for (let j = 0; j <= num - 1; j++) { // iterate through the numbers
    for (let k = j + 1; k < num - 1; k++) { // start at a index and check all nums after
      if (retArr[k] % retArr[j] === 0) {
        retArr[k] = 0; // if a non prime is found replace it with 0
      }
    }
  }

  return _.without(retArr, 0); // get rid of 0s
}

console.log(primeGen(100));
