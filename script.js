//1.Write a function generateSeries that takes a number n as input and returns an array of numbers from 1 to n.

function generateSeries(n) {
  let initialArray = [];
  if (n == 0) {
    return initialArray;
  } else if (n > 0) {
    for (let i = 1; i <= n; i++) {
      initialArray.push(i);
    }
    return initialArray;
  }
  console.log(initialArray);
}
console.log(generateSeries(5));
console.log(generateSeries(0));
console.log(generateSeries(10));

//2.Write a function calculateArea that calculates the area of a rectangle given its width and height as arguments.

function calculateArea(width, height) {
  const area = width * height;
  return area;
}
console.log(calculateArea(5, 3));
console.log(calculateArea(10, 8));
console.log(calculateArea(4, 0));

//3.Write a function filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
  const evenNumberArray = [];
  for (let i = 0; i < numbers.length; i++) {
    const arrayValue = numbers[i];
    if (arrayValue % 2 == 0) {
      evenNumberArray.push(arrayValue);
    }
  }
  return evenNumberArray;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([11, 13, 17, 20]));
console.log(filterEvenNumbers([]));

//4.Write a function capitalizeWords that takes a sentence as input and returns the sentence with the first letter of each word capitalized.
function capitalizeWords(sentence) {
  const newSentance = sentence.split(" ");
  const capitalizedWords = [];
  newSentance.forEach((eachSentance) => {
    const firstLetter = eachSentance.charAt(0);
    const remainingLetters = eachSentance.slice(1);
    const finalLetter = firstLetter.toUpperCase();
    const finalOutput = `${finalLetter}${remainingLetters}`;
    capitalizedWords.push(finalOutput);
  });
  console.log(capitalizedWords.join(" "));
}
capitalizeWords("hello world");
capitalizeWords("JavaScript is fun");
capitalizeWords("");

//5.Create an object called calculator with methods add, subtract, multiply, and divide that perform the respective operations on two numbers.
function calcFunction(numOneValue, numTwoValue) {
  const calculator = {
    numOne: numOneValue,
    numTwo: numTwoValue,
    add: function () {
      const sum = this.numOne + this.numTwo;
      console.log(sum);
    },
    subtract: function () {
      const subtract = this.numOne - this.numTwo;
      console.log(subtract);
    },
    multiply: function () {
      const multiply = this.numOne * this.numTwo;
      console.log(multiply);
    },
    divide: function () {
      const divide = this.numOne / this.numTwo;
      console.log(divide);
    },
  };
  calculator.add();
  calculator.subtract();
  calculator.multiply();
  calculator.divide();
}
calcFunction(5, 8);

//6.Write a function delayedGreeting that takes a name as input and logs a greeting message with that name after a delay of 2 seconds.
function delayedGreeting(name) {
  setTimeout(() => {
    console.log(`Hello, ${name}`);
  }, 2000);
}
delayedGreeting("Alice");

//7.Write a function divideSafely that takes two numbers as input and returns their division. Handle the case where the denominator is 0 by throwing an error.

function divideSafely(numerator, denominator) {
  if (denominator === 0) {
    console.log("Error : Denominator is zero, please give the correct number");
  } else {
    const division = numerator / denominator;
    console.log(division);
  }
}
divideSafely(10, 2);
divideSafely(8, 0);

//8.Write a function forEach that takes an array and a callback function as arguments and calls the callback function for each element in the array.

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
const numbers = [1, 2, 3, 4, 5];
forEach(numbers, (num) => {
  console.log(num * 2);
});

//9.Write an async function fetchData that fetches data from a remote API using fetch. Handle both success and error scenarios using promises.
const url =
  "https://v6.exchangerate-api.com/v6/ba1793056b601fe3922b5ff7/latest/USD";

//for Error replace url with test data url : https://api.example.com/data

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch data from server");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
fetchData(url)
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//10.Write a function calculateAverage that calculates the average of an array of numbers using the reduce function.
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  const averageValue = sum / numbers.length;
  console.log(averageValue);
}
calculateAverage([1, 2, 3, 4, 5]);
calculateAverage([10, 20, 30]);
calculateAverage([]);
