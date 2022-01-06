//FreeCodeCamp

//1. Get all max data of each nested array

function largestOfFour(arr) {
  //temporary max data
  let tmpData = [];

  //looping to get array from arr
  for (let i = 0; i < arr.length; i++) {
    //check data
    if (arr[i]) {
      //and then get data after looping
      let arrData = arr[i];

      //get data of each array
      let maxData = arrData[i];

      //check data
      if (arrData.length) {
        //loop for get max data
        for (let j = 0; j < arrData.length; j++) {
          //condition to get max data
          if (arrData[j] > maxData) {
            maxData = arrData[j];
          }
        }
      }
      tmpData.push(maxData);
    }
  }
  // console.log(tmpData);
}

//2. Get max data of all array data

function largestOfFour(arr) {
  //temporary max data
  let tmpData = 0;

  //looping to get array from arr
  for (let i = 0; i < arr.length; i++) {
    //check data
    if (arr[i]) {
      //and then get data after looping
      let arrData = arr[i];

      //check data
      if (arrData.length) {
        //loop for get max data
        for (let j = 0; j < arrData.length; j++) {
          //condition to get max data
          if (arrData[j] > tmpData) {
            tmpData = arrData[j];
          }
        }
      }
    }
  }
  // console.log(tmpData);
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
    [500, 532, 522, 632, 487],
  ])
);
//Expectation [5, 27, 39, 1001]
