var arr = ["Red", "Green", "Yellow", "Blue", "Blue"]
var checkIfDuplicate = arr.some((val, i) => arr.indexOf(val) !== i)
  
// console.log(checkIfDuplicate)



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
console.log(if_duplicate_value(arr))