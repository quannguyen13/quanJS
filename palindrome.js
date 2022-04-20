// 1. Check if a String is a Palindrome (ie. Reversing a String)
// Let's say you get an array of strings, arr, and for each string, we want to determine if it is a palindrome.
// Return "True" or "False" for each item.
arr = ["The quick brown fox jumped over the sleeping dog", "Oozy rat in a sanitary zoo", "Carla loves chocolate"]

function palindromeChecker(arr) {
    arr.forEach(element => {
       element = element.toLowerCase()
       element = element.replace(/\s/g,'') 
       newElement = element.split('').reverse().join('')

       if(newElement == element ){
           console.log("this is Palindrome");
           return true
       } else {
           console.log("nah");
           return false
       }
    });

}
palindromeChecker(arr)