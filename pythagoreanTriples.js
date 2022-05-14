// !________________________________________
// challenge: https://edabit.com/challenge/7WZBxctgouiNRYAX2
// ? source: https://www.math.net/pythagorean-triples
// ? https://tutors.com/math-tutors/geometry-help/pythagorean-triples

function isPrimPythTriple(array) {
    console.log(array);
    var sort = array.sort((a, b) => a - b)
    var pyTriples1 =  Math.pow(sort[0],2) + Math.pow(sort[1],2)
    var pyTriples2 = Math.pow(Math.max(...sort), 2)
    console.log(sort);
    // console.log(pyTriples1);
    // console.log(pyTriples2);
    var check = array.filter(e => e % 2 == 1)
    var check2 = array.every(e => e % 2 == 0)
    // console.log(check);
    // console.log(check2);
   
    if (check.length == 2 && pyTriples1 == pyTriples2) {
        return true
    } 
    else {
        return false
    }

}
// var result =
// isPrimPythTriple([4, 5, 3])
// isPrimPythTriple([7, 12, 13])
// isPrimPythTriple([8, 12, 14])
// isPrimPythTriple([5, 12, 13])
// isPrimPythTriple([39, 15, 36])
// isPrimPythTriple([77, 36, 85])
// console.log(result);



// https://edabit.com/challenge/vhD8xhcFfCJdi4BMs

var arr = [4, 5, 3]


function primitiveOrNot(arr) {
    var sort = arr.sort((a, b) => a - b)
    var firstArray = []
    var secondArray = []
    var thirdArray = []
    for (let i = 1; i <= sort[0]; i++) {
        if (sort[0] % i == 0) {
            firstArray.push(i)
        }
    }
    console.log(firstArray);
    for (let j = 1; j <= sort[1]; j++) {
        if (sort[1] % j == 0) {
            secondArray.push(j)
        }
    }
    console.log(secondArray);
    for (let k = 1; k <= sort[2]; k++) {
        if (sort[2] % k == 0) {
            thirdArray.push(k)
        }
    }
    console.log(thirdArray);
    var checArray = []
    for (let x = 0; x < firstArray.length; x++) {
        for (let y = 0; y < secondArray.length; y++) {
            for (let z = 0; z < thirdArray.length; z++) {
                if (firstArray[x] == secondArray[y] && thirdArray[z] == secondArray[y] && thirdArray[z] == firstArray[x]) {
                    console.log(true);
                } else {
                    console.log(false);
                }
            }
        }
        
    }
}
primitiveOrNot(arr)



function testRun2(a, b ,c) {
    var a = 2
    var b = 1
    var c = 1
    if (a == b && b == c && a == c) {
        console.log(true);
    } else {
        console.log(false);
        
    }
}
// testRun2()