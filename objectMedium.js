// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// ! Examples
// ? 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// ? 3 bottles of milk:

// getTotalPrice([
    // { product: "Milk", quantity: 3, price: 1.50 }
//   ]) ➞ 4.5

function getTotalPrice(array) {
    var totalBill = array.map(e => e.quantity * e.price).reduce((a, b) => a + b, 0)
    console.log(totalBill.toFixed(2));
}
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 22, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) 
// getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ])
// getTotalPrice([
//     { product: "Chocolate", quantity: 11, price: 0.10 },
//     { product: "Lollipop", quantity: 21, price: 0.20 }
//   ])




// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
// ? Example:
// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14

// https://edabit.com/challenge/Np7R8F24PaqBShZc5
function colorPatternTimes(array) {
    var switchPencilsTiming = (array.length - 1)
    var numberOfColors = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            numberOfColors = 1
        }
        else if (array[i] !== array[i + 1]){
            numberOfColors += 1;
        }
    }
    console.log(numberOfColors);
    var colors = numberOfColors * 2
    var time = switchPencilsTiming + colors
    // console.log(time);
}
// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])
// colorPatternTimes(["Red", "Yellow", "Green", "Blue", "Red"])
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"])
// colorPatternTimes(["Blue"])





// https://edabit.com/challenge/b7iHQDw72zzkmgCun

