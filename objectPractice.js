const ship = {
    name: 'Millennium Falcon',
    speed: 11,
    crew: ['Han Solo', 'Chewbacca'],
    passengers: ['Leia'],
    famous: true,
    heardOfIt: function() {
      console.log("You've never heard of the millennium falcon!?");
      this.famous = false;
    },
    addPassenger: function(passenger) {
      this.passengers.push(passenger);
    },
    removePassenger: function(passenger) {
      let index = this.passengers.indexOf(passenger);
      this.passengers.splice(index, 1);
    },
    getThis(){
        console.log(this);
    }
  };

//   How do we access the ship's name?
var name = ship.name
// console.log(`ship name: ${name}`);

// How can we change the speed to 13?
ship.speed = 13
 
// console.log(`new speed: ${shipChange}`);

// What code would we run to add a passenger "Luke"?
var passenger = ship.addPassenger("Luke")
// console.log(`new passenger: ${ship.passengers}`);

// How can you remove the passenger "Leia"?
var passenger2 = ship.removePassenger("Leia")
// console.log(`remain passenger: ${ship.passengers}`);

// What code adds a new property called "missions" and set it equal to an empty object?
ship.missions = {}
// console.log(`new missons: ${ship.missions} `);

// How do we add "smuggled cargo" to the missions with 'prisoners', 'stolen goods', 'unobtanium' as a value?
ship.missions["smuggled cargo"] = ['prisoners', 'stolen goods', 'unobtanium']

// What code deletes the speed property?
delete ship.speed
// What's difference between a property and a method?
// How can I view all of an object's properties?
Object.keys(ship)
// What is the keyword which references the context of a function/method?
this
// What is the default context for a function in the browser?



// ship.getThis()

//  BIND function
const user = {
  name: 'James Reichard',
  favoriteFoods: ['Ramen', "Cap'n Crunch", 'Tacos'],
  displayFoods: function () {
    this.favoriteFoods.forEach(
      function (food) {
        console.log(`${this.name} likes ${food}`);
      }.bind(this)
    );
  },
};

user.displayFoods();




// ? CAll function
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