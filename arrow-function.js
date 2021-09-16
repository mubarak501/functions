arrowFunction = (a, b) => {
  let firstInput = a;
  let seconfInput = b;
  let sum = firstInput + seconfInput;

  console.log(sum);
};
arrowFunction(10, 20);

// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

reverse_the_numbers = (n) => {
  n = n + "";
  return n.split("").reverse().join("");
};
console.log(Number(reverse_the_numbers(32243)));

// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

combinationStr1 = (n) => {
  let combinations = new Array();
  for (i = 0; i < n.length; i++) {
    for (j = i + 1; j < n.length + 1; j++) {
      combinations.push(n.slice(i, j));
    }
  }
  return combinations;
};
console.log(combinationStr1("dog"));

// Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

alphOrder = (n) => {
  let order1 = n;
  let order2 = order1.split("").sort().join("");
  console.log("The alphabetical order " + order2);
};
alphOrder("webmaster");

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function uppercase(n) {
  let array1 = n.split(" ");
  let newarray1 = [];

  for (let x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  return newarray1.join(" ");
}
console.log(uppercase("the quick brown fox"));

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
const n = "Web Development Tutorial ";
let longestWord = (n) => {
  let nArray = n.split(" ");
  let sortednArray = nArray.sort((strA, strB) => {
    return strB.length - strA.length;
  });
  return sortednArray[0];
};
console.log(longestWord(n));
