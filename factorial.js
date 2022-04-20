
function factorial(n){
    for (let i = n - 1; i > 0 ; i-- ){
        var result = (n *= i);
    }
    console.log(result);
}
factorial(11)
