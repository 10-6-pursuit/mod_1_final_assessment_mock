// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized
function capitalizingFirstWord(str){

    
    return newString = str.split().toUpperCase(arr[0]) +  substring.slice(1);
    
}

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.
function findingSpecificlement(arr){

    let newArr = [];

    for(let i =0; i<arr.length; i++){

        if(arr[i].includes('e')){
            newArr.push(arr[i]);
        }
    }

    return newArr;

}

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears
function countEachLetter(str){

    let obj = {};

    for(let i = 0; i<str.length; i++){

    if(str[i]){
        obj[str[i]]= str[i]++;
    }else{

        obj[str[i]] = 1;
    }
}
return obj;
}
// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }