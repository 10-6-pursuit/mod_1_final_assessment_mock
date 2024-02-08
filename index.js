// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters, write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'

const capEveryWord = str => {
    let words = str.split(" "), capWord = [];
    for(let x of words){
       capWord.push(x[0].toUpperCase() + x.slice(1))
    }
    return capWord.join(" ");
}


// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

const wordsWithEThatDontStartWithE = arr =>{
   let notEAtBegining = arr.filter(word => word[0] !== "e");
   let withE = [];
   for (let x of notEAtBegining){
    for(let letter of x){
        if(letter === "e"){
            withE.push(x)
            break;
        }
    }
   }
   return withE;
}


// 3. Write a function that takes a string of lowercase letters, 
//and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }

const ocurrencesOnString = str => {

    let obj = {};

    for(let letter of str){
        if(obj[letter]){
            obj[letter]++
        } else {
            obj[letter] = 1;
        }
    }

    return obj;
}

