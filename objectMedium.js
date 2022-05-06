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