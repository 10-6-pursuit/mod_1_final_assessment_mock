// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

const capitalizeFirstLetter = string => {
    let arrStr = string.split(" ");
    let newSubElem;
    let resultArray = [];
    for (let i = 0; i < arrStr.length; i++) {
        let subElement = arrStr[i].split("");
        subElement[0] = subElement[0].toUpperCase();
        newSubElem = subElement.join("");
        resultArray.push(newSubElem);
    }
    return resultArray;
}

console.log(capitalizeFirstLetter("mickey mouse"));

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

function oneOrMoreE(array) {
    let obj = {};
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
           obj[array[i]] = 0;
           for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === "e") {
                obj[array[i]]++;
            }
           }
        }
    }
    for (let key in obj) {
        if (key[0] !== "e" && obj[key] > 0) {
            result.push(key);
        }
    }
    return result;
}

console.log(oneOrMoreE(["ellen", "jane", "zigland", "pedestrian"]))

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

function countCaract(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj
}

console.log(countCaract('asciiaske'));