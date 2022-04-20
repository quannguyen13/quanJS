/**
* ? Input: arr = [10,2,5,3]
* ? Output: true
* ? Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
* ? Also M must be existed in arr
 * https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
 */

var array = [10,2,5,3,6,20,8,29]
var N = 20
function checkIfExistAndX2(){
    var M
    var check = array.includes(N)
        if (check) {
            var filteredNumber = array.filter(a => a == N)
            var divisible = array.find(e => filteredNumber / 2 == e)

            if (filteredNumber && divisible) {
                M = divisible
                console.log(`yes number ${filteredNumber} is existing`);
                console.log(`and it's double of number ${M} within`);
            } 
            else if (filteredNumber && !divisible) {
                console.log(`yes number ${filteredNumber} is existing but NO double within`)
            }
        } else {
            console.log(`NO, number ${N} is NOT exist`);
        }
    

}
checkIfExistAndX2(array) 

