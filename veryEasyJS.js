// ???https://edabit.com/challenges

function nextNumber(num) {
    var next = num + 1
    console.log(next);
}

// nextNumber(3)

const triArea = (a, b) => {
    return (a * b) / 2
   
}
// console.log(triArea(3, 2))

const yearTodays = function(age){
    var days = age * 365
    console.log(days);
}

// yearTodays(20)

function cubes(num){
    return Math.pow(num, 3)
}

// console.log(cubes(5));

var numbers = [80, 5, 100]
function getFirstElement(){
    return numbers.shift()
}
// console.log(getFirstElement(numbers));

function lessThan100(){
    var newArray = []
    for (var i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i])
    }
    console.log(newArray);
    var check = newArray.some(element => element < 100)
    console.log(check);
}
// lessThan100(83, 34)

function lessThan100(a, b){
    var add = a + b
    var check = add < 100 ? true : false
    console.log(check);
}
// lessThan100(83, 4)
// lessThan100(83, 99)

function giveMeSomething(str){
    var something = "something "
    return something.concat(str)
}
var str = "is better than nothing"
// console.log(giveMeSomething(str));


function points(a, b){
    console.log((a * 2) + (b * 3));
}
// points( 7, 5)


// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// ex: 
// comp("AB", "CD") => true
// comp("ABC", "DE") => false
// comp("hello", "edabit") => false

function comp(){
    // ! create an array to push element in to generate arry.method
    var str = []
    for (let i = 0; i < arguments.length; i++) {
        str.push(arguments[i])            
    }
    console.log(str);

    // ! compare element to each single one
//     for (let j = 0; j < str.length; j++){
//         for (let k = j + 1; k < str.length; k++) {
//             if (str[j].length == str[k].length){
//                 console.log(true); 
//             } else {
//                 console.log(false); 
//             }
            
//         }

// }

    // ! use reduce method to compare 2 elements in array
    // var check = str.reduce((a, b) => a.length === b.length ? true : false)
    // console.log(check);

    // ! use evey method to compare first element (or any indexed element) with the rest
    const check = str.every( v => v.length == str[0].length )
    console.log(check);
}

// comp("hello", "edabit")



// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function countAnimals(chickens, cows, pigs) {
    return chickens * 2, cows * 4, pigs * 4
}
// console.log(countAnimals(1, 2, 3));



// Create a function that takes three arguments prob, prize, pay and returns "true" if prob * prize > pay; otherwise return "false".

const profitableGamble = (prob, prize ,pay) => {
    if ((prob * prize) >= pay) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// profitableGamble(0.2, 50, 9)


function printArray(number) {
    var newArray = []
    for (let i = 0; i < number; i++) {
        newArray.push(i + 1)
    }
    console.log(newArray);
}

// printArray(6)

// swap two given numbers!
function swap(a, b){
    console.log([a, b] = [b, a]);
}
// swap(44, 34)




// Create a function that takes a boolean variable flag and returns it as a string.
// Examples
// ? boolToString(true) ➞ "true"

// ? boolToString(false) ➞ "false"

function boolToString() {
    // let bool = true;
    // let text = bool.toString();
    // return text
    var flag = new Boolean(true)
    return flag.toString()
}

// var result = boolToString(true)
// var typeOf = typeof(result)
// console.log(`result ${result} is ${typeOf}`);



// Create a function that returns true when num1 is equal to num2; otherwise return false.
// Examples
// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false
function isSameNum(a, b){
    return a === b ? true : false
}
// var check = isSameNum(2, 3)
// var check = isSameNum(2, "2")
// console.log(check);



function isSameNumber(array){
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
       newArray.push(arguments[i])
        
    }
    console.log(newArray);
    var check = newArray.every(e => e === newArray[0] )
    console.log(check);
}
// isSameNumber(2, "2", 2)
// isSameNumber(2, 2, 2)
// isSameNumber(2, 2, 3)



// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60

// frames(10, 1) ➞ 600

// frames(10, 25) ➞ 15000

const frames = function(a, b){
    return a * (b * 60)
}

var check = frames(10, 25)
// console.log(check);



// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true


function ifTen(a, b){
    if (a == 10 || b == 10 || a + b == 10) {
        console.log(true)
    } else {
        console.log(false)

    }
}
// ifTen(9, 1)




// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.
// Distance will be a number greater than zero.
// Return 100 if the calculated fuel turns out to be less than 100.

const calculateFuel = (distance) =>{
    var a = distance * 10
    var check = a < 100 ? 100 : a 
    console.log(check);
}

// calculateFuel(15)
// calculateFuel(2)



const maxNumber = function()  {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i])
    }
    console.log(newArray);
    // var maximum = Math.max(...newArray)
    // console.log(maximum);
    let j = 0
    for (var k = 0; k < newArray.length; k++) {  
        if (newArray[k] > j) {     
          j = newArray[k];
        }
      }
      console.log(j);
}
// maxNumber(3, 1000, 6, 5, 100)
// ? https://stackoverflow.com/questions/48606359/javascript-if-statement-inside-for-loop-finding-largest-number-from-array



// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false

function checkStringLength(){
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i]);
    }
    console.log(newArray);
    var check = newArray.every(e => e.length == newArray[0].lenght ? true : false)
    console.log(check);
}

// checkStringLength("hello", "edabit", "CodeWars", "LeetCode")


// Create a function that returns true if a string is empty and false otherwise.

function isStringEmpty(str){
    if (str == "") {
        console.log(true);
    } else {
        console.log(false);
    }
}

// isStringEmpty("")
// isStringEmpty(" ")
// isStringEmpty("a")

// ? write a function return an arry increment of all numbers in range of a min and a max number
function createRange() {
    var range = [];
    for (let x = 0; x < arguments.length; x++) {
        range.push(arguments[x])
    }
    // console.log(range);
    var highest = range.reduce((a, b) =>
       Math.max(a, b)
    )
    var lowest = range.reduce((a, b) =>
       Math.min(a, b)
    )
    for (var k = lowest; k <= highest; k++) {
      range.push(k)
    }

    return range.slice(2);
}
//   console.log(createRange(8, 20));

// ? write a function return an arry of all numbers divisible 5 in range of a maximum number
// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp?page=2&tab=trending#tab-top
function isDivisible5(number){
    var newArray = []
    for (let j = 1; j <= number; j++) {
        if (j % 5 == 0) {
            // console.log(j);
            newArray.push(j);
        }
    }
    console.log(newArray);
}
// isDivisible5(49)

function concatName(a, b){
    var concat = b.toString() + ", " + a.toString()
    return concat
     
}
// var result = concatName("Mary", "Jane")
// console.log(result);
// console.log(typeof(result));

function checkNumber(number){
    var check = number % 2 == 0 ? console.log(`number ${number} is even`) : console.log(`number ${number} is odd`)
    return check
}

var number = 21
var typeOfnumber = checkNumber(number)
// console.log(typeOfnumber);