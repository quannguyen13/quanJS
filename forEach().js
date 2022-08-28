var array = []
for (let index = 1; index <= 10; index++) {
    array.push(index)
    
}
console.log(array);
array.forEach((e, index, newArry) => newArry[index] = e * 2 )
console.log(array);




var students = ["Dale", "Juan", "Quan"]
students.forEach((item, index, arr) => arr[index] = "fuck " + item )
console.log(students);