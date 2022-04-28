// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(array) {
    var check = array.filter(e => e.match(/\d+/))
    console.log(check);

}

numInStr(["erfg", "ab10ed"])
numInStr(["abc", "ab10c", "a10bc", "bcd"])
numInStr(["this is a test", "test1"])
numInStr(["1a", "a", "2b", "b"]) 