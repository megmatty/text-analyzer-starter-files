//On press of submit button, run analyzer and print results to screen
$('button[type="submit"]').on('click', function(event) {
	event.preventDefault();
	getWordCount();
	getUniqueWordCount();
	getAverageWordLength();
	$('dl').removeClass('hidden');
});	

//Count the Words
function getWordCount(words) {
	var words = $.trim($('textarea').val()).split(' ');
    var wordCount = words.length;
    $('#js-word-count-result').text(wordCount);
}

//Count Unique Words
function getUniqueWordCount(words) {
	//Get each word and if it is not already in array, push it there
	var words = $.trim($('textarea').val()).split(' ');
	var uniqueWords = [];
	for (var i = 0; i < words.length; i++) {
		if (uniqueWords.indexOf(words[i]) == -1 ) {
			uniqueWords.push(words[i]);
		}
	}
	//Get length of the array and place as text
	var uniqueWordCount = uniqueWords.length;
	$('#js-unique-word-count-result').text(uniqueWordCount);
}

//Calculate Average Word Length
function getAverageWordLength(words) {
	//Get length of each word and put in array
	var words = $.trim($('textarea').val()).split(' ');
	var characterCount = [];
	for (var i = 0; i < words.length; i++) {
		characterCount.push(words[i].length);
	}
	//Get sum of all array values
	var sum = 0;
	for (var i = 0; i < characterCount.length; i++) {
	 	sum += characterCount[i];
	}
	//Get average of sum and return as text to page
	var average = Math.round(sum/characterCount.length);
	$('#js-average-word-count-result').text(average + " characters");
}

