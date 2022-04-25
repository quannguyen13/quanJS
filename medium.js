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
sevenBoom([1, 2, 3, 4, 5, 6, 7])
sevenBoom([8, 6, 33, 100]) 
sevenBoom([2, 55, 60, 97, 86])