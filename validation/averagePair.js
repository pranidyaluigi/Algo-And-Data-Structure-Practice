//freeCodeCamp

/* 
// create function that can accept two parameters
// first parameter will be an array of sorted integer e.g [2,5,7,8,9,12]
// second parameter will be a number can be integer or decimal
// your function it should determine if it's any average from summation 2 element from array in first parameter that exactly equal with the number on second parameter
 */

function averagePair(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      //   console.log((a[i] * 2 + a[j]) / 2);
      if ((a[i] * 2 + a[j]) / 2 == b) {
        return true;
      }
    }
  }
  return false;
}

// console.log(averagePair([-1, 0, , 3, 4, 5, 6], 4.1));
console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

/* 
Expected
console.log(averagePair([-1, 0, , 3, 4, 5, 6], 4.1)); false
console.log(averagePair([1,2,3], 2.5)); true
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); true */
