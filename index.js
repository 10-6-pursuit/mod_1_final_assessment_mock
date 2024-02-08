// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function upperCaseFirstWord(string){
let stringArr = string.split(" ")
let newStr = ""
for(let i = 0;i<stringArr.length;i++){
newStr += stringArr[i][0].toUpperCase() + stringArr[i].slice(1) + " "
    }
    return newStr.trim()
}
console.log(upperCaseFirstWord("mickey mouse"))
console.log(upperCaseFirstWord("kiera gonzalez"))
// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function returnAllWordWithE(arr){
let arrWithE = []
for(let i=0;i<arr.length;i++){
    if(arr[i][0]!=="e"){
    if (arr[i].includes("e")===true){
        arrWithE.push(arr[i])
        }
    }
}
return arrWithE
}
console.log(returnAllWordWithE(["ellen", "jane", "zigland", "pedestrian"]))
// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

function strToObject(string){
let strObj = {}
let stringArr = string.split("")
for(let letters of stringArr){
    if(strObj[letters]){
        strObj[letters]++
        }else strObj[letters] = 1
    }
    return strObj
}
console.log(strToObject('asciiaske'))
// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }