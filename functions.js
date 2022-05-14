/*
 * Work through each of the prompts below. Update `index.html` with the link to
 * this file to see your results in the console.
 *
 * Pro Tip: Comment out your solution to a prompt before moving on to the next
 * one.
 */

/*
 * Prompt 01:
 *
 * Create a function that prints the string "Hello World"
 */
function sayHello(){
    console.log("Hello World");
}
sayHello()
/*
 * Prompt 02:
 *
 * Create a function that takes a single parameter and logs it to the console.
 */
function sayHello(str){
    console.log(str);
}
var str = "Hello World"
sayHello(str)

/*
 * Prompt 03:
 *
 * Create a function that takes a parameter name and prints the string "Hello
 * Zakk", if 'Zakk' is passed in as the name argument.
 */
function helloName(name){
    console.log(`Hello ${name}`);
}
var name = "Zakk"
helloName(name)
/*
 * Prompt 04:
 *
 * Write a function printCool that accepts one parameter, name as an argument.
 * The function should print the name and a message saying that that person is
 * cool.
 *
 * i.e. printCool("Captain Reynolds") // => "Captain Reynolds is cool."
 */
function isCool(text){
    console.log(text + " is cool")
}
text = "Captain Steve Rogers"
isCool(text)
/*
 * Prompt 05:
 *
 * Write a function calculateCube that takes a single number and prints the
 * volume of a cube made from that number:
 *
 * i.e. calculateCube(5) // => 125
 */
function calculateCube(number){
    console.log(Math.pow(number, 3))
}
calculateCube(5)
/*
 * Prompt 06:
 *
 * Write a function isAVowel that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise. The vowel could be upper
 * or lower case.
 *
 * i.e. isAVowel("a"); // => true
 */
function isAVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}

// See if "A" is a vowel
var char = "A";

if (isAVowel(char)) {
	console.log(char + " is a vowel");
} else {
	console.log(char + " is not a vowel");
}
/*
 * Prompt 07:
 *
 * Create a function that takes a string as a parameter and returns a reversed
 * version of the string (using the reverse method):
 *
 * 
 */
// Bonus: Use an arrow function:
const reverseString = (str) =>{
    var str1 = str.split("")
    var str2 = str1.reverse("")
    var str3 = str2.join("")
    console.log(str3);
}

var str = "Ronaldo De Lima"
reverseString(str)
// *************************************************************************************************************
function reverseString(str) {
    return str.split("").reverse().join("");
}
str = "hello"
console.log(reverseString(str));


function reverseString2(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    console.log(joinArray);  // "olleh"
}
 
reverseString2("Ronaldo De Lima");
// *************************************************************************************************************


/*
 * Prompt 08:
 *
 * Write a function getTwoLengths that accepts two parameters (strings). The
 * function should return an array of numbers where each number is the length of
 * the corresponding string.
 *
 * i.e. getTwoLengths("Hank", "Hippopopalous"); // => [4, 13]
 */
function stringLengths(...arr) {
    return count = arr.map(e => e.length)
  }

console.log(stringLengths("Hank", "Hippopopalous", 'rooney', 'rio', 'ronaldo', 'vidic', 'tevez'));
/*
 * Prompt 09:
 *
 * Write a function getMultipleLengths that accepts a single parameter as an
 * argument: an array of strings. The function should return an array of numbers
 * where each number is the length of the corresponding string.
 *
 * i.e. getMultipleLengths(["hello", "what", "is", "up", "dude"]); // => [5, 4, 2, 2, 4]
 */
function getMultipleLengths(arr) {
    return count = arr.map(arr => (arr.length))
  }

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
/*
 * Prompt 10:
 *
 * Define a function maxOfThree that takes three numbers as arguments and
 * returns the largest of them. If all numbers are the same, it doesn't matter
 * which one is returned. If the two largest numbers are the same, one of them
 * should be returned.
 *
 * i.e. maxOfThree(6, 9, 1); // => 9
 */
function maxOfThree(){
// set series of numbers into array
        var newArray = [];
        for(var i=0; i < arguments.length; i++){
          newArray.push(arguments[i]);
        }
        // console.log(newArray);
// then use build-in Math.max() to find largest number in array by ES6 feature
        var maximum = Math.max(...newArray)
        console.log(maximum)
      }
maxOfThree(6, 9, 1)
/*
 * Prompt 11:
 *
 * Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
 
 * i.e. printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]); // => "Peanutbutter"
 */
function printLongestWord(str){
    var longestWord = ""
    for (let i = 0; i < str.length; i++) {
       if(str[i].length > longestWord.length){
        longestWord = str[i]
       }
    }
    console.log(longestWord);
}
str = ["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]
printLongestWord(str)
/*
 * Prompt 12:
 *
 * Create a function that takes a string as a parameter and returns the
 * uppercase version of the string (using the toUpperCase) method.
 *
 * Bonus: Use an arrow function
 */
const toUpper = (str) => {
    var upperCase = str.toUpperCase()
    return upperCase
}
var str = "toUpper function have been effected"
console.log(toUpper(str));
/*
 * Prompt 13:
 *
 * Write a function that takes a sentence as a parameter and returns the words in the sentence in reverse order.
 */
const reverseSentence = (sent) => {
    var sentence = sent.split("").reverse().join("")
    console.log(sentence);
}
var sent = "if you see this sentence have been reversed ?????????"
reverseSentence(sent)
/*
 * Prompt 14:
 *
 * Write a function that takes a phone number (as a number) and returns a formatted string. So if the number 2025171777 is pass in, the string '(202) 517-1777' will be returned
 */


/// step 1: write function that count all input numbers if more than 10 or less than 10
function digitCount(num) {
    if(num === 0 ) return 1
    var result = Math.floor(Math.log10(Math.abs(num))) + 1
    // console.log(result);
    if( result > 10 ){
        return `invalid numbers by ${result} digits. Enter 10 digits`
    }
    if( result < 10 ){
        return `invalid numbers by ${result} digits. Enter 10 digits`
    }
}

// step 2:  write function that generate 10 inputed digits to phone nunmber
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    // console.log(cleaned);
    // console.log(match);
    if (match) {
      return `your number: (${match[1]})-${match[2]}-${match[3]}`
    }
// step 3: insert count function to check if all entered digits met requirements
    return digitCount(phoneNumberString)
    
}

// var numbers = 7147695505
// var result = formatPhoneNumber(numbers)
// console.log(result);

console.log("Enter 10 digits");
process.stdin.once('data', (numbers) => {
    var phoneNumber = formatPhoneNumber(numbers)
    console.log(`the entered numbers are ${typeof(phoneNumber)}`);
    console.log(phoneNumber);
    process.exit();
});

// resource: 
// https://codelikethis.com/lessons/javascript/input-and-output






function testRun2(a, b ,c) {
    var a = 2
    var b = 1
    var c = 1
    if (a == b && b == c && a == c) {
        console.log(true);
    } else {
        console.log(false);
        
    }
}
// testRun2()