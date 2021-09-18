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

const longestWord = (n = "") => {
  let newArray = n.split(" ");

  let storeArray = 0;
  let word = "";

  for (let i of newArray) {
    if (i.length > storeArray) {
      storeArray = i.length;
      word = i;
    }
  }
  console.log(word);
};
longestWord("web Development Tutorial");

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

const vowelSortes = (n = "") => {
  let vowels = "aeiouAEIOU";
  let countVowels = 0;
  for (let i = 0; i < n.length; i++) {
    if (vowels.indexOf(n[i]) !== -1) {
      countVowels += 1;
    }
  }
  return countVowels;
};
console.log(vowelSortes("the quick brown fox"));

// Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const types = (n = "") => {
  let dtype = [Function, RegExp, Number, String, Boolean, Object];
  if (typeof n === "object" || typeof n === "function") {
  }
  return typeof n;
};
console.log(types("a"));
console.log(types(1));
console.log(types(true));

// Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

const findUnique = (n) => {
  let uniq = "";

  for (let i = 0; i < n.length; i++) {
    if (uniq.includes(n[i]) === false) {
      // If the character not present in uniq
      // Concatenate the character with uniq
      uniq += n[i];
    }
  }
  return uniq;
};

console.log(findUnique("thequickbrownfoxjumpsoverthelazydog"));

// Write a JavaScript function that returns array elements larger than a number.

const largerNumber = (n) => {
  return function (newValue) {
    return newValue >= n;
  };
};
let result = [11, 45, 4, 31, 64, 10].filter(largerNumber(20));

console.log(result + " Larger Numbers");

// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

const Longest_Country_Name = (n) => {
  return n.reduce(function (largestName, country) {
    return largestName.length > country.length ? largestName : country;
  }, "");
};
console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
