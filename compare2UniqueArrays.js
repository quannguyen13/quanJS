// !________________________________________
// challenge: https://edabit.com/challenge/7pkKPYtTJzpxRMckZ


// ? create a unique array:
const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
// console.log(uniqueAges)



// ? CASE 1: use for filter() to filter positive and negative number
function isPositiveDominant(array) {
    var positiveArray = array.filter(e => e > 0 ? e : null)
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



// ? CASE 2: use for loop to filter positive and negative number
function isPositiveDominant2(array) {
    var positiveArray = []
    var negativeArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            if (array[i] !== array[i + 1]) {
                var positive = array[i]
                positiveArray.push(positive)
                // console.log(positive);
            }
            else if (array[i] === array[i + 1]){
                var unique = array[i]
                positiveArray.push(unique)
                
                // console.log(unique);
            }
            
        }
        
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] < 0) {
            var negative = array[j]
            negativeArray.push(negative)
        }
        
    }
    // console.log(positiveArray);
    // console.log(negativeArray);
    var uniquePositive = positiveArray.filter((e, i, a) => a.indexOf(e) == i)
    var uniqueNegative = negativeArray.filter((e, i, a) => a.indexOf(e) == i)
    console.log(uniquePositive);
    console.log(uniqueNegative);
        if (uniquePositive.length > uniqueNegative.length) {
            console.log(true);
        } else {
            console.log(false);
        }
}



// isPositiveDominant([1, 1, 1, 1, -3, -3])
// isPositiveDominant([1, 1, 1, 1, -3, -4])
isPositiveDominant([5, 99, 832, -3, -4])
isPositiveDominant([5, 0])
isPositiveDominant([0, -4, -1])