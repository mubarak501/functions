function printStars(symb = "*", symb2 = " ") {
  for (let i = 0; i < 2; i++) {
    let output = "";
    for (let j = 0; j < 10; j++) output += symb + symb2;

    console.log(output);
    console.log("");
  }
}

printStars("|", "@", "&", 34343, 688986);
// string
// number
// boolean
// arrays
// objs
// functions

function shortCircut(username) {
  username = username || "new user";

  console.log("Welcome ", username);
}

shortCircut("xyz");

function sumOf(array = []) {
  let sum = 0;
  for (let i of array) {
    // i = 3
    if (typeof i === "number") sum = sum + i;
    // 0 + 3  ===> 3
  }
  return sum;
}

let result = sumOf([3, 3, 2, "3", "3243"]);
console.log(result);

function CreateNewUserObj(username = "", password = "", email = "") {
  // let newObj = {
  //   username: username,
  //   password: password,
  //   email: email,
  // };

  // return newObj;

  return {
    username: username,
    password: password,
    email: email,
  };
}

let newUser = CreateNewUserObj(213213213, "slkdfjlk34", 3434234323);
console.log(newUser);

// Tasks to do
// Question # 1
//The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

/* YOUR SOLUTION */

function tellFortune(
  numberOfChildern = " numberOfChildern",
  partnerName = "partnerName",
  geographicLocatoin = "",
  jobTitle = ""
) {
  return ` You will be a ${jobTitle} in ${geographicLocatoin} and married to ${partnerName} with ${numberOfChildern} kids `;
}
console.log(tellFortune(3, "jan", "altit", "web developer"));
console.log(tellFortune(2, "jan", "aliabad", "web developer"));
console.log(tellFortune(1, "jan", "dorkhan", "web developer"));
// Question # 2
// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

/* YOUR SOLUTION */

function calculateDogAge(age = "") {
  let dogYear;
  dogYear = age * 7;

  return ` your Doggie is  ${dogYear} year old in dog year!`;
}
console.log(calculateDogAge(4));
console.log(calculateDogAge(3));
console.log(calculateDogAge(6));
// Question # 3
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

/* YOUR SOLUTION */

function calculateSupply(age = "", amountPerDay = "") {
  const maxAge = 100;

  let remainingAge = maxAge - age;
  let supplyNeed = amountPerDay * remainingAge;
  return ` You will need ${supplyNeed} to last you until the ripe old age of ${maxAge} and your remaining days are ${remainingAge}`;
}
console.log(calculateSupply(23, 2 * 360));

// Question # 4
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

/* YOUR SOLUTION */

function calcCircumfrence(radius) {
  let radiusNumber = radius;
  let radiusConvert = 2 * 3.14 * radiusNumber;
  let output = "The circumference is  " + radiusConvert;
  console.log(output);
}
calcCircumfrence(2);

function calcArea(radius) {
  let radiusNumber = radius;
  let AreaConvert = 3.14 * radiusNumber * radiusNumber;
  let output = "The Area is  " + AreaConvert;
  console.log(output);
}
calcArea(50);

// Question # 5

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

/* YOUR SOLUTION */

function celsiusToFahrenheit(celsius) {
  let celTemp = celsius;
  let celToFahr = (celTemp * 9) / 5 + 32;
  let celToFahrConvert = +celTemp + "°C " + " is " + celToFahr + "°F. ";
  console.log(celToFahrConvert);
}
celsiusToFahrenheit(50);
function fahrenheitToCelsius(fahrenheit) {
  let fahrTemp = fahrenheit;
  let fahrToCel = ((fahrTemp - 32) * 5) / 9;
  let fahToCelConvert = fahrTemp + "°F" + " is " + fahrToCel + "°C.  ";
  console.log(fahToCelConvert);
}
fahrenheitToCelsius(55);
