// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function getFirstLetterCapital(str) {
        let words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
           let word = words[i];
            let capitalizedWord = 
    }
    result
}
// console.log(result); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
console.log(getFirstLetterCapital("hello world"))
console.log(getFirstLetterCapital("hola mundo"))
// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function getWordsWithE(arr) {
   


}
console.log(getWordsWithE(['hello','como estas','yo no se']))
// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears
function getCountOfLetters(){

}
console.log(getCountOfLetters('dfderguhbvfftttrrrf'))
// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }