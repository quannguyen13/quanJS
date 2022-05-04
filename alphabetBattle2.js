// ? source: https://edabit.com/challenge/yvCfLsJiAC8xXn7oP

// Case 2: convert player's string to array number with build-in method()
var string = "Some string";
var str_A = "MZNHUVIOEPTWFJCBXKALSDQGYR"
var str_Z = "YFTUCSQOMGKPXNDWHIVJRABZEx"
var arrayA = []
var arrayB = []
for (var i = 0; i < str_A.length; i++) {
  arrayA.push(str_A.charCodeAt(i));
}
console.log(arrayA)
for (var j = 0; j < str_Z.length; j++) {
    arrayB.push(str_Z.charCodeAt(j));
}
console.log(arrayB)

// ? https://edabit.com/challenge/yvCfLsJiAC8xXn7oP
// ? https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
// ? https://stackoverflow.com/questions/10879244/how-to-get-the-ascii-value-in-javascript-for-the-characters

var playerA = []
var playerZ = []
for (let x = 0; x <= arrayA.length; x++) {
        if (arrayA[x] < arrayB[x]){
        var result2 = Math.abs(arrayB[x] - arrayA[x])
        playerZ.push(result2)
    
    }
        if (arrayA[x] > arrayB[x]) {
            var result1 = Math.abs(arrayA[x] - arrayB[x])
            playerA.push(result1)
          
        }

        // if ((arrayB[x] = arrayA[x])){
        //     var result2 = Math.abs(arrayB[x] - arrayA[x])
        //     playerZ.push(result2)
        
        // }
    
    
}
console.log(playerA);
console.log(playerZ);
var playerAscores = playerA.reduce((a, b) => a + b, 0)
var playerZscores = playerZ.reduce((a, b) => a + b, 0)
if (playerAscores > playerZscores) {
    console.log(`playerA win: ${playerAscores} scores vs playerZ: ${playerZscores} scores `);
} else if (playerAscores < playerZscores) {
    console.log(`playerZ win: ${playerZscores} scores vs playerA: ${playerAscores} scores`);
    
} else if (playerAscores = playerZscores){
    console.log(`Draw at ${playerAscores} scores`);
}