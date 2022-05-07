// var arr = ['AAA', 'XYZ', 'AAA', 'ABC', 'XXX', 'XYZ', 'PQR']
var arr = ["Red", "Green", "Yellow", "Blue", "Blue"]
var checkIfDuplicate = arr.some((ele, i) => arr.indexOf(ele) !== i)
// console.log(checkIfDuplicate)
var check = arr.map((ele => arr.indexOf(ele)))
console.log(check);



function if_duplicate_value (arr){
    for(i = 0; i < arr.length; i++){
        for(j = i + 1; j < arr.length; j++){   
            if(arr[i] == arr[j]){
                return true;  
            }
        }
    }
    return false;  
}
// console.log(if_duplicate_value(arr))

// ? https://stackoverflow.com/questions/19655975/check-if-an-array-contains-duplicate-values