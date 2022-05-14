
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
// https://www.tutorialspoint.com/how-to-return-object-from-an-array-with-highest-key-values-along-with-name-javascript

// ? challenge; https://edabit.com/challenge/GJD5x54NaFZwbtxQW
function getStudentsWithNamesAndTopNotes(array){
    var newArray = []
    for (let i = 0; i < array.length; i++) {
 
        // console.log(array[i].name);
        // console.log(Math.max(...array[i].notes));
        var newObject = {
            name: array[i].name,
            notes: (Math.max(...array[i].notes))
        }
        newArray.push(newObject)
    }
    // console.log(newArray)
    return newArray
}

var result = 
getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] },
    { "name": "Ronaldo", "notes": [6, 2, 8] }
  ])
// console.log(result);


// ? BONUS: same challenge, find the top one with highest notes

function topOne(array) {
        const theOne = {
           name: '',
           notes: -Infinity
        };
        array.forEach(el => {
           const { name, notes } = el;
           if(notes > theOne.notes){
              theOne.name = name;
              theOne.notes = notes;
           };
        });
        return theOne;

     
}
// console.log(topOne(result));

// !________________________________________
// challenge: https://edabit.com/challenge/7WZBxctgouiNRYAX2
// ? source: https://www.math.net/pythagorean-triples

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
var result =
// isPrimPythTriple([4, 5, 3])
// isPrimPythTriple([7, 12, 13])
// isPrimPythTriple([8, 12, 14])
// isPrimPythTriple([5, 12, 13])
isPrimPythTriple([39, 15, 36])
// isPrimPythTriple([77, 36, 85])
console.log(result);



// https://edabit.com/challenge/vhD8xhcFfCJdi4BMs