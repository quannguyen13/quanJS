
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
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
function awardPrizes(obj, array) {
    var array = ["Gold", "Silver", "Bronze"]
    var values = Object.values(obj)
    // console.log(values);
    var max = Math.max(...values)
    if (max) {
        console.log(getKeyByValue(obj, array[0]));
    }
}


awardPrizes({
    "Joshua" : 45,
    "Alex" : 39,
    "Eric" : 43
  })
// 
