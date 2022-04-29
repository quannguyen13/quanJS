function isAvowel(text) {
    var letter = text.toLowerCase()
    var vowel = ["i","a","s","v","o","w","e","l"]
    var check = vowel.includes(letter) ? true : false
    console.log(check);
}

// isAvowel("s")

var array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(array.at(1));