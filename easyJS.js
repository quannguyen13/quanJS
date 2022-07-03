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


function canNest(arr1, arr2){
    var arr1Min = Math.min(...arr1)
    var arr1Max = Math.max(...arr1)
    var arr2Min = Math.min(...arr2)
    var arr2Max = Math.max(...arr2)
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



// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.\
// example:
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
function largestSwap(number) {
    var num = number.toString().split("").reverse().join("")
    return num < number ? true : false

}
// console.log(largestSwap(53));



// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
function charCount(myChar, str) {
	let count = 0;
	for (let i=0; i<str.length; i++) {
		if (str.charAt(i) === myChar) {
			count++;
		}
	}
	console.log(count);
}
// charCount("c", "Chamber of secrets") 


// Create a function to return the amount of potatoes there are in a string.

function potatoes(str) {
	return str.split("potato").length - 1
}
// console.log(potatoes("potatopotato"));

function spoonerise(str){
    var split = str.split("")
    console.log((split));
}


// spoonerise("history lecture") 

// Create a function which returns the number of true values there are in an array.
function countTrue(array){
    var count = array.reduce((total, e) => (e == true ? total+1 : total), 0)
    console.log(count);
}
// countTrue([true, false, false, true, false])



// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
function num_of_digits(number){
    return number.toString()
}
// var result = num_of_digits(1305981031)
// console.log(result.length);




// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
function filterArray(array){

    var newArray = []
    for (let i = 0; i < array.length; i++) {
        if( array[i] !== array[i].toString()){
            newArray.push(array[i])
        } else {
            null
        }
    }
    console.log(newArray)
}

// filterArray([1, "a", "b", 0, 15])
// filterArray([1, 2, "a", "b"])
// filterArray([1, 2, "aasf", "1", "123", 123])

const seriesResistance = (array) => {
    var result = array.reduce(((a, b) => a + b), 0)
    if (result == 1) {
        var n = result.toFixed(1)
        console.log(`${n} ohm`);
    } else {
        console.log(`${result} ohms`);
    }
}

// seriesResistance([1, 5, 6, 3])
// seriesResistance([16, 3.5, 6])
// seriesResistance([0.5, 0.5])




// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(number){
    var a = number / 2
    var b = number / 2
    // if (number % 2 == 0) {
    //     console.log([a, b]);
    // } else {
    //     console.log([Math.floor(a), Math.round(b)]);
    // }
    var check = number % 2 == 0 ? ([a, b]) : ([Math.floor(a), Math.round(b)])
    console.log(check); 
}
// numberSplit(4)
// numberSplit(11)
// numberSplit(-9)



function toArray(obj) {
    var convert = Object.entries(obj)
    console.log(convert);
}
// toArray({ a: 1, b: 2 }) 
// toArray({ shrimp: 15, tots: 12 })
// toArray({})


function add_less(str) {
    return str + "less"
}
// console.log(add_less("fear"));




// Create a function that concatenates n input arrays, where n is variable.
// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

// ! source: https://stackoverflow.com/questions/45113915/javascript-join-arrays-of-an-array-with-concat-method-instead-of-push-method
// CASE 1
function concat() {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i])
        
    }
    var transform = newArray.reduce((a, b) => a.concat(b))
    console.log((transform));
}
// concat([1, 2, 3], [4, 5], [6, 7]) 
// concat([1], [2], [3], [4], [5], [6], [7])
// concat([1, 2], [3, 4])
// concat([4, 4, 4, 4, 4])


// CASE 2
function joinArrayOfArrays() {
    var joined = [];
    for (var i = 0; i < arguments.length; i++) {
      for (var k = 0; k < arguments[i].length; k++) {
        joined.push(arguments[i][k]);
      }
    } 
    console.log(joined);
  }
  
// joinArrayOfArrays([1, 4], [true, false], ['x', 'y']);


// CASE 3
function joinArrayOfArrays() {
    var joined = [];
    for (var i = 0; i < arguments.length; i++) {
      joined = joined.concat(arguments[i]) // concat sub array
    } 
    return joined;
  }
  
// console.log(
//     joinArrayOfArrays([1], [2], [3], [4], [5], [6], [7])
//   );


//   Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
//? arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

//? arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

//? arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

function arrayOfMultiples(number, length){
    var newArray = []
    for (var i = number; i <= number * length; i++) {
        if (i % number == 0 ) {
            // console.log(i);
            newArray.push(i)
        }
    }
    console.log(newArray);
}
// arrayOfMultiples(7, 5)
// arrayOfMultiples(12, 10)
// arrayOfMultiples(17, 6)



// !__________________________________________

// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// Examples
// existsHigher([5, 3, 15, 22, 4], 10) ➞ true

// existsHigher([1, 2, 3, 4, 5], 8) ➞ false

// existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true

// existsHigher([], 5) ➞ false
function existsHigher() {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i]);
        
    }
    var check = newArray[0].some(e => e > newArray[1])
    console.log(check);
}

// existsHigher([5, 3, 15, 22, 4], 10)
// existsHigher([4, 3, 3, 3, 2, 2, 2], 4)
// existsHigher([1, 2, 3, 4, 5], 8)



// !__________________________________________


function oddSum(array) {
    for (let i = 0; i < array.length; i++) {
        if ((array[i] + array[i+1]) % 2 == 0 ) {
            console.log(true);
        } else {
            console.log(false);
        }
        
    }

}

// oddSum([11, 15, 6, 8, 9, 10])
// oddSum([12, 21, 5, 9, 65, 32])
// oddSum([1, 2, 3, 4, 5, 6])


function evenOddPartition(array) {
    var even = []
    var odd = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 ) {
            even.push(array[i])
        } else {
            odd.push(array[i])
        }
        
    }
    console.log([even, odd]);
}

// evenOddPartition([5, 8, 9, 2, 0])
// evenOddPartition([1, 0, 1, 0, 1, 0])
// evenOddPartition([1, 3, 5, 7, 9])
// evenOddPartition([])



function testRun2(a, b ,c) {
    var a = 2
    var b = 1
    var c = 1
    if (a == b && b == c && a == c) {
        console.log(true);
    } else {
        console.log(false);
        
    }
}
// testRun2()


// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(number) {
    var newArray = []
    for (let i = 1; i <= number ; i++) {
        const element = i;
        newArray.push(element)
    }
    // console.log(newArray);
    var sum = newArray.reduce((a, b) => a + b, 0)
    console.log(sum);
}

// addUp(4)
// addUp(13)
// addUp(500)
// addUp(600)



// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
//? challenge: https://edabit.com/challenge/PBXe4hLP3mbbMEFt8
// resource: https://bobbyhadz.com/blog/javascript-convert-array-of-strings-to-array-of-numbers#:~:text=To%20convert%20an%20array%20of%20strings%20to%20an%20array%20of%20numbers%3A&text=Use%20the%20forEach()%20method,it%20to%20the%20numbers%20array.
// Examples
// highLow("1 2 3 4 5") ➞ "5 1"

// highLow("1 2 -3 4 5") ➞ "5 -3"

// highLow("1 9 3 4 -5") ➞ "9 -5"

// highLow("13") ➞ "13 13"


function highLow(str) {
    var newArray = []
    var edit = str.split(" ")
    // console.log(edit);
    edit.forEach(e => newArray.push(Number(e)))
    // console.log(newArray);
    var a = Math.max(...newArray)
    var b = Math.min(...newArray)
    // console.log(a);
    // console.log(b);
    var newArray2 = [b, a]
    var convertToString = newArray2.sort((x, y) => y - x).toString().split(",").join(" ")
    console.log(convertToString);
}
// highLow("1 2 3 4 5")
// highLow("1 2 -3 4 5")
// highLow("1 9 3 4 -5")
// highLow("13")


// Create a function that returns the mean of all digits.
// ? https://edabit.com/challenge/JAgtuPDXj6BrDMxa5
// The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
// The mean will always be an integer.
function mean(number)   {
    var newArray = []    
    var str = number.toString().split("")
    str.forEach(e => newArray.push(Number(e)))
    // console.log(newArray);
    var meanNumber = (newArray.reduce((a, b) => a + b)) / newArray.length
    console.log(meanNumber);
}
// mean(42)
// mean(12345)
// mean(666)







// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
// ? https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
// Examples
// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

function missingNum(array) {
    



}


// Create a function that takes two arrays and insert the second array in the middle of the first array.
// ? flat() method
// ? https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
// ? https://stackoverflow.com/questions/5080028/what-is-the-most-efficient-way-to-concatenate-n-arrays
function tuckIn() {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        newArray.push(element)
    }
    // console.log(newArray);
    var merged = newArray.flat(Infinity)
    var sort = merged.sort((a, b) => a - b)
    // console.log(merged);
    console.log(sort);
}
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9], [11, 12, 13, 14, 15])
// tuckIn([15,150], [45, 75, 35])
// tuckIn([[1, 2], [5, 6]], [[3, 4]], [[[7, 8, 9, 10]]], [[[[11, 12], [13, 14, 15]]]])
// tuckIn([[1, 2], [5, 6]], [[3, 4]])



function acceptIntoMovie(age, isSupervised) {
    if (age < 15 && isSupervised == true) {
        console.log(true);
    }
    else if (age >= 15 && isSupervised == false || isSupervised == true ) {
        console.log(true);
    } 
    else {
        console.log(false);
    }
}

// acceptIntoMovie(14, true)
// acceptIntoMovie(14, false)
// acceptIntoMovie(16, false)




// write a function return another function ( function inside function )
// Write a function redundant that takes in a string str and returns a function that returns str.
// ? https://edabit.com/challenge/hzxN9bAebBPNqdQto
// ? https://stackoverflow.com/questions/55905677/how-to-call-a-function-that-returns-another-function-in-javascript
function redundant(str) {
    var a = str
        return function() {
            console.log(`"${a}"`);
    }
}
    
// const f1 = redundant("apple")
// f1() 
// const f2 = redundant("pear")
// f2()
// const f3 = redundant("")
// f3()


function sortIt(arr) {

    var sorting = arr.sort((a, b) => a - b)
    console.log(sorting);
}
sortIt([4, 1, 3])
sortIt([4, [1], 3])
sortIt([[4], [1], [3]])
sortIt([[4], 1, [3]])
sortIt([[3], 4, [2], [5], 1, 6])
