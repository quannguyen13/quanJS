const sayHi = () => {
  console.log(`say Hi from sayHi()`, this);
}
const car = {
    make: 'Honda',
    model: 'Civic',
    year: 1997,
    'tire-type': 'Goodyear',
    //  add function in object
    drive: function(){
      sayHi()
      // console.log("vroom vroom");
      console.log("this from dirive function", this);
      console.log(`${this.make} ${this.model} vroom vroom`);
    },
    gps: function (location) {
      console.log(`Beep boop, driving to ${location}`);
    },
    // sayHi(){
    //   console.log("Hi");
    // },
    sayHello: () => {
      console.log("Hello");
    },
    getThis(){
      console.log(this);
    }
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
car.drive()
// car.gps("sixFlags")
// car.sayHi()
// car.sayHello()
// car.getThis()
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


const person = {
  firstName: "",
  lastName: ""
}


person.firstName = "Quan"
person.lastName = "Nguyen"
person["pets"] = ""

if (person["pets"]) {
  
  // console.log(`my name is ${person.firstName} ${person.lastName} and i used to have a dog name ${person.pets}`);
} else {
  // console.log(`my name is ${person.firstName} ${person.lastName} and i have NO pet`);
  
}

delete person["pets"]
// console.log(person);



// ? https://git.generalassemb.ly/flex-323/js-objects-and-context