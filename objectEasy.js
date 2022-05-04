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

var string = "Some string";
var str_A = "MZNHUVIOEPTWFJCBXKALSDQGYR"
var str_Z = "YFTUCSQOMGKPXNDWHIVJRABZEL"
var arrayA = []
var arrayB = []
for (var i = 0; i < str_A.length; i++) {
  arrayA.push(str_A.charCodeAt(i));
}
console.log(arrayA)
// for (var j = 0; j < str_Z.length; j++) {
//     arrayB.push(str_Z.charCodeAt(j));
// }
// console.log(arrayB)

// ? https://edabit.com/challenge/yvCfLsJiAC8xXn7oP
// ? https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
// ? https://stackoverflow.com/questions/10879244/how-to-get-the-ascii-value-in-javascript-for-the-characters

var characters = {
    "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
    "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
    "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
    "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
    "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
    "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
    "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
    "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
    "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
    "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
    "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
    "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
    "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
    "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
    "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
    "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
    "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
    "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
    "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
    "126": "~",    "127": ""
    }

var str = str_A.split("")
var values = Object.values(characters)
    // console.log(str);
    // console.log(values);
// ? find object relate to matched values:
// ? https://www.codegrepper.com/code-examples/javascript/javascript+search+object.keys+for+matching+value
var match = []
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < values.length; j++) {
        if (str[i] == values[j]) {
    var key = Object.keys(characters).find(key => characters[key] === values[j])
    match.push(key)
    
}

}
    
}
console.log(match);
