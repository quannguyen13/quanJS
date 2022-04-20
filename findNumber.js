// find the middle number in array
// Case 1 with odd array
var array = [1, 22, 43, 20, 75, 16, 86]
function middleNumber(arr){
    arr.sort()
    var allElements = arr.length
    var roundMiddleElement = Math.round(allElements / 2)
    var middleElement = roundMiddleElement - 1
    return `middle number is ${arr[middleElement]}`;
}

// Case 1 with even array
var array2 = [1, 22, 43, 24, 75, 16, 86, 56]
function median(arr){
    arr.sort()
    var allElements = arr.length
    var leftElement = Math.round((allElements / 2) - 1)
    var rightElement = Math.round((allElements / 2))
    var median = (arr[leftElement] + arr[rightElement]) / 2
    return `median number is ${median}`;
}



// Case 3: write a function to generate both case
function foundMiddleNumber(){
    if (arr.length % 2 === 0) {
        return median(arr)
    } else {
        return middleNumber(arr)
    }
}

var arr = array
// console.log(foundMiddleNumber(arr));


// MEAN numer
// use for...in
// function mean(arr){
//     var total = 0
//     for (var i in arr) {
//         total += arr[i]
// }
// console.log(total);
// }
// mean(array)

// use for...loop
// function mean(arr){
//     var total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += array[i];
//     }
//     console.log(total / array.length);
// }

// mean(array)




// use reduce
function mean(arr){
var meanNumber = arr.reduce((a, b) => a + b)
console.log(meanNumber / arr.length);
}

// mean(array)


// MODE number
const arr1 = [1,0,2,3,0,4,4,5,2,0]
function mode(arr) {
    mf = 1
    m = 0
    var item
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                m++
            }
            if (mf < m) {
                mf = m
            }
            item = arr[i]
        }
        m = 0
    }
    console.log(`item ${item} show ${mf} times`);
}
mode(arr1)