// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
// declare a function 
function upperCaseWords(string) {
//split the string into an array with two elements 
let str = string.split(" ")
return str;
}






console.log(upperCaseWords('mickey mouse'));
// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function findWordsWithMoreThanOneE(arr) {
    let result = [];
for (let word of arr) {
if (word[0] !== "e") {
    if (word[0] !== "z") {
        result.push(word)
    }
    }
}
return result;
}



const arr =  ["ellen", "jane", "zigland", "pedestrian"]
console.log(findWordsWithMoreThanOneE(arr));
//  => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears
function countOccurrences(string) {
    let obj = {}
    let str = string.split("")
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1
            continue;
        } else {
            obj[str[i]] ++
        }
        }
        return obj;
    }

console.log(countOccurrences("asciiaske"))
// let splitted = "asciiaske"
// let split = splitted.split("")
// console.log(split)
// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }