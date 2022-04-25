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
