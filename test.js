function isAvowel(text) {
    var letter = text.toLowerCase()
    var vowel = ["i","a","s","v","o","w","e","l"]
    var check = vowel.includes(letter) ? true : false
    console.log(check);
}

isAvowel("s")