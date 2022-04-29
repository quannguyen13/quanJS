function getVoteCount(votes) {
  var result = votes.upvotes-votes.downvotes
  console.log(result)
	};

getVoteCount({ upvotes: 13, downvotes: 0 })
getVoteCount({ upvotes: 2, downvotes: 33 })
getVoteCount({ upvotes: 132, downvotes: 132 })

// ? https://onecompiler.com/javascript/3wtyywvyv