// return the third distinct maximum number in given array, if not exist the return the maximum number
// example:
// nums = [3, 2, 1]
// output: 1
// explanation: first max = 3, second max = 2. third max = 1


var numbers = [2, 1, 3]
function thirdMax(array) {
    if (array.length >= 3) {
        var third = array.sort((a, b) => b - a).slice(0, 3)[2]
        var found = array.indexOf(third)
        console.log(found)
    } else {
        var max = Math.max(...array)
        console.log(max);
    }
}
thirdMax(numbers)