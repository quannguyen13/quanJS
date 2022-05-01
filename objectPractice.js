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
ship.missions = ['prisoners', 'stolen goods', 'unobtanium']
// What's difference between a property and a method?
// How can I view all of an object's properties?
// What is the keyword which references the context of a function/method?
// What is the default context for a function in the browser?



// ship.getThis()


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