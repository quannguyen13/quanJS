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

const getStudentsWithNamesAndTopNotes = (array) => {
    // var name = array.map(e => e.name)
    // console.log(name);
    // var notes = array.map(e => Math.max(...e.notes))
    // console.log(notes);
    // var res = {
    //     name: '',
    //     notes: -Infinity
    //  };
    //  array.forEach(el => {
    //     const { name, notes } = el;
    //     if(total > res.total){
    //        res.name = name;
    //        res.total = total;
    //     };
    //  });
    //  return res;
    for (let i = 0; i < array.length; i++) {
        const element1 = array[i].name;
        console.log(element1);
        
        
        for (let j = 0; j < array.length; j++) {
            var element2 = Math.max(...array[j].notes)
            console.log(element2);
            
        }
    }
}
var result =
getStudentsWithNamesAndTopNotes([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ])
console.log(result);