/* 
create a function with two string parameter
the function be able to determine first parameter with from second parameter
it will happen if the amount of first parameter exactly equal with second parameter and vice versa
No array build-in function*/

function sentence(str1, str2) {
  //check length data
  if (str1.length != str2.length) {
    return false;
  }

  //cause no array so initialization in object
  let result = {};
  //get each str1
  for (let i = 0; i < str1.length; i++) {
    console.log("STR1>>>>>>", str1[i]);
    //get letter of str1
    let letter = str1[i];
    console.log("LETTER>>>>>", letter);
    //check each letter and push to result
    result[letter] = result[letter]
      ? (result[letter] += 1)
      : (result[letter] = 1);
  }

  //get each str2
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //check each letter on str2 with result, create condition
    if (!result[letter]) {
      console.log(result);
      return false;
    } else {
      console.log(result);
      result[letter] -= 1;
    }
  }

  return true;
}

console.log(sentence("ronak", "narob"));
