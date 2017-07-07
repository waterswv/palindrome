console.log("sanity check");

 $(document).ready(function() {
   console.log("the dom is ready!")

   $("form").on("submit", function(event){

      event.preventDefault();
      console.log("my click worked");

      let formEntry = $('.word').val();
      console.log(formEntry);

      console.log(palindrome(formEntry));

        if (palindrome(formEntry)){
          $(".result").empty().append($(`<p>${formEntry} is a Palindrome</p>`));
        } else {
          $(".result").empty().append($(`<p class="notAP">${formEntry} is NOT a Palindrome</p>`));
        }
        $('.word').val('')
      }); // closes form on submit

  }); // closes document ready

function palindrome (word) {

  var lowCase = word.toLowerCase();
  var wordToLetters = lowCase.split("");
  var loops = Math.floor(wordToLetters.length/2);

  for (var i = 0; i < loops; i++) {
    if (wordToLetters[i] !== wordToLetters[wordToLetters.length-1-i]) {
      return false;
    } else {
      return true;
    }
  } // closes function
}
