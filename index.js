// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function capitalize(str) {

    return str.split(' ').map(word => word[0].toUpperCase());
  }

console.log(capitalize)['mickey mouse']//=> 'Mickey Mouse'
console.log(capitalize)['kiera gonzalez'] //=> 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

function eWords(arr) {

    return arr.filter(word => word.includes('e'));
 }  

console.log(eWords)["ellen", "jane", "zigland", "pedestrian"] //=> ["jane", "pedestrian"]
console.log(eWords)['red', 'lindsay', 'equine', 'drip'] //=> ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

function letterCount(str) {
  
    return str.split('').reduce(function(acc, letter));
  }

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }