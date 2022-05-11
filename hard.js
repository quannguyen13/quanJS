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

function isPositiveDominant(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            if (array[i] !== array[i + 1]) {
                var positive = array[i]
                // console.log("first call", array[i],"second call", array[i + 1]);
                console.log(positive);
            }
            else if (array[i] === array[i + 1]){
                var unique = array[i]
                console.log(unique);
            }

        }
        
    }
}
isPositiveDominant([1, 1, 1, 1, -3, -4])
isPositiveDominant([5, 99, 832, -3, -4])