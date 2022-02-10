function maxMinArr(arr) {
  arr = arr.sort((x, y) => x - y);

  let max = 0;
  let min = arr[0];

  let value = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    value += arr[i];
  }

  let maxValue = value - min;
  let minValue = value - max;

  console.log(maxValue, minValue);
}

maxMinArr([3, 5, 7, 1, 9]);
