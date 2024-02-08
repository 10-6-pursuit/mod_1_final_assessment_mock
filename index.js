// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

function upperCaseFirstLastNames(str) {
    return str.split(" ").map(word => word = word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(upperCaseFirstLastNames('mickey mouse'));
console.log(upperCaseFirstLastNames('kiera gonzalez'));

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

function filterWordsContainingE(arr) {
    const newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] !== "e") {
            if (arr[i].includes("e")) {
                newArr.push(arr[i]);
            }
        } 
    }
    return newArr;
}

console.log(filterWordsContainingE(["ellen", "jane", "zigland", "pedestrian"]));
console.log(filterWordsContainingE(['red', 'lindsay', 'equine', 'drip']));

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