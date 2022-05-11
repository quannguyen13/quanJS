//  challenge: https://edabit.com/challenge/yXSTvCNen2DQHyrh6
function getLength(array) {
    var breakOut = array.toString().split(",").length
    console.log(breakOut);
}
// getLength([1, [2, 3]])
// getLength([1, [2, [3, 4]]])
// getLength([1, [2, [3, [4, [5, 6]]]]])
// getLength([1, [2], 1, [2], 1])