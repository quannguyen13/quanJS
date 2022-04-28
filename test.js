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

function change(array){
    var a = array.map(e => e === 8 ? 10 : e)
    console.log(a);
}
change([8, 8, 8, 8, 8, 0, 0])