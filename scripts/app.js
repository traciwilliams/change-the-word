window.onload = function() {
	console.log("javascript ready?");
}


var changeWords = {
		//word: "ab",
		word: ["ab"],
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
		},

			startAgain: function() {
				this.word = "";
				this.displayWord();
		}
	};

var view = {
	displayWord: function() {
		// for (var i = 0; i < word.length; i++) {
		var wordUl = document.querySelector("ul");	
		var wordLi = document.createElement("li"); 
		wordLi.textContent = changeWords.word; //text content from the array
		wordUl.appendChild(wordLi);
	// }
  }	
};



var buttonHandlers = {
	displayWord: function() {
		var userWord = document.getElementById("userWord");
		changeWords.displayWord(userWord.value);
		view.displayWord();
	},
	addLetterToEnd: function() {
		var userInputEnd = document.getElementById("addLetterToEndInput")
		changeWords.addLetterToEnd(userInputEnd.value);
		userInputEnd.value = "";
		view.displayWord();
	},
	addLetterToBeg: function() {
		var userInputBeg = document.getElementById("addLetterToBegInput")
		changeWords.addLetterToBeg(userInputBeg.value);
		userInputBeg.value = "";
		view.displayWord();
	},
	removeLetterFromEnd: function() {
		changeWords.removeLetterFromEnd();
		view.displayWord();
	},
	removeLetterFromBeg: function() {
		changeWords.removeLetterFromBeg();
		view.displayWord();
	},
	startAgain: function() {
		view.displayWord() = "";
	}

};










