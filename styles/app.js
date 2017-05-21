window.onload = function() {
	console.log("javascript ready?");
}


//============Change Word Object================//
var changeWords = {
		word: "Traci",
			displayWord: function() {
			console.log("My Word", this.word)
		},

			addLetterToEnd: function(letter) {
			this.word = this.word + (letter);
			this.displayWord();
		},

			addLetterToBeg: function(letter){
			this.word = (letter) + this.word;
			this.displayWord();

		},
			removeLetterFromEnd: function() {
			this.word = this.word.slice(0,-1);
			this.displayWord();
		
		},

			removeLetterFromBeg: function() {
			this.word = this.word.slice(1);
			this.displayWord();	
		}	

	};


var displayWordsButton = document.getElementById("displayWordsButton");
console.log(displayWordsButton);
// displayWordsButton.addEventListener("click", function(){
// 	changeWords.displayWord();
// })


//=====================Button Handler Object========================//





// var buttonHandlers = {
// 	displayWord: function() {
// 		var displayWordButton = document.getElementById("displayWordButton");
// 		console.log(displayWordButton);
// 		changeWords.displayWord();
// 	},

// 	addLetterToEnd: function() {
// 		changeWords.addLetterToEnd();
// 	},

// 	addLetterToBeg: function() {
// 		changeWords.addLetterToBeg();
// 	},

// 	removeLetterFromEnd: function() {
// 		changeWords.removeLetterFromEnd();
// 	},

// 	removeLetterFromBeg: function() {
// 		changeWords.removeLetterFromBeg();
// 	}

// };







