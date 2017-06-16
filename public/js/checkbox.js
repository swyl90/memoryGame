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

//Set the timer for 20 seconds
var Timer = function(opts) {
  var self = this;

  self.opts     = opts || {};
  self.element  = opts.element || null;
  self.seconds  = opts.seconds || 30;

  self.start = function() {
    self.interval = setInterval(countDown, 1000);
  };

  self.stop = function() {
    clearInterval(self.interval);
  };

  function countDown() {
  	self.seconds--;
    if (self.seconds == 0) {
      self.stop();
    }

    if (self.seconds < 0) {
      self.minutes--;
    }

    if (self.seconds <= 9) { self.seconds = '0' + self.seconds; }

    self.element.textContent = self.seconds;
  }
};

var myTimer = new Timer({
  seconds: 20,
  element: document.querySelector('#timer')
});

myTimer.start();

//Hide the form and question marks, make them reappear after 20 seconds and hide the picture
$(document).ready(function() {
	$('.hide').hide()
	$('.test').hide()
})

var show = function() {
	$('.food').hide()
	$('.hide').fadeIn()
	$('.test').fadeIn()
};
setTimeout(show, 2000)


