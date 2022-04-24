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
    // var transform = array.toString().split(",")
    var transform = array.toString()
    var check = transform.includes("7")
    console.log(transform);
    console.log(check);
    if (check) { 
        for (let i = 0; i < transform.length; i++) {

            console.log(`YES!!! number: ${transform[i]} contain 7`);
        }
    } else {
        console.log("NOPE!!! NO number 7 existing");
    }
}
sevenBoom([2, 55, 60, 97, 86])