// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'
//@param (string) word
//@param (string) word
// @return (string) with first letter of each word capitalize
// methods I can use? - string.length, .toUpperCase(), .splice(), .split(), ' ', .shift(), .char, .join
//declare a function with two strings as parameters
//in body of function declare/initialize a variable to assigned the value of the string param(placeholders)
//write a code that will split each letter of the strings .split()
// write a code that will isolate the first letter of the string and store it as a variable for later use .shift() ? or .splice?
//write code to capitalize the first letter - .toUpperCase()
// write code to join all the letters back together - .join()
//write code that will return the strings back with first letter capitalized
//test code by calling function console.log(function string...)
// which to use? function capitalizeWords(str) {return str.replace(/\b\w/g, char => char.toUpperCase());
//which to use? function capitalizeFirstLetter(str) {return str.charAt(0).toUpperCase() + str.slice(1);


function capitalizeFirstLetter(string) { 
    return str.charAt(0).toUpperCase() + str.slice(1);
} 

//console.log(capitalizeFirstLetter(string));

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

//@param = array
//declare function. create an array of lowercase words. 
//find

function returnWordsWithE(arr) {

    let array = [];

    for (let i = 0; i < arr.length; i++) {
        let eachWord = arr[i];

        if (eachWord )
    }
    arr.forEach(element => {         
    
        counts[element] = (counts[element] || 0) + 1;     });     
        return counts;

        return arr.filter(word => word.includes('e') && !word.startsWith('e'));
    }

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

//@param - (string) string of lowercase letters


function countOfLetter(string) {
let counts = {};
  for (let char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return count;

console.log(countOfLetter(string));

