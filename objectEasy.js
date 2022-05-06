function getVoteCount(votes) {
  var result = votes.upvotes-votes.downvotes
  console.log(result)
	};

// getVoteCount({ upvotes: 13, downvotes: 0 })
// getVoteCount({ upvotes: 2, downvotes: 33 })
// getVoteCount({ upvotes: 132, downvotes: 132 })

// ? https://onecompiler.com/javascript/3wtyywvyv





// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."
const relateToLuke = [
    {
        person: "Darth Vader",
        relation: "father"
    },
    {
        person: "Leia",
        relation: "sister"
    },
    {
        person: "Han Solo",
        relation: "brother in law"
    },
    {
        person: "R2D2",
        relation: "droid"
    },
    {
        person: "Obiwan Ken Obi",
        relation: "master"
    }
    
]

function relationToLuke(str) {
    var search = relateToLuke.filter(e => e.person == str)
    var found = search.map(ele=>ele.relation)
    console.log(`Luke, i am ${str}, your ${found} `);
}
// relationToLuke("Leia")
// relationToLuke("Obiwan Ken Obi")
// relationToLuke("Han Solo")
// relationToLuke("Darth Vader")

const cities = [
    {
        name: "Paris",
        population: "2,140,526",
        continent: "Europe"
    },
    {
        name: "Tokyo",
        population: "13,929,286",
        continent: "Asia"
    }
]
function cityFacts(str){
    var check = cities.filter( e => e.name == str )
    var popu = check.map(e => e.population)
    var conti = check.map(e => e.continent)
    console.log(`${str} has a population of ${popu} and situated in ${conti}`);
}
// cityFacts("Paris")
// cityFacts("Tokyo")

// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

function fiftyThirtyTwenty(number){
    var obj = {
        "Needs" : number * 0.5,
        "Wants" : number * 0.3,
        "Savings" : number * 0.2,
    }

        console.log(obj);
    }

// fiftyThirtyTwenty(3280)
// fiftyThirtyTwenty(50000)
// fiftyThirtyTwenty(13450)


function maximumScore(array) {
    var check = array.map( e => e.score)
    var total = check.reduce((a, b) => a + b, 0)
    console.log((total));
}
// maximumScore([
//     { tile: "N", score: 1 },
//     { tile: "K", score: 5 },
//     { tile: "Z", score: 10 },
//     { tile: "X", score: 8 },
//     { tile: "D", score: 2 },
//     { tile: "A", score: 1 },
//     { tile: "E", score: 1 }
//   ])
//   maximumScore([
//     { tile: "B", score: 2 },
//     { tile: "V", score: 4 },
//     { tile: "F", score: 4 },
//     { tile: "U", score: 1 },
//     { tile: "D", score: 2 },
//     { tile: "O", score: 1 },
//     { tile: "U", score: 1 }
//   ])

function getBudgets(array) {
    var check = array.map(e => e.budget)
    var sum = check.reduce((a, b) => a + b, 0)
    console.log(sum);
}
// getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ]) 
// getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
//   ])


const stolenItems = {
    // tv: 30,
    // skate: 20,
    // stereo: 50,
  }

function losses(obj) {
    var check = Object.values(obj)
    if (check == 0) {
        console.log("you lucky");
    }
    else {
        var total = check.reduce((a, b) => a + b, 0)
        console.log(total);
        
    }  

}

// losses(stolenItems)

function freeShipping(obj){
    var check = Object.values(obj)
    var total = check.reduce((a, b) => a + b, 0)
    if (total > 50) {
        console.log("Yes free shipping");
    } else {
        console.log("Nah");
        
    }
}
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 })
// freeShipping({ "Flatscreen TV": 399.99 })
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })




// write a function to calculate distance to 2 points
// ? https://edabit.com/challenge/caeSeQ3K53GMQKenX
//  ? https://www.w3resource.com/javascript-exercises/javascript-math-exercise-35.php
function getDistance(){
    var array = []
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);

}
    console.log(array);
    var a = array.map(e => e.x).reduce((n,m) => m - n, 0)
    var b = array.map(e => e.y).reduce((n,m) => m - n, 0)
    var distance = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    // console.log(a);
    // console.log(b);
    console.log(distance.toFixed(3));
}
// getDistance({x: -2, y: 1}, {x: 4, y: 3})
// getDistance({x: 0, y: 0}, {x: 1, y: 1})
// getDistance({x: 10, y: -5}, {x: 8, y: 16})

// write a function to mirror given array
function mirror(array){
    var arrayClone = []
    for (i = 0; i < array.length; i++) {
        arrayClone[i] = array[i];
      }
    // console.log(arrayClone);
    // var sort = arrayClone.sort((a, b) => b - a).slice(1)
    var opposite = arrayClone.reverse().slice(1)
    console.log(opposite)
    var newArray = array.concat(opposite)
    console.log(newArray);
}
// mirror([0, 2, 4, 6])
// mirror([1, 2, 3, 4, 5])
// mirror([3, 5, 6, 7, 8])


// write a function to mirror given string array
function mirror(array){
    var arrayClone = []
    for (i = 0; i < array.length; i++) {
        arrayClone[i] = array[i];
      }
    // console.log((arrayClone));
    var opposite = arrayClone.map(e => e.split("").reverse().join("")).reverse()
    console.log(opposite);
    var result = array.concat(opposite)
    console.log(result);
}

// mirror(["abcdef10gh", "234ab567cd", "efgh890", "xyz987ijk"])


function testJackpot(array) {
    var check = array.every(e => e == array[0])
    console.log(check);
}
// testJackpot(["&&", "&", "&&&", "&&&&"])
// testJackpot(["@", "@", "@", "@"])
// testJackpot(["SS", "SS", "SS", "Ss"])
// testJackpot(["abc", "abc", "abc", "abc"])

function factorize(number) {
    var array = []
    for (let i = 0; i <= number; i++) {
        if (number % i == 0) {
            array.push(i)
        }
        
    }
    console.log(array);
}

// factorize(12)
// factorize(4)
// factorize(17)


// Write a function that returns true if a hash contains the specified key, and false otherwise.
function hasKey(obj, str) {
    var convert = Object.keys(obj).toString()
    var check = convert.includes(str)
    console.log(check);
}
// hasKey({ a: 44, b: 45, c: 46 }, "d")
// hasKey({ pot: 1, tot: 2, not: 3 }, "not")
// hasKey({ craves: true, midnight: true, snack: true }, "morning")


function calculateDifference(items, limit) {
    var convert = Object.values(items)
    var totalItems = convert.reduce((a, b) => a + b, 0)
    if (totalItems > limit) {
        var yourPay = totalItems - limit
        console.log(`your loss ${totalItems}, your cover ${limit}, you loss ${yourPay}`);
    } else {
        // var wePay = Math.abs(totalItems - limit)
        console.log(`your loss ${totalItems}, your cover ${limit}, we pay you ${totalItems}`);
        
    }
    // console.log(yourPay);
}
// calculateDifference({ "baseball bat": 20 }, 5)
// calculateDifference({ skate: 10, painting: 20 }, 19)
// calculateDifference({ tv: 200, desktop: 200, monitor: 100, table: 200 }, 1000)



// Sorting
var drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

function sortDrinkByPrice(drinks){
    var check = drinks.sort((a, b) => a.price - b.price)
    console.log(check);
}
// sortDrinkByPrice(drinks)
// => printout array

// SORT case1
// => printout object
const list = {
    "you": 100, 
    "me": 75, 
    "foo": 116, 
    "bar": 15
  };

function sort(list){
    // var sortable = Object.entries(list).sort((a, b) => a - b)
    var sortable = Object.entries(list).sort()
    var convert = Object.fromEntries(sortable)
    console.log(sortable);
    console.log(convert);
}
// ? source : Object.fromEntries()
// ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
// sort(list)

// SORT case2
// => printout object
function sort2(list) {
    
    let sorted = Object.fromEntries(
        Object.entries(list).sort( (a,b) => a[1] - b[1] )    
        ) 
        console.log('Sorted object: ', sorted) 
}
// sort2(list)



function toArray(obj) {
    var convert = Object.entries(obj)
    console.log(convert);
}
// toArray({ a: 1, b: 2 })
// toArray({ piano: 500 }, "Brutus", 400)

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
function inkLevels(obj) {
    var check = Object.values(obj)
    var remain = Math.min(...check)
    console.log(remain)
    console.log(getKeyByValue(obj, remain))

}

// inkLevels({
//     "cyan": 23,
//     "magenta": 12,
//     "yellow": 10
//   })

// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// ? https://stackoverflow.com/questions/12539574/whats-the-best-way-most-efficient-to-turn-all-the-keys-of-an-object-to-lower
function mapping(array){
    var check = array.map(e => e ? e.toUpperCase() : null )
    var newObj = Object.fromEntries(
        Object.entries(check).map(([k, v]) => [array[k], v])
      );
    console.log(newObj);
}
// mapping(["p", "s"])
// mapping(["a", "b", "c"])
// mapping(["a", "v", "y", "z"])




// Although the number of squares per roll of TP varies significantly, we'll assume: // ! each roll has 500 sheets, and the average person uses 57 sheets per day.
// Create a function that will receive an object with two key/values:
// ? integer without decimal: 
// ? https://www.codegrepper.com/code-examples/javascript/javascript+integer+without+decimal
function tpChecker(obj){
    var ppl = obj.people
    var papers = obj.tp
    var estimate = Math.floor((500 / (ppl * 57)) * papers)
    if (estimate <= 2) {
        console.log(`Your TP will only last ${estimate} days, buy more!`);
    } else {
        console.log(`Your TP will only last ${estimate} days, NO need to buy more!`);
    }
}

// tpChecker({ people: 4, tp: 1 })
// tpChecker({ people: 3, tp: 20 })
// tpChecker({ people: 4, tp: 12 })


// write a function to compare 2 objects 
// ? https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
function comparison(obj1, obj2){
    // console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;

}
var obj1 = {
    name: "Jason",
    phone: "9853759720",
    email: "jason@edabit.com"
  }

var obj2 = {
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}

// var obj2 = {
//     name: "Jason",
//     phone: "9853759720",
//     email: "jason@edabit.com"
//   }
console.log(comparison(obj1, obj2));
