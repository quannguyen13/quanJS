function sevenBoom(array) {
    var transform = array.toString()
    var check = transform.includes("7")
    // console.log(transform);
    // console.log(check);
    if (check) { 
        for (let i = 0; i < transform.length; i++) {
            if (i == transform.parseFloat("7")) {
                console.log(i);
            }
        }
    } else {
        console.log("NOPE!!! NO number 7 existing");
    }
}
// sevenBoom([1, 2, 3, 4, 5, 6, 7])
// sevenBoom([8, 6, 33, 100]) 
// sevenBoom([2, 55, 60, 97, 86])

// import 'core-js/features/array/at'
var array = [8, 8, 8, 8, 8, 10, 11]
let index = -2
console.log(array.indexOf(5));