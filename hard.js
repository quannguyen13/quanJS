
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
        var res = {
            name: array[i].name,
            notes: (Math.max(...array[i].notes))
        }
        newArray.push(res)
    }
    console.log(newArray)
}


getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ])





