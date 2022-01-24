/* 
Mutation

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

Expectation
mutation(["hello", "hey"]) should return false.
mutation(["hello", "Hello"]) should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
mutation(["Mary", "Army"]) should return true.
mutation(["Mary", "Aarmy"]) should return true.
mutation(["Alien", "line"]) should return true.
mutation(["floor", "for"]) should return true.
mutation(["hello", "neo"]) should return false.
mutation(["voodoo", "no"]) should return false.
mutation(["ate", "date"]) should return false.
mutation(["Tiger", "Zebra"]) should return false.
mutation(["Noel", "Ole"]) should return true*/

function mutation(arr) {
  // return arr;
  let str1 = arr[0].toLowerCase(arr[0]);
  let str2 = arr[1].toLowerCase(arr[1]);

  //   let result = [];

  //   for (let j = 0; j < str1.length; j++) {
  //     if (!result[str1[j]]) {
  //       result[str1[j]] = 1;
  //     } else {
  //       result[str1[j]] += 1;
  //     }
  //   }

  //   for (let k = 0; k < str2.length; k++) {
  //     if (!result[str2[k]]) {
  //       return false;
  //     }
  //   }
  //   return true;
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        count++;
        break;
      }
    }
    if (count === str2.length) {
      return true;
    }
  }

  return false;

  //   console.log(result);
}

console.log(mutation(["hello", "hey"])); //false
console.log(mutation(["hello", "neo"])); //false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); //true
