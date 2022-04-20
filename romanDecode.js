// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// ? https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

const romanNumeral = function (num) {
    var result = '';
    var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (var x = 0; x < rom.length; x++) {
        while (num >= ara[x]) {
          result += rom[x];
          num -= ara[x];
        }
      }
      return result;
    
}

// console.log(romanNumeral(1990))



var romanToInt = function(s) {

  const sym = { 
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (i=0; i < s.length; i++){
      const cur = sym[s[i]];
      const next = sym[s[i+1]];
      
      if (cur < next){
          result += next - cur // IV -> 5 - 1 = 4
          i++
      } else {
          result += cur
      }
  }

  return result; 
};

// console.log(romanToInt("MCMXC"))

var value = [1, 5, 10, 50, 100, 500, 1000]
var symbol = ["I","V","X","L","C","D","M",]