/* 
create function to determine the given expression is correct or not
expression will be string of open bracket nor close bracket e.g ({[[()]]})
your function should determine the expression is it correct or not

Expactation
({[]}) => true
([][]{})=> true
({)(]){[} => false
[)()] => false
({[}]) => false
*/

// // Logic 1
function validation(str) {
  //   //get each string
  //   let result;
  for (let i = 0; i < str.length; i++) {
    //     // console.log(str[i]);
    //     let a = str[i];
    //     let b = str[i + 1];
    if (str[i] == "(") {
      if (str[i + 1] == ")") {
        return true;
      }
      //   console.log(true);
    } else if (str[i] == "{") {
      if (str[i + 1] == "}") {
        return true;
      }
    } else if (str[i] == "[") {
      if (str[i + 1] == "]") {
        return true;
      }
    } else {
      return false;
    }
  }
  //     let z =
  //       a === "(" && b === ")"
  //         ? true
  //         : a === "{" && b === "}"
  //         ? true
  //         : a === "[" && b === "]"
  //         ? true
  //         : false;
  //     result = z;
}
//   return result;
// }

//Logic 2
// function validation(str) {
//   //check bracket even length
//   //console.log(str.length % 2);
//   if (str.length % 2 == 1) {
//     return false;
//   }

//   let items = str.split("");

//   //check how many brackets in str
//   let bracket = str.length / 2;
//   for (let i = 0; i < items.length; i++) {
//     //get bracket from the beginning
//     let a = items[i];
//     //get bracket from the last to beginning
//     let b = items[items.length + i - 1];
//     //if a and b match, it should be false
//     // if (a === b) {
//     //   return false;
//     // }
//     let z =
//       a === "(" && b === ")"
//         ? true
//         : a === "{" && b === "}"
//         ? true
//         : a === "[" && b === "]"
//         ? true
//         : false;

//     return z;
//   }
//   return true;
// }

console.log(validation("({[]})"));
console.log(validation("([][]{})"));
console.log(validation("({)(]){[}"));
console.log(validation("[)()] "));
console.log(validation("({[}])"));
