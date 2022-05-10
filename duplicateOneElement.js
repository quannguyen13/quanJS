const arr1 = [1,0,2,3,0,4,5,0]
//? expected outcome arr1 = [1,0,0,2,3,0,0,4]
//! Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

function duplicateZero(){

    // step 1: find number 0 and if found then push another zero next to existed one
    const pushZero = arr1.flatMap((element) => element == 0 ? arr1.constructor(element, element) : element );
    console.log(pushZero);
     // step 2: when step 1 is completed then use slice method to remove last 3 elements
    const removeLast3 = pushZero.slice(0, pushZero.length - 3);
    console.log(removeLast3);
}
duplicateZero(arr1) 

// ! resources flatMap vs map:
// ?  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
// ? https://www.javascripttutorial.net/es-next/javascript-array-flatmap/




// Duplicate One String, just pick any one idc:
var array = ["chicken","nugget","good"];

function duplicateString(){
    // const pushString = array.flatMap(element => element == "good" ? array.constructor(element, element): element)
    // console.log(pushString);
    const randomDuplicate = array.flatMap(element => element === array[Math.floor(Math.random() * array.length)] ? array.constructor(element, element): element)
    console.log(randomDuplicate);
}
// duplicateString(array)






// Duplicate all String, any of them
//? ******************** CASE 1 ********************
function duplicateAllString(){
    const copyAllString = array.flatMap(element => array.constructor(element,element))
    console.log(copyAllString);
}
// duplicateAllString(array)





//? ******************** CASE 2 ********************

function duplicateAllString2(){
    var array2 = []
    array.forEach(element => array2.push(element,element))
    console.log(array2);
}

// duplicateAllString2(array)


// var array = ["chicken","nugget","good"];

// function duplicateElement(arr){
//     var array2 = []
//     if (item == "chicken") {
//     arr.map(item => array2.push(item, item))
//     } else {
//         console.log("no shits");
//     }
// console.log(array2);
// }

// duplicateElement(array)


// https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
// https://stackoverflow.com/questions/58513242/how-to-duplicate-elements-of-an-array-in-node-js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//remove single element