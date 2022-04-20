function matchHouses(house) {
    var house = (house * 5) + 1
    console.log(house);
}
// matchHouses(87)



// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(number) {
    let result = 0
    for (let i = 0; i <= number; i++) {
        result += i 
    }
    console.log(result); 
}

// addUp(600)



// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
// Examples
// shiftToLeft(5, 2) ➞ 20

// shiftToLeft(10, 3) ➞ 80

// shiftToLeft(-32, 2) ➞ -128

// shiftToLeft(-6, 5) ➞ -192

// shiftToLeft(12, 4) ➞ 192

// shiftToLeft(46, 6) ➞ 2944
function shiftToLeft(a, b){
    var result = a * (Math.pow(2, b))
    console.log(result);
}

// shiftToLeft(46, 6)


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.\
function minMax(array){
    var a = Math.min(...array)
    var b = Math.max(...array)
    console.log([a, b]);
}

// minMax([1, 2, 3, 4, 5]) 




// You are given a number n. Determine whether n has exactly 3 divisors or not.
// Examples
// isExactlyThree(4) ➞ true
// // 4 has only 3 divisors: 1, 2 and 4

// isExactlyThree(12) ➞ false
// // 12 has 6 divisors: 1, 2, 3, 4, 6, 12

// isExactlyThree(25) ➞ true
// // 25 has only 3 divisors: 1, 5, 25

function isExactlyThree(number){
    var newArray = []
    for (var i = 0; i <= number; i++) {
        newArray.push(i)
    }
    var divisors = newArray.filter(e => number % e == 0 )
    console.log(divisors);

    if (number == 0){
        console.log(`ok!!! number: ${number} is invalid and there is none divisors....fuck off please...!!!`)
    }
    else if (divisors.length == 3) {
        console.log(`${true} => number: ${number} have ONLY ${divisors.length} divisors which is: ${divisors}`);
    } else {
        console.log(`${false} => number: ${number} have ${divisors.length} divisors which is: ${divisors}`);
    }

}

// isExactlyThree(6)


function canNest(array1, array2){
    var arr1Min = Math.min(...array1)
    var arr1Max = Math.max(...array1)
    var arr2Min = Math.min(...array2)
    var arr2Max = Math.max(...array2)
    if (arr1Min > arr2Min && arr1Max < arr2Max) {
        return true
    } else {
        return false
    }
}
var isNest = canNest([1, 2, 3, 4], [2, 3])
// console.log(isNest);



function detectWord(str) {
    var split = str.split("")
    // console.log(split);
    var check = split.filter(e => e == e.toLowerCase())
    var join = check.join("")
    console.log(join);
}

// detectWord("UcUNFYGaFYFYGtNUH")
// detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")
// detectWord("bEEFGBuFBRrHgUHlNFYaYr")


function largestSwap(a, b) {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i])
    
    }
    console.log(newArray);
    var split = newArray.length
    console.log(split);
}

// largestSwap(45)