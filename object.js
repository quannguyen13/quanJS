// const sayHi = () => {
//   console.log(`say Hi from sayHi()`, this);
// }
function sayHi(){
  return `say Hi from sayHi() \n ${this.make}`
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

var result = sayHi.bind(car)
// console.log(result());
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
// car.drive()
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


// const person = {
//   firstName: "",
//   lastName: ""
// }


// person.firstName = "Quan"
// person.lastName = "Nguyen"
// person["pets"] = ""

// if (person["pets"]) {
  
  // console.log(`my name is ${person.firstName} ${person.lastName} and i used to have a dog name ${person.pets}`);
// } else {
  // console.log(`my name is ${person.firstName} ${person.lastName} and i have NO pet`);
  
// }

// delete person["pets"]
// console.log(person);



// ? https://git.generalassemb.ly/flex-323/js-objects-and-context



// this keywords
// const user = {
//   fullName: 'James Reichard',
//   favoriteFood: 'Rice pudding',
//   sayName: function () {
//     console.log(`My name is ${this.fullName}.`);
//   },
//   sayHello: function () {
//     console.log(this);
//     console.log(
//       `Hi my name is ${this.fullName} and my favorite food is ${this.favoriteFood}.`
//     );
//   },
// };

// user.sayHello();


const user = {
  userName: 'christensen',
  password: 'password1234',
  isSignedIn: false,
  signIn: function(pwd, userAccount) {
    if (pwd === this.password && userAccount === this.userName ) {
      console.log(`Welcome, user: ${this.userName}`);
      this.isSignedIn = true;
    } else {
      console.log("Nah");
    }
  },
  signOut: function() {
    this.isSignedIn = false;
  },
};
// console.log("Before sign in", user.isSignedIn);
// user.signIn('tacobeelll', 'christensen' )
// // user.signIn('password1234', 'christensen' )

// console.log("POST sign in", user.isSignedIn);

// user.signOut();
// console.log("POST sign out", user.isSignedIn);
function sayHello1() {
  console.log(`Hi! My name is ${this.name}`);
}

const person1 = { name: 'Manatee the Railyard Toreador' };
const cat1 = { name: 'Hobbles McGillicudy' };
sayHello1.call(person1);
sayHello1.call(cat1);
// call also lets us pass in the arguments to the function:

function sayHello2(favColor) {
  console.log(`Hi! My name is ${this.name} and I like ${favColor}`);
}

const person2 = { name: 'Manatee the Railyard Toreador' };
const cat2 = { name: 'Hobbles McGillicudy' };
sayHello2.call(person2, 'blue');
sayHello2.call(cat2, 'peachpuff');