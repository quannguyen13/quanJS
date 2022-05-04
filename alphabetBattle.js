// ? source: https://edabit.com/challenge/yvCfLsJiAC8xXn7oP

// Case 1: convert player's string to array number with build-in method()
var string = "Some string";
var str_A = "MZNHUVIOEPTWFJCBXKALSDQGYR"
var str_Z = "YFTUCSQOMGKPXNDWHIVJRABZEL"
var arrayA = []
var arrayB = []
for (var i = 0; i < str_A.length; i++) {
  arrayA.push(str_A.charCodeAt(i));
}
// console.log(arrayA)
// for (var j = 0; j < str_Z.length; j++) {
//     arrayB.push(str_Z.charCodeAt(j));
// }
// console.log(arrayB)

// ? https://edabit.com/challenge/yvCfLsJiAC8xXn7oP
// ? https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
// ? https://stackoverflow.com/questions/10879244/how-to-get-the-ascii-value-in-javascript-for-the-characters

// Case 2: convert player's string to array number with for-loop and characters reference
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
var transform = match.map(e => Number(e))
console.log((transform));