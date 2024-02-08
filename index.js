// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function capitalizeWords(input){

    const words = input.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    return capitalizedWords.join(" ");
  

}

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

 function filterWordsWithE(words) {

    return words.filter(word => 
        word.includes('e') &&
        !word.startsWith('e')
        );
 }

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears


function countLetters(input){
    const letterCounts = {};

    for(const char of input){
        if (letterCounts[char]) {
            letterCounts[char]++;
    } else {
        letterCounts[char] + 1;
        }
      }
    return letterCounts;
}

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }