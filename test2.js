// console.log("this is a test")
// var array = [1, 2, 3, 4, 5, 6, 7]
// var check = array.charAt(1)
// console.log(check);

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);


var array = []
for (let index = 1; index <= 10; index++) {
    array.push(index)
    
}
// console.log(array);

// const sliced1 = array.slice(2, 4)

array.forEach((e, index, newArry) => newArry[index] = e * 2 )

// console.log(array);


var students = ["Dale", "Juan", "Quan"]

students.forEach((item, index, arr) => arr[index] = "fuck " + item )
// console.log(students);
var map = students.map(e => "fuck " + e)
// console.log(map);

function count() {
    var newArray1 = []
    var newArray2 = []
    var split = sentence.split("")
    console.log(split);
    for (let i = 0; i < split.length; i++) {
        if (split[i] == "o") {
            newArray1.push(split[i])
        }  
    }
    for (let j = 0; j < split.length; j++){
        if (split[j] == "e") {
            newArray2.push(split[j])
        }
    }

    console.log([newArray1.length, newArray2.length]);
}
count(sentence)