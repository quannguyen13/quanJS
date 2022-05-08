

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:
// ? Example:
// color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

// There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// 10 + 4 = 14

// https://edabit.com/challenge/Np7R8F24PaqBShZc5

function colorPatternTimes(array) {
    var switchPencilsTiming = (array.length - 1)
    var numberOfColors = 0
    for (let i = 0; i < array.length; i++) {
        // if (array[i] == array[i + 1]) {
        //     numberOfColors = 1
        // }
        // else 
        if (array[i] !== array[i + 1] ){
            numberOfColors += 1;
        }
    }
    // console.log(numberOfColors);
    var colors = numberOfColors * 2
    var time = switchPencilsTiming + colors
    console.log(time);
}


// !!__________________________________________________________________________________
// !! ANDRE SOLUTION
// function colorPatternTimes(array) {  
//     let swithchColors = 0
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] !== array[i + 1] && array[i + 1] !== undefined){
//             swithchColors += 1;
//             console.log("first call", array[i],"second call", array[i + 1]);
//         }
//     }

//     let colors = array.length * 2
//     let totalTime = swithchColors + colors
//     console.log(totalTime);
// }
colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])
// colorPatternTimes(["Red", "Yellow", "Green", "Blue", "Red"])
// colorPatternTimes(["Red", "Yellow", "Green", "Blue"])
// colorPatternTimes(["Blue"])
