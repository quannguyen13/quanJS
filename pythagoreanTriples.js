// !________________________________________
// challenge: https://edabit.com/challenge/7WZBxctgouiNRYAX2
// ? source: https://www.math.net/pythagorean-triples
// ? https://tutors.com/math-tutors/geometry-help/pythagorean-triples





// https://edabit.com/challenge/vhD8xhcFfCJdi4BMs
// resource: check if 3 arrays have common elements:
// https://stackoverflow.com/questions/62547736/finding-common-elements-in-3-arrays-in-typescript
// var arr = [4, 5, 3]
// var arr = [39, 15, 36]
// var arr = [7, 12, 13]


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
    // console.log(firstArray);
    for (let j = 1; j <= sort[1]; j++) {
        if (sort[1] % j == 0) {
            secondArray.push(j)
        }
    }
    // console.log(secondArray);
    for (let k = 1; k <= sort[2]; k++) {
        if (sort[2] % k == 0) {
            thirdArray.push(k)
        }
    }
    // console.log(thirdArray);
    var data = [firstArray, secondArray, thirdArray];
    var result = data.reduce((a, b) => a.filter(c => b.includes(c)));
    // console.log(result);
    if (result.length == 1) {
        return true
    } 
    else {
        return false
    }
}
// primitiveOrNot(arr)

function isPrimPythTriple(array) {
    // console.log(array);
    var sort = array.sort((a, b) => a - b)
    var pyTriples1 =  Math.pow(sort[0],2) + Math.pow(sort[1],2)
    var pyTriples2 = Math.pow(Math.max(...sort), 2)
    // console.log(sort);
    // console.log(pyTriples1);
    // console.log(pyTriples2);
    var check = array.filter(e => e % 2 == 1)
    // console.log(check);

   
    if (check.length == 2 && pyTriples1 == pyTriples2 && primitiveOrNot(sort)) {
        return true
    } 
    else {
        return false
    }

}
var result =
// isPrimPythTriple([4, 5, 3])
// isPrimPythTriple([7, 12, 13])
// isPrimPythTriple([8, 12, 14])
// isPrimPythTriple([5, 12, 13])
isPrimPythTriple([39, 15, 36])
// isPrimPythTriple([77, 36, 85])
// isPrimPythTriple([77, 36, 44])
console.log(result);



