console.log("this is a test")
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
console.log(array);

// const sliced1 = array.slice(2, 4)

array.forEach((e, index, newArry) => newArry[index] = e * 2 )

console.log(array);


var students = ["Dale", "Juan", "Quan"]

students.forEach((item, index, arr) => arr[index] = "fuck " + item )
// console.log(students);
var map = students.map(e => "fuck " + e)
// console.log(map);

var number = 100
var newArray = []
for (let i = 0; i <= number; i++) {
    const element = array[i];
    newArray.push(element)
}
console.log(newArray);