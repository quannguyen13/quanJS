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

var test = [4, 5, 3]

function testRun(array) {
    var sort = array.sort((a, b) => a - b)
    for (let i = 0; i <= sort[0]; i++) {
        console.log(i);
        for (let j = 0; j <= sort[1]; j++) {
            // console.log(j);
            for (let k = 0; k <= sort[2]; k++) {
                // console.log(k);


        }
            
        }
        }

    }

testRun(test)