//Allow to choose only max 5 options
function KeepCount() {
	var NewCount = 0

	if(document.test.answer1.checked){
		NewCount = NewCount + 1
	}
	if(document.test.answer2.checked){
		NewCount = NewCount + 1
	}
	if(document.test.answer3.checked){
		NewCount = NewCount + 1
	}
	if(document.test.answer4.checked){
		NewCount = NewCount + 1
	}
	if(document.test.answer5.checked){
		NewCount = NewCount + 1
	}
	if(document.test.answer6.checked){
		NewCount = NewCount + 1
	}
	if(document.test.answer7.checked){
		NewCount = NewCount + 1
	}
	if (NewCount == 6){
		alert('Pick just five options please')
		document.test;
		return false;
	}
}

//Pop up window
function PopUp(hideOrshow) {
	if (hideOrshow == 'remove') {
		document.getElementById('ac-wrapper').style.display = "none";
	} else {
		document.getElementById('ac-wrapper').removeAttribute('style');
	};
}

window.onload = function () {
	setTimeout(function () {
	PopUp('show');
	}, 1500);
}

//Set the timer for 20 seconds
$('.start').click( function(){
   var counter = 5;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("count");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         clearInterval(counter);
       }
     }, 1000);
});

//Hide the form and question marks, make them reappear after 20 seconds and hide the picture
$(document).ready(function() {
	$('.hide').hide()
	$('.test').hide()
	$('.text').hide()
	$('.food').hide()
	$('.tweety').hide()
})

$('.start').click(function() {
	$('.food').fadeIn()
	$('.text').fadeIn()
	$('.tweety').fadeIn()

	var show = function() {
		$('.food').hide()
		$('.hide').fadeIn()
		$('.test').fadeIn()
	};
	setTimeout(show, 5000)
});

