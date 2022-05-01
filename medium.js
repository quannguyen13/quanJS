// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

const oddishOrEvenish = function(number){
    var split = number.toString().split("")
    var transform = split.map(e => Number(e))
    var sum = transform.reduce((a, b) => a + b, 0 )
    var check = sum % 2 == 0 ? "Evenish" : "Oddish" 
    console.log(check); 
}
// oddishOrEvenish(4433)
// oddishOrEvenish(55)
// oddishOrEvenish(373)
// oddishOrEvenish(43)


// !__________________________________________
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
//?https://edabit.com/challenge/6R6gReGTGwzpwuffD

function sevenBoom(array) {
    var transform = array.toString()
    var check = transform.includes("7")
    // console.log(transform);
    // console.log(check);
    if (check) { 
        console.log(`YES!!! It is contain 7`);
    } else {
        console.log("NOPE!!! NO number 7 existing");
    }
}
// sevenBoom([1, 2, 3, 4, 5, 6, 7])
// sevenBoom([8, 6, 33, 100]) 
// sevenBoom([2, 55, 60, 97, 86])




// !__________________________________________
// Create a function that takes an array and returns the types of values (data types) in a new array.
function arrayValuesTypes(array) {
    var newArray = []
    for (let i = 0; i < array.length; i++) {
        const element = typeof(array[i]);
        newArray.push(element)
    }
    console.log(newArray);
}
// arrayValuesTypes([1, 2, "null", []])
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])



// !__________________________________________
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
//? https://stackoverflow.com/questions/68850123/special-array-an-array-is-special-if-every-even-index-contains-an-even-number-a
// function isSpecialArray(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== i % 2) return false;
//   }
//   return true;
// }

// function isSpecialArray(arr) {
//     for(i=0; i<arr.length; i++){
//         if(!((i%2==0 && arr[i]%2==0) || (i%2==1 && arr[i]%2==1))) {
//             return false;
//         }
//     }
//     return true;
// }
function isSpecial(element, index) {
    if(index%2 == 0) {
        return element%2 == 0
    }
    else {
        return element%2 != 0
    }
}
function isSpecialArray(arr) {
    return arr.every(isSpecial);
}
var result1 = isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])
var result2 = isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])
var result3 = isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])
// console.log(result1);
// console.log(result2);
// console.log(result3);


// !__________________________________________
// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

function warOfNumbers(array) {
    var even = array.filter(e => e % 2 == 0)
    var sumEven = even.reduce((a, b) => a + b , 0)
    // console.log(sumEven);
    var odd = array.filter(e => e % 2 == 1)
    var sumOdd = odd.reduce((a, b) => a + b , 0)
    // console.log(sumOdd);
    if (sumEven > sumOdd) {
        return sumEven - sumOdd
    } else {
        return sumOdd - sumEven
    }
}

// console.log(warOfNumbers([2, 8, 7, 5]));
// console.log(warOfNumbers([12, 90, 75]));
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]));


// ? https://stackoverflow.com/questions/61711815/function-that-transforms-a-string-of-upvote-counts-into-an-array-of-numbers-in-j
function transformUpvotes(upvotes) {
    return upvotes.split(" ").map(x => {
      parsed = parseFloat(x);
      return x.endsWith("k") ? parsed * 1000 : parsed;
    });
  }
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"))



// Multiply every single one element in array
function combinations() {
    var newArray = []
    for (let i = 0; i < arguments.length; i++) {
        newArray.push(arguments[i]);
        
    }
    console.log(newArray);
    var combine = newArray.reduce((a, b) => a * b , 1)
    console.log(combine);
}

// combinations(2, 3, 4, 5)
// combinations(3, 7, 4)
// combinations(2, 3)



// Create a function that returns true if there's at least one prime number in the given range (n1 to n2 (inclusive)), false otherwise.

function primeInRange(a, b) {
    for (let i = a; i <= b; i++) {
        // let flag = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                return false
                // flag = 1
                // break
            }
            else {
                return true
            }
            
        }
        // if (i > 1 && flag == 0) {
        //     // return `yes there prime: ${i}`
        //     console.log(`yes there prime: ${i}`);
        // }

    }
}
// console.log(primeInRange(10, 15));
// console.log(primeInRange(62, 66));
// console.log(primeInRange(3, 5))

// ? https://edabit.com/challenge/mLLqf6apACKBLF3Pe
// ? https://stackoverflow.com/questions/68782156/how-to-find-the-amount-of-prime-numbers-in-a-range-of-numbers



// !__________________________________________

function sortIt(array) {
    var str = array.toString().split(",")
    var num = str.map(e => Number(e))
    console.log(str);
    console.log(num.sort());


}
// sortIt([[4], [1], [3]])
// sortIt([[3, 3.1], 4, [2], [5, 7], 1, [6, 9, 8]])


// !__________________________________________

function clone(array){
    var clone = array.concat([array])
    console.log(clone);
}
// clone([1, 1])
// clone([1, 2, 3])
// clone(["x", "y"])


// !__________________________________________

function secondLargest(array) {
    var max = array.sort((a, b) => b - a)[1];
    console.log(max);
}

// secondLargest([10, 40, 30, 20, 50])




// !__________________________________________


function backToHome(str) {
    var convert = str.split("")
    console.log(convert);
    convert[convert.length - 1] == convert[convert.length - 2] ? console.log(true): console.log(false)
}

// backToHome("NEWE")
// backToHome("NENESSWW")
// backToHome("NEESSW")




// !__________________________________________
// Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.

// Examples
// sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6


function sumDigProd() {
    var array = []
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i])
        
    }
    console.log(array);
    var convert1 = array.reduce((a, b) => a + b, 0).toString().split("").map(e => Number(e))
    var multiply1 = convert1.reduce((a, b) => a * b, 1).toString().split("").map(e => Number(e))
    var final = multiply1.reduce((a, b) => a * b, 1)
    console.log(final);
}
// sumDigProd(16, 28)
// sumDigProd(1, 2, 3, 4, 5, 6)


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

existsHigher([5, 3, 15, 22, 4], 10)
existsHigher([4, 3, 3, 3, 2, 2, 2], 4)
existsHigher([1, 2, 3, 4, 5], 8)