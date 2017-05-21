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



	}