// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

const capWords = str => str.split(' ').map(word => word[0].toUpperCase()+word.slice(1)).join(' ');

console.log(capWords('mickey mouse'));
console.log(capWords('kiera gonzalez'));

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red']

function wordsWithEButNotInTheBeginning(arr) {
  const res = [];
  for (let word of arr) {
    if (word[0] !== 'e' && word.lastIndexOf('e') > 0) res.push(word);
  }
  return res;
}

console.log(wordsWithEButNotInTheBeginning(["ellen", "jane", "zigland", "pedestrian"]));
console.log(wordsWithEButNotInTheBeginning(['red', 'lindsay', 'equine', 'drip']));
console.log(wordsWithEButNotInTheBeginning('I am looking forward to module 2, then react, and being able to deploy webpages of simple apps'.split(' ')));



// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

function charCount(str) {
  const charObj = {};
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

console.log(charCount('asciiaske'));
console.log(charCount('i am glad that i joined pursuit at this time and that this is the cohort i am a part of'));