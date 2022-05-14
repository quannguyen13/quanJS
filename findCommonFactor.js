
// ?Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10)



// ? Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11)




// ? Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1




// ?Returns a random integer from 1 to 100:
Math.floor(Math.random() * 100) + 1;




// ? This JavaScript function always returns a random number between min (included) and max (excluded):
// Example
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
// OR:
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
// console.log(getRndInteger(1, 10));




// ? This JavaScript function always returns a random number between min and max (both included):
// Example
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
// OR:
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// console.log(getRndInteger(1, 10));




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
console.log(getRandomInt(1));
  // expected output: 0
  
console.log(Math.random());


// challenge :
// 1. write a function to find adn print most common factor of 2 given number randomly
// bonus: if available find the greatest common factor
