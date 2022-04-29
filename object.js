const car = {
    make: 'Honda',
    model: 'Civic',
    year: 1997,
    'tire-type': 'Goodyear',
  
  };

// console.log(car.make);
// console.log( car['make'] )
// console.log( car["tire-type"] )
// console.log( car )

const vacation = {
  where: "Viet Nam",
  tripStart: "May 15",
  tripEnd: "June 11",
  purchasedTickets: false,
  air_plane: {
        name: "Boeing",
        fullPlane: false
  }

}
//  dot notation
// console.log(vacation.where);
// console.log(vacation["purchasedTickets"]);
// bracket notation
// console.log(vacation["where"]);


// 
function getProp(propName){
  console.log(vacation[propName]);
 
}
// getProp("tripStart")
// getProp("purchasedTickets")

//? update object


vacation.where = "Tokyo"
vacation["purchasedTickets"] = true
// console.log(vacation.where);
// console.log(vacation.purchasedTickets);


//? update object

car["tire-type"] = "Toyo"
car.make = "Toyota"
car.year = 2022
car.model = "Tundra"
car.seatS = "Leather"
car.edition = "limited"
car.available = true
car.offered = false
car.smellQualify = false
// console.log( car )


// ! Delete
delete car.smellQualify
// console.log( car )



// loop thru Object
for (i in car) {
  // console.log("keys:", i, ", values:", car[i]);
}

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));
// console.log(Object.entries(vacation.air_plane));