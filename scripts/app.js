window.onload = function() {
	console.log("javascript ready?");
}



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



// var displayWordsButton = document.getElementById("displayWordsButton");
// console.log(displayWordsButton);

// displayWordsButton.addEventListener("click", function(){
// 	changeWords.displayWord();
// })

var buttonHandlers = {
	displayWord: function() {
		changeWords.displayWord();
	},
	addLetterToEnd: function() {
		var userInputEnd = document.getElementById("addLetterToEndInput")
		changeWords.addLetterToEnd(userInputEnd.value);
		userInputEnd.value = "";
	},
	addLetterToBeg: function() {
		var userInputBeg = document.getElementById("addLetterToBegInput")
		changeWords.addLetterToBeg(userInputBeg.value);
		userInputBeg.value = "";
	},
	removeLetterFromEnd: function() {
		changeWords.removeLetterFromEnd();
	},
	removeLetterFromBeg: function() {
		changeWords.removeLetterFromBeg();
	},


};













