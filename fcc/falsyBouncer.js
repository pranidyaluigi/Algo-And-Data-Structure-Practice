/* 
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.


Expectation
bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) should return [].
bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
*/

function bouncer(arr) {
  // return arr;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i]) {
      // console.log(arr[i])
      result.push(arr[i]);
    }
  }
  // console.log(result);
  return result;
}

// bouncer([7, "ate", "", false, 9]);
bouncer([null, NaN, 1, 2, undefined]);
