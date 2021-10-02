function forEach(array = [], cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

let array = [1, 2, 35, 6, 7, 8, 9, 9, 4, 343];

forEach(array, function (currentItem, index, wArr) {
  console.log("custom forEach", index, currentItem, wArr);
});

function map(array = [], cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

// let mapOutput = map(array, function (currItem) {
//   return currItem * 2;
// });

// console.log("mapOutput", mapOutput);

function filter(array = [], cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// let filterOutput = filter(array, function (currItem) {
//   return currItem > 100;
// });

// console.log(filterOutput);

// array.forEach(function (currentItem, index, wArr) {
//   console.log("array method forEach", index, currentItem, wArr);
// });

let output2 = array.map(function (vlaue, index, array) {
  return vlaue, index, array;
});

console.log(output2);

let output3 = array.filter(function (vlaue, index, array) {
  return vlaue > 10;
});
console.log(output3);

const cart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function returnLast(arr) {
  return arr.at(-1);
}

function returnFirst(arr) {
  return arr.at(2);
}

const item1 = returnLast(cart);
console.log(item1);
const item2 = returnFirst(cart);
console.log(item2);
// for (let input = 1; input <= 10; input++) {
//   console.log(input);
// }
const colors = ["red", "green", "blue"];
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]);
