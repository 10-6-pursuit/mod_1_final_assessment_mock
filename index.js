// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

function capitalize(word) {
  return word.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalize('mickey mouse'));
console.log(capitalize('kiera gonzalez'));
// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function filterByE(words) {
  return words.filter(word => word.includes('e') && word[0] !== 'e')

}
console.log(filterByE(["ellen", "jane", "zigland", "pedestrian"]))
console.log(filterByE(['red', 'lindsay', 'equine', 'drip']))

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

function countOccourances(str) {
  return str.split("").reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1
    return acc
     } ,{})
    }
console.log(countOccourances("asciiaske"))

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }