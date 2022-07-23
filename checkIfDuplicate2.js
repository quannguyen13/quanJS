// var arr = ['AAA', 'XYZ', 'AAA', 'ABC', 'XXX', 'XYZ', 'PQR']
var arr = ["Red", "Green", "Yellow", "Blue", "Blue"]
function check(arr){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            // console.log(`do first`, arr[i], arr[i + 1]);
            i++
            return true
        } else {

            return false
        }
        
    }
    
}
var checkIfDuplicate = arr.some((ele, i) => arr.indexOf(ele) !== i)
// console.log(checkIfDuplicate)
// var check = arr.map((ele => arr.indexOf(ele)))
// console.log(i);
// console.log(check(arr));


