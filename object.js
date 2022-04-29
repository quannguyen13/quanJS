const car = {
    make: 'Honda',
    model: 'Civic',
    year: 1997,
    'tire-type': 'Goodyear',
  
  };

// console.log(car.make);
// console.log( car['make'] )
// console.log( car["tire-type"] )

const vacation = {
  where: "Viet Nam",
  tripStart: "May 15",
  tripEnd: "June 11",
  purchasedTickets: false,
  "air-plane": false

}
//  dot notation
console.log(vacation.where);
// bracket notation
console.log(vacation["where"]);


// 
function getProp(propName){
  console.log(vacation[propName]);
 
}
getProp("tripStart")
// getProp(where)