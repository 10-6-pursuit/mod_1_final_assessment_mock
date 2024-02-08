// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
///--------MO 2/7/24-------------//

function transformStr(string) {
    for (let i = 0; i < string.length; i++) {
        return string[0].toUppercase;
    }
return transformStr
}
 console.log('mickey mouse');
 console.log('kiera gonzalez');

// // 'mickey mouse' => 'Mickey Mouse'
// // 'kiera gonzalez' => 'Kiera Gonzalez'

//-----------MO 2/7/24---------------------//


// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function findMultiEWords(arr, words) {
    let newArr = [];
    for (let i = 0; i < arr.length;  i++) {
        if (arr.words[i]==="e" >= 2) {
            return words;
        }
    
return findMultiEWords(i)
    }
}
console.log(findMultiEWords(["ellen", "jane", "zigland", "pedestrian"]))
console.log(findMultiEWords(['red', 'lindsay', 'equine', 'drip']))

//["ellen", "jane", "zigland", "pedestrian"] //=> ["jane", "pedestrian"]
//['red', 'lindsay', 'equine', 'drip'] //=> ['red'] 

//-----------MO 2/7/24---------------------//

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

function countOfLetters(string) {
    let sum = 0;
    let object = {};
        for (let i = 0; i < string.length; i++) {
            string.splice[i];
             sum + sum[i];
            }
return countOfLetters('asciiaske')
}


// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
