/* 
Step Counter

provided with the implementation of a simple counter object:

const counter = ( function counter () {
    let value = 0;
    return {
        getValue: function() {
            return value;
        },
        changeBy: function() {
            value += k;
        },
    }
}) ()

Your task is to implement a function stepCounter that:
- takes a single parameter
- return new object, representing a step counter with the initial value of 0 and three methods:
    - increment() : increments the current value by k
    - decrement() : decrements the current value by k
    - getValue() : returns the current value

Expectation Output :
1
0
*/

function getFixedCounter(k) {
  let counter = 0;
  return {
    increment: function () {
      counter = counter + k;
    },
    decrement: function () {
      counter = counter - k;
    },
    getValue: function () {
      return counter;
    },
  };
}

getFixedCounter(1);
