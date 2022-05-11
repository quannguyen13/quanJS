//  challenge: https://edabit.com/challenge/yXSTvCNen2DQHyrh6
function getLength(array) {
    console.log(array.toString().split(",").length);
}
getLength([1, [2, 3]])
getLength([1, [2, [3, [4, [5, 6]]]]])
getLength([1, [2], 1, [2], 1])