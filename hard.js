
//  challenge: https://edabit.com/challenge/yXSTvCNen2DQHyrh6
function getLength(array) {
    var breakOut = array.toString().split(",").length
    console.log(breakOut);
}
// getLength([1, [2, 3]])
// getLength([1, [2, [3, 4]]])
// getLength([1, [2, [3, [4, [5, 6]]]]])
// getLength([1, [2], 1, [2], 1])

// !________________________________________
// ? write a function just to return element include nunmber
// https://edabit.com/challenge/eCPim4XcssdZdvs32
// source: https://stackoverflow.com/questions/3180354/regex-check-if-string-contains-at-least-one-digit
function numInStr(array) {
    var check = array.filter(e => e.match(/\d/) ? e : null)
    console.log(check);
}

// numInStr(["1a", "a", "2b", "b"])
// numInStr(["abc", "abc10"])
// numInStr(["abc", "ab10c", "a10bc", "bcd"])
// numInStr(["this is a test", "test1"])


// !________________________________________
// https://www.tutorialspoint.com/how-to-return-object-from-an-array-with-highest-key-values-along-with-name-javascript

// ? challenge; https://edabit.com/challenge/GJD5x54NaFZwbtxQW
function getStudentsWithNamesAndTopNotes(array){
    var newArray = []
    for (let i = 0; i < array.length; i++) {
 
        // console.log(array[i].name);
        // console.log(Math.max(...array[i].notes));
        var newObject = {
            name: array[i].name,
            notes: (Math.max(...array[i].notes))
        }
        newArray.push(newObject)
    }
    // console.log(newArray)
    return newArray
}

var result = 
getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] },
    { "name": "Ronaldo", "notes": [6, 2, 8] }
  ])
// console.log(result);


// ? BONUS: same challenge, find the top one with highest notes

function topOne(array) {
        const theOne = {
           name: '',
           notes: -Infinity
        };
        array.forEach(el => {
           const { name, notes } = el;
           if(notes > theOne.notes){
              theOne.name = name;
              theOne.notes = notes;
           };
        });
        return theOne;

     
}
// console.log(topOne(result));

function longestWord(str){
var split = str.split(" ")
console.log(split);
// option 1
var lgth = 0;
var longest;
for (var i = 0; i < split.length; i++) {
  if (split[i].length > lgth) {
    var lgth = split[i].length;
    longest = split[i];
  }
}
console.log(longest);


// option 2
// var longest = split.reduce((a, b) => a.length > b.length ? a : b )
// var longest = split.sort((a, b) => b.length - a.length)[0]
// console.log(longest);
}
// longestWord("Nancy is very pretty.")


function longestWord2() {
    var newArray = []
    for (let j = 0; j < arguments.length; j++) {
        const element = arguments[j];
        newArray.push(element)
    }
    console.log(newArray);
    // var longest = newArray.sort((a, b) => b.length - a.length)[0]
    // console.log(longest);
    var longest
    for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] !== newArray[j + 1] && newArray[j + 1] !== undefined) {
            longest = newArray[j]; 
            
        }
    }
    console.log(longest);
}
// longestWord2('first item', 'second item is longer than the third one', 'third longish item')





//? https://edabit.com/challenge/TkmZmXjTjiiu2iCjF
// ? convert object to array with key - value : 
// ? https://stackoverflow.com/questions/62829402/how-to-convert-object-a-to-an-array-of-objects-with-object-as-properties-and-as
// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
// }
function awardPrizes(obj) {
    // console.log(obj);
    var array = ["Gold", "Silver", "Bronze", "Participation"]
    var convertToArray = Object.entries(obj).map(([name, score]) => ({name, score}))
    // console.log(convertToArray);
   
    var keys = Object.keys(obj)
    // console.log(keys);
    var values = Object.values(obj)
    // console.log(values);
    // console.log(values.sort((a, b) => b - a));


    var max = Math.max(...values)
    var medium = values.sort((a, b) => b - a)[1]
    var third = values.sort((a, b) => b - a)[2]
    // console.log(medium);
    // console.log(third);

    for (const i of convertToArray) {
        if(i.score == max ) {
            i.score = array[0]
        
        }
        if(i.score == medium ) {
            i.score = array[1]
        
        }
        if(i.score == third ) {
            i.score = array[2]
        
        }
        if(i.score < third ) {
            i.score = array[3]
        }
    }
    console.log(Object.fromEntries(convertToArray));
    

}


// awardPrizes({
//         "Joshua" : 45,
//         "Alex" : 39,
//         "Eric" : 43
//       })
// awardPrizes({
//         "Person A" : 1,
//         "Person B" : 2,
//         "Person C" : 3,
//         "Person D" : 4,
//         "Person E" : 102
//       })

    //   



// ! function with multiple arguments
// Create a function that takes three collections of arguments and returns the sum of the product of numbers.
// ?https://edabit.com/challenge/95YiRnBSnfzSQWAuu
// ?https://stackoverflow.com/questions/33696518/javascript-function-that-takes-multiple-sets-of-arguments
// Examples
// product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

// product(10,2)(5,0)(2,3) ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3

// product(1,2)(2,3)(3,4) ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4

// product(1,2)(0,3)(3,0) ➞ 0
// 1 * 0 * 3 + 2 * 3 * 0





// function product(arg1, arg2) {

//     return function(arg3, arg4) {

//         return function(arg5, arg6) {
//             var result1 = (arg1 * arg3 * arg5) + (arg2 * arg4 * arg6)
//             console.log(result1);
//         }
        
//     }

// }
function product(...arg1) {

    return function(...arg2) {

        return function(...arg3) {
            var result2 = (arg1[0] * arg2[0] * arg3[0]) + (arg1[1] * arg2[1] * arg3[1])
            console.log(result2);
        }
        
    }

}

// product(1,2)(1,1)(2,3)
// product(10,2)(5,0)(2,3)
// product(1,2)(2,3)(3,4)
// product(1,2)(0,3)(3,0)



// Create a function that converts Celsius to Fahrenheit and vice versa.

function convert(str) {
    var manipulation = str.split("")
    var numbers = manipulation.slice(0, -2)
    // var unit = manipulation.splice(-1)
    var unit = manipulation.pop().toUpperCase()
    console.log(numbers);
    console.log(unit);
    if (unit == "C") {
        console.log(true);
    } else {
        console.log(false);
        
    }
}
// convert("35°C")
convert("1353°c")