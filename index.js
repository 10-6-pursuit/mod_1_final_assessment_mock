// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function captilizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

}

console.log(captilizeWords('Mickey Mouse'));
// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// loop thru arr of Strings
// compare to see if the words have more than one e but do not starr with an e
// push them to my new array


function wordsWithMultiple(arrOflowerCase) {
    let newArr = []

    for (let word of arrOflowerCase) {
        if(word.includes('e') && !word[0].includes('e')) {
            newArr.push(word)
        }
    }

    return newArr;
} 

console.log(wordsWithMultiple(["ellen", "jane", "zigland", "pedestrian"]))
// 

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

function letterCount(inputStr) {
    let newObj = {}

    for (let str of inputStr) {
        if (newObj[str]) {
            newObj[str]++
        } else {
            newObj[str] = 1
        }
    }
    return newObj
}

console.log(letterCount('asciiaske'));