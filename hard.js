//  challenge: https://edabit.com/challenge/yXSTvCNen2DQHyrh6
function getLength(array) {
    var breakOut = array.toString().split(",").length
    console.log(breakOut);
}
// getLength([1, [2, 3]])
// getLength([1, [2, [3, 4]]])
// getLength([1, [2, [3, [4, [5, 6]]]]])
// getLength([1, [2], 1, [2], 1])

// !________________________________________
// ? write a function just to return element include nunmber
// https://edabit.com/challenge/eCPim4XcssdZdvs32
// source: https://stackoverflow.com/questions/3180354/regex-check-if-string-contains-at-least-one-digit
function numInStr(array) {
    var check = array.filter(e => e.match(/\d/) ? e : null)
    console.log(check);
}

// numInStr(["1a", "a", "2b", "b"])
// numInStr(["abc", "abc10"])
// numInStr(["abc", "ab10c", "a10bc", "bcd"])
// numInStr(["this is a test", "test1"])

// !________________________________________
// challenge: https://edabit.com/challenge/7pkKPYtTJzpxRMckZ
// ? create a unique example:
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
// console.log(uniqueAges)
function isPositiveDominant(array) {
    // ? CASE 1: use for loop to filter positive and negative number
    // var positiveArray = []
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] >= 0) {
    //         if (array[i] !== array[i + 1]) {
    //             var positive = array[i]
    //             positiveArray.push(positive)
    //             // console.log(positive);
    //         }
    //         else if (array[i] === array[i + 1]){
    //             var unique = array[i]
    //             positiveArray.push(unique)
                
    //             // console.log(unique);
    //         }
            
    //     }
        
    // }
    // console.log(positiveArray);


    // ? CASE 2: use for filter() to filter positive and negative number


    var positiveArray = array.filter(e => e > 0 ? e : null)
    // console.log(positiveArray);
    var uniquePositiveArray = positiveArray.filter((x, i, a) => a.indexOf(x) == i)
    // console.log(uniquePositiveArray);
    var negativeArray = array.filter(e => e < 0 ? e : null)
    var uniqueNegativeArray = negativeArray.filter((x, i, a) => a.indexOf(x) == i)
    // console.log(uniqueNegativeArray);
    if (uniquePositiveArray.length > uniqueNegativeArray.length) {
        console.log(true);
    } else {
        console.log(false);
    }
}
// isPositiveDominant([1, 1, 1, 1, -3, -3])
isPositiveDominant([1, 1, 1, 1, -3, -4])
isPositiveDominant([5, 99, 832, -3, -4])
isPositiveDominant([5, 0])
isPositiveDominant([0, -4, -1])