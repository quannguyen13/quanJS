// var arr = ['AAA', 'XYZ', 'AAA', 'ABC', 'XXX', 'XYZ', 'PQR']
var arr = ["Red", "Green", "Yellow", "Blue", "Blue"]
var checkIfDuplicate = arr.some((ele, i) => arr.indexOf(ele) !== i)
// console.log(checkIfDuplicate)
var check = arr.map((ele => arr.indexOf(ele)))
console.log(check);



