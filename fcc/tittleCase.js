/* 
Title Case a Sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

Expectation
titleCase("I'm a little tea pot") should return a string.
titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  let result = str.join(" ");

  // console.log(result)
  return result;
}

titleCase("I'm a little tea pot");
