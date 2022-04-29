const nums = [1, 3, 5, 2]

// function reduce (sum, num){

// }
// ////------------CASE #1--------------//
var output = nums.reduce((sum, num) => {
    console.log(num)
    return sum + num
}, 0)
// console.log(output);

// ////------------CASE #2--------------//
var output = nums.reduce((sum, num) => {
    console.log(sum)
    return sum + num
}, 0)
console.log(output);

// ////------------CASE #3--------------//
// write a function to calculate sum
function sum(nums){
    var total = nums.reduce((a, b )=> a + b, 0)
    console.log(total);
}
sum(nums)

////------------/////////////////////////////--------------//
//------------CASE #1--------------//
s = "hello world"
sArr = s.split("")
console.log(sArr);


////------------CASE #2--------------//
s = "hello world"
sArr = s.split("")


for ( let i = 0; i < sArr.length; i++){
    console.log(char);
}

////------------CASE #3--------------//
s = "hello world"
sArr = s.split("")

accum = {}
for ( let i = 0; i < sArr.length; i++){
    if (char in accum){
        accum[char] += 1

    } else {
    accum[char] = 1
}
}
sArr.reduce((accum, character) => {})
console.log(accum);


////------------CASE #4--------------//
s = "hello world"
sArr = s.split("")



var output = sArr.reduce((accum, char) => { 
     if (char in accum){
    accum[char] += 1

} else {
accum[char] = 1
}
return accum
},{})

console.log(output);