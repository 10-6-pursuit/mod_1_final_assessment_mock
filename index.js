// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

function wordsToUpperCase(str) {
  const arr = str.split(" ");
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

console.log(wordsToUpperCase('mickey mouse')); // 'mickey mouse' => 'Mickey Mouse'

console.log(wordsToUpperCase('kiera gonzalez')); // 'kiera gonzalez' => 'Kiera Gonzalez'


// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
//Find if it has more than one E, but that doesn't start with 'e'
  //if arr[0] !== 'e' && then the expression goes here

function moreThanOneE(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].includes('e') && arr[i][0] !== 'e') {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(moreThanOneE(["ellen", "jane", "zigland", "pedestrian"])); //["jane", "pedestrian"]/

console.log(moreThanOneE(['red', 'lindsay', 'equine', 'drip'])); // ['red'] 

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

function countOfEachLetter(str) {
  let obj = {};
  for(let char of str) {
    obj[char] ? obj[char]++ : obj[char] = 1;
  }
  return obj;
}

console.log(countOfEachLetter('asciiaske'));

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }