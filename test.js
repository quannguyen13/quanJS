function isAvowel(text) {
    var letter = text.toLowerCase()
    var vowel = ["i","a","s","v","o","w","e","l"]
    var check = vowel.includes(letter) ? true : false
    console.log(check);
}

// isAvowel("s")

var array = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(array.at(1));

var numbers = [803, 803, 803, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 803, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 803, 803, 803, 803, 803, 803, 903, 803, 803,
803, 803, 803, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 883, 803, 803, 803, 803, 803, 803, 803, 803,
803, 303, 803, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 803, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 308, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 803, 803, 803, 803, 803, 803, 803, 803, 803,
803, 803, 803, 803, 803, 803, 803, 803, 803, 888, 803]

function check(numbers) {
    var newArray = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 803 ) {
             newArray.push(numbers[i]);
        }
    }
    console.log(newArray);

}
check(numbers)