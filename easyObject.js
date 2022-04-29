function getVoteCount(votes) {
  var result = votes.upvotes-votes.downvotes
  console.log(result)
	};

getVoteCount({ upvotes: 13, downvotes: 0 })
getVoteCount({ upvotes: 2, downvotes: 33 })
getVoteCount({ upvotes: 132, downvotes: 132 })

// ? https://onecompiler.com/javascript/3wtyywvyv

const relateToLuke = [
    {
        person: "Darth Vader",
        relation: "father"
    },
    {
        person: "Leia",
        relation: "sister"
    },
    {
        person: "Han Solo",
        relation: "brother in law"
    },
    {
        person: "R2D2",
        relation: "droid"
    },
    {
        person: "Obiwan Ken Obi",
        relation: "master"
    }
    
]

function relationToLuke(str) {
    var search = relateToLuke.filter(e => e.person == str)
    var found = search.map(ele=>ele.relation)
    console.log(`Luke, i am ${str}, your ${found} `);
}
relationToLuke("Leia")
relationToLuke("Obiwan Ken Obi")
relationToLuke("Han Solo")
relationToLuke("Darth Vader")