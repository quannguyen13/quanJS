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
// ? create a unique example:
// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
// console.log(uniqueAges)
function isPositiveDominant(array) {
    var positiveArray = []
    var uniqueArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            if (array[i] !== array[i + 1]) {
                var positive = array[i]
                positiveArray.push(positive)
                // console.log(positive);
            }
            else if (array[i] === array[i + 1]){
                var unique = array[i]
                uniqueArray.push(unique)
                
                // console.log(unique);
            }
            
        }
        
    }
    var convertToUnique = uniqueArray.filter((x, i, a) => a.indexOf(x) == i)
    console.log(positiveArray);
    // console.log(uniqueArray);
    console.log(convertToUnique);
}
isPositiveDominant([1, 1, 1, 1, -3, -4])
// isPositiveDominant([5, 99, 832, -3, -4])

