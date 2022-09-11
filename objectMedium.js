// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// ! Examples
// ? 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// ? 3 bottles of milk:

// getTotalPrice([
    // { product: "Milk", quantity: 3, price: 1.50 }
//   ]) ➞ 4.5

function getTotalPrice(array) {
    var totalBill = array.map(e => e.quantity * e.price).reduce((a, b) => a + b, 0)
    console.log(totalBill.toFixed(2));
}
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 22, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) 
// getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ])
// getTotalPrice([
//     { product: "Chocolate", quantity: 11, price: 0.10 },
//     { product: "Lollipop", quantity: 21, price: 0.20 }
//   ])




// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
// ? Example:
// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14

// https://edabit.com/challenge/Np7R8F24PaqBShZc5
function colorPatternTimes(array) {
    var switchPencilsTiming = (array.length - 1)
    var numberOfColors = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            numberOfColors = 1
        }
        else if (array[i] !== array[i + 1]){
            numberOfColors += 1;
        }
    }
    console.log(numberOfColors);
    var colors = numberOfColors * 2
    var time = switchPencilsTiming + colors
    // console.log(time);
}
// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])
// colorPatternTimes(["Red", "Yellow", "Green", "Blue", "Red"])
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"])
// colorPatternTimes(["Blue"])





// https://edabit.com/challenge/b7iHQDw72zzkmgCun


// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
// ? https://stackoverflow.com/questions/55360511/how-to-return-a-modified-object-after-updating-all-the-values-in-it
function afterNYears(obj, num) {
    // for (let k in obj){
    //     obj[k] = obj[k] + Math.abs(num)
    //    }
       
    //    console.log(obj)
    for (let [key, value] of Object.entries(obj)) {
        obj[key] = value + Math.abs(num);
      }
      
      console.log(obj);
}

// afterNYears({
//     "Joel" : 32,
//     "Fred" : 44,
//     "Reginald" : 65,
//     "Susan" : 33,
//     "Julian" : 13
//   }, 1)
// afterNYears({
//     "Baby" : 2,
//     "Child" : 8,
//     "Teenager" : 15,
//     "Adult" : 25,
//     "Elderly" : 71
//   }, 19)
// afterNYears({
//     "Genie" : 1000,
//     "Joe" : 40
//   }, 5)


//?? https://stackoverflow.com/questions/4215737/convert-array-to-object?page=1&tab=scoredesc#tab-top
// ? https://attacomsian.com/blog/javascript-convert-array-to-object
// https://edabit.com/challenge/5Yt2CrYdrJvoJFHRt
function mapping(array) {
    // var manipulate = array.reduce((a, v) => ({ ...a, [`"${v}"`]: v.toUpperCase()}), {})
    // console.log(manipulate);

var manipulate = array.reduce((p, c) => {p[c] = c.toUpperCase(); return p}, {})
    console.log(manipulate);

}
// mapping(["p", "s"])
// mapping(["a", "v", "y", "z"])






// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
// ? https://edabit.com/challenge/PWqkt9HiLcJSr6QEY
// ? https://stackoverflow.com/questions/53036177/javascript-check-if-an-array-element-is-a-number
// ? https://stackoverflow.com/questions/23359173/javascript-reduce-an-empty-array

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

function numbersSum(array) {
    var nums = array.filter(e => typeof(e) == "number")
    var sum = nums.reduce((a, b) => a + b, 0)
    console.log(sum);

}
// numbersSum([1, 2, "13", "4", "645"])
// numbersSum([true, false, "123", "75"])
// numbersSum([1, 2, 3, 4, 5, true])



// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise

// ?https://edabit.com/challenge/wikfKaQm3zP7buRA4
// ?https://stackoverflow.com/questions/7243355/how-do-i-extract-even-elements-of-an-array

// Examples
// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// Index 3 has an even number 8.



function isSpecialArray(array) {
    var evenIndex = []
    var oddIndex = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0){
            evenIndex.push(array[i]);
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (j % 2 == 1){
            oddIndex.push(array[j]);
        }
    }
    // console.log(evenIndex);
    // console.log(oddIndex);
    var even = evenIndex.every(e => e % 2 == 0)
    var odd = oddIndex.every(e => e % 2 == 1)
    // console.log(even);
    // console.log(odd);
    if (even == true && odd == true) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])
// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])
// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])




// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
// ? https://edabit.com/challenge/YT2kXSMEtACPPk35R
// ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
// Examples
// intWithinBounds(3, 1, 9) ➞ true

// intWithinBounds(6, 1, 6) ➞ false

// intWithinBounds(4.5, 3, 8) ➞ false

function intWithinBounds() {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        newArray.push(element)
    }
    var sort = newArray.sort()
    // console.log(sort);
    for (let j = 1; j <= sort.length; j++) {
        if (sort[0] <= sort[j] && sort[j] < sort[sort.length - 1] && Number.isInteger(sort[j])) {
            return true
        }
        else {
            return false
        }
        
    }
}
// console.log(
//     intWithinBounds(3, 1, 9)
// );
// console.log(
//     intWithinBounds(6, 1, 6)
// );
// console.log(
//     intWithinBounds(4.5, 3, 8)
// );



// https://www.freecodecamp.org/news/how-to-create-an-array-in-javascript/
function keysAndValues(obj) {
    var key = Object.keys(obj)
    var value = Object.values(obj)
    var newArray = new Array(key, value)
    console.log(newArray);
}
// keysAndValues({ a: 1, b: 2, c: 3 })
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// keysAndValues({ key1: true, key2: false, key3: undefined })




// https://edabit.com/challenge/48EJWLhF224na8po3
var male = {"great grandfather" : -3,
           "grandfather": -2,
           "father": -1,
           "me!": 0,
           "son": 1,
           "grandson": 2,
           "great grandson": 3
 }

var female = {"great grandmother" : -3,
           "grandmother": -2,
           "mother": -1,
           "me!": 0,
           "daughter": 1,
           "granddaughter": 2,
           "great granddaughter": 3
 }
function generation(number, str) {
    if (str == "f"){
        var result = Object.keys(female).filter(e => female[e] === number);
        console.log(result.toString());
    }
    else if (str == "m"){
        var result = Object.keys(male).filter(e => male[e] === number);
        console.log(result.toString());
    }


 }
generation(2, "f")
generation(-3, "m")
generation(1, "f")
generation(2, "m")
generation(-3, "f")
generation(1, "m")
generation(0, "m")
generation(0, "f")
// generation(6, "f")