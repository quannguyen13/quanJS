function weeklySalary(array) {
    var regularHours = []
    var overTime = []
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] > 8 ){
            overTime.push(array[i] - 8)
            regularHours.push(array[i] - (array[i] - 8) )
        }
        else if (i <= 8) {
            regularHours.push(array[i])
            
        }
        var oT = overTime.reduce((a ,b) => (a + b) , 0)
        var regularH = regularHours.reduce((a ,b) => (a + b) , 0)
    }

    for (let j = 0; j <= array[5]; j++) {
        if (regularH >= 40 ) {
            var oT = overTime.reduce((a ,b) => (a + b) , j) 
        } 
        else if ( regularH < 40) {
            var regularH = regularHours.reduce((a ,b) => (a + b) , j)
        }
        var sat = j
    }
    console.log(regularHours);
    console.log(overTime);
    var regH = regularH * 10
    var payOT = oT * 15
    console.log(`reg: ${regularH} hours, weekly OT: ${oT} hours, SAT: ${sat} hours`);
    console.log(`your pay: $${regH + payOT}, reg: $${regH}, OT: $${payOT}`);

}



// weeklySalary([8, 8, 8, 8, 8, 0, 0])
// weeklySalary([8, 8, 8, 8, 8, 5, 0])
// weeklySalary([10, 10, 10, 10, 10, 5, 0])
// weeklySalary([8, 10, 9, 9, 8, 5, 0])
weeklySalary([12, 6, 5, 9, 4, 5, 0])