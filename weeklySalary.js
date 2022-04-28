function weeklySalary(array) {
//  var check = array.filter(e => e % 2 == 0)
//  console.log(check);
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

        
    }
    console.log(regularHours);
    console.log(overTime);
    var regularH = regularHours.reduce((a ,b) => (a + b) , 0)
    var regH = regularH * 10
    var oT = overTime.reduce((a ,b) => (a + b) , 0)
    var payOT = oT * 15
    console.log(`reg: ${regularH} hours, OT after 8th: ${oT} hours`);
    console.log(`your pay: $${regH + payOT}, reg: $${regH}, OT: $${payOT}`);
}



// weeklySalary([8, 8, 8, 8, 8, 0, 0])
// weeklySalary([10, 10, 10, 10, 10, 0, 0])
weeklySalary([10, 6, 8, 10, 9, 0, 0])