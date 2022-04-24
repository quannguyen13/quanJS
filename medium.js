// !__________________________________________
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
//?https://edabit.com/challenge/6R6gReGTGwzpwuffD

// function sevenBoom(array) {
//     // var transform = array.toString().split(",")
//     var transform = array.toString()
//     var check = transform.includes("7")
//     console.log(transform);
//     console.log(check);
// }
// sevenBoom([2, 55, 60, 97, 86])
function sevenBoom(array) {
    var transform = array.toString().split(",")
    // var transform = array.toString()
    var check = transform[0].includes("7")
    console.log(transform);
    console.log(transform[0].charAt(3));
    console.log(check);
}
sevenBoom([97, 68])