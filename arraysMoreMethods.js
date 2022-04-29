const numbers = [
	15,
	18,
	3921,
	327,
	88,
	1235,
	1,
	55855,
	34,
	5,
	9,
	9019,
	156,
	874,
	76,
	444,
	12346
];
// arrays methods
var output = numbers.map(numbers => numbers * numbers )
console.log(output);


//---below is array object--/////
const instructors = [
	{
		name: 'Will',
		location: 'Dorchester',
		likes: ['Python', 'Bitcoin', 'software engineering']
	}, 
	{
		name: 'Billie',
		location: 'Los Angelos',
		likes: ['Coffee', 'software development', 'video games']
	}, 
	{
		name: 'Jurgen',
		location: 'Chicago',
		likes: ['skateboarding', 'software engineering', 'psychedilic rock']
	},
	{
		name: 'Paresh',
		location: 'Chicago', 
		likes: ['Javascript', 'dogs', 'golf']
	}
]
var greeting = instructors.map(instructor =>`hello ${instructor.name}`)
var coolThing = instructors.map(instructor =>`${instructor.likes[0]} is cool`)
console.log(greeting);
console.log(coolThing);

// Challenge: Can you use .forEach() to add a greeting property to each instructor object in the instructors array that greets them by their name?

instructors.forEach(instructor => instructor.greeting =`hi ${instructor.name}`)
console.log(instructors);

// -----------count length of string------------//////////////
const team = ['rooney', 'rio', 'ronaldo', 'vidic', 'tevez']
team.forEach(team => console.log(team.length))
 
///-----------------------------------------/////////////////////////////
const num = [
	15,
	18,
	3921,
	327,
	88,
]
///--------------------CASE #1 --------------/////////
function greaterThan100(num){
return num > 100
}
output1 = greaterThan100(50)
output2 = greaterThan100(500)
console.log(output1, output2); //======> result: false, true

var output = numbers.filter(greaterThan100) //=======> with function
console.log(`numbers: ${numbers}`);
console.log(`output: ${output}`);
console.log(output);


///--------------------CASE #2 --------------/////////
var output = numbers.filter(numbers => numbers > 100) //=======> without function
console.log(`numbers: ${numbers}`);
console.log(`output: ${output}`);
console.log(output);
console.log(`# of item > 100: ${output.length}`);


//--------------------CASE #3 --------------/////////
var output = numbers.map(num => num > 100) //=======> without function, with .map will result true and false
console.log(`numbers: ${numbers}`);
console.log(`output: ${output}`);
console.log(output)

function gtX(num, X=100){
	return num > X
}

var output = numbers.filter(gtX)
console.log(`numbers: ${numbers}`);
console.log(`output: ${output}`);
console.log(output);
console.log(`# of item > 100: ${output.length}`);





///////////------------------EVERY & SOME-----------////////////////
const numb = [
	15,
	18,
	3921,
	327,
	88,
]
var output = numbers.every(num => num % 2 == 0 )
console.log(output);
var output2 = numbers.some(num => num % 2 == 0 )
console.log(output2);

function isVowel(char){
	return "aerdf".includes(char)


}
output1 = isVowel("e")
output2 = isVowel("z")
console.log(output1, output2);


function isVowel(word){
	return word.split("").some(char => "aerdf".includes(char) )
}
output1 = isVowel("eel")
output2 = isVowel("zap")
output3 = isVowel("qwp")
console.log(output1, output2, output3);



//-------------------------Real Work Example----------------------------------------------------//
// tx = {title:'Tree grow in new york', date:'11-1'}
// function veryOverdue(booktx){
// 	return new Date().getDay() - booktx.date.day() > 30
// }
// overdueBooks = allBooks.filter(book => veryOverdue(book))









// 				forEach 	vs map 		vs filter          vs reduce					cs SORT						vs some/every
//return   			NO	  	 	YES		NO					yes							yes								YES
//same-lenght		n/a			yes		possibly			prolly-not					yes								NO ( return a boolean )
// order preserved	 YES		YES		YES					YES						prolly sort							n/a

// inplace

//let output = numbers.map(e => e + 1)
//console.log(output)


