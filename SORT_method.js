const persons = ["Bob", "Carol", "Alice"]
// console.log(`starting: ${numbers}`);


// let output = persons.sort()

// console.log(numbers);
// console.log(output);

console.log("output " + output);


///////////////////----------------------------------------/////////////////////////

// const numbers = [2, 1, 3, 101]


let output = numbers.sort()
let output = numbers.sort((a,b) => a - b)
let output = numbers.sort((a,b) => b - a)

console.log("imput " + numbers);
console.log("output " + output);


///////////////////----------------------------------------/////////////////////////
const persons = ["Bob", "Carol", "Alice"]
const numbers = [20, 19, 33, 101]

let output = nums.sort((a,b) => parseInt(a.toString()[1]) - parseInt(b.toString()[1]) )