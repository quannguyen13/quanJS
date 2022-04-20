function isAvowel(text){
    var lower = text.toLowerCase()
    var vowel = ["i","a","s","v","o","w","e","l"]
    var check = vowel.includes(lower)
    if (check == true ) {
        console.log(`yes "${text}" is a vowel`);
    } else {
        console.log(`NO "${text}" is NOT a vowel`);
    }
}

var char = "C"
isAvowel(char)