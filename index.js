// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

function twoWords(str){

    //let newString= str[0].toUpperCase() ;
    let newString = str[0].split(" ");
    return newString.toUpperCase()

    

    return newString;

}
console.log(twoWords('mickey mouse')); // 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

function moreThanOne(arr){
 let words = [];
 let char = "e";
    for(let i = 0; i < arr.length; i++){
        if (arr[i].includes(char) && arr[i][0]!==(char)){
        
            words.push(arr[i]);

        }
    }
        return words;

}


//console.log(moreThanOne(["ellen", "jane", "zigland", "pedestrian"])); // ["jane", "pedestrian"]

//console.log(moreThanOne(['red', 'lindsay', 'equine', 'drip'])) // ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }