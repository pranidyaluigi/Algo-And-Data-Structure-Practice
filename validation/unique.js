//Logic 1
// function unique(arr) {
//   let result = [...new Set(arr)];
//   return result;
// }

//Logic 2
function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(unique([1, 2, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10]));
