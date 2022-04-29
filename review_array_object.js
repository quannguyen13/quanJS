
// Arrays vs Object
// Object pros:
// organized data, describe something, mutable, hetrogenous

dog = {name:'Winston', age:13, favoriteTreat:'milkbone'}

// arrays good for homegenous
/* bad */ ['Winston', 13, 'milkbone']
/* good: */ [13, 15, 8, 20]

// array ,methods - below is array of object
animals = [
    {name:'Winston ', age:13, favoriteTreat:'milkbone', trick: ['sit']}, 
    {name:'fido ', age:7, favoriteTreat:'peanutbutter'}

]


 arr = [1,2,3]

 for ( let i = 0; i < arr.length; i++){
     console.log(arr[i]);
 }
//  ---- or console.log(arr[2])---/

 arr = [
     [1,2,3],
     [4,5,6],
     [7,8,9],
 ]
//  console.log(arr[1]);
//  console.log([4,5,6][1]);

 for ( let i = 0; i < arr.length; i++){
     console.log(arr[i][0]);
 }




 arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
arr.forEach(x => {x.push(99)}) ////===> x is just a name, can b named --//
console.log(arr);

 console.log(arr[1]);
 console.log([4,5,6][1]);

for ( let i = 0; i < arr.length; i++){
for ( let j = 0; j < arr[i].length; j++){
    console.log(arr[i][j]);
}
}

for ( let i = 0; i < arr.length; i++){
    for ( let j = 0; j < arr[i].length; j++){
        console.log(arr[j][i]);
       
    }
    }


// arrow function
var curly = elem => {return elem + 1}
var straight = elem => elem + 1
output1 = curly(10)
output2 = straight(10)
console.log(output1 + " | " + output2);



////////////-------------------//////////////////
   console.log(arr1 = [99, 66, 44, 33])
   console.log(arr1.indexOf(44))


const arr = [
    [1,2,3,5],
    [4,5,6,5],
    [7,8,9,5],
]
// var output = arr.forEach(elem => {console.log(elem.length)})
// var output = arr.map(elem => Math.max(...elem))

console.log(`arr: ${arr}`);
console.log(`output: ${output}`);