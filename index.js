// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

const capitalize = (str) => str.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]
// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

function getWordsWithE(words) {
    const result = [];
    for (let word of words) {
        if (word[0] !== 'e' && word.includes('e')) {
            result.push(word);
        }
    }
    return result;
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

function getCountOfLetters(str) {
    const letters = str.split('');
    const result = {};
    for (let letter of letters) {
        result[letter] = result[letter] + 1 || 1;
    }
    return result;
}