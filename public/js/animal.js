$(document).ready(function() {
	$('.hide').hide()
	$('.test').hide()
	$('.animals').hide()
	$('.game').hide()
	$('.help').hide()
})

$('.start').click(function() {
	$('.start').hide()
	$('.instructions').hide()
	$('.animals').fadeIn()
	$('.game').fadeIn()
	$('.help').show()

var show = function() {
	$('.animals').hide()
	$('h3').hide()
	$('.hide').fadeIn()
	$('.test').fadeIn()
};
setTimeout(show, 10000)

})

$('.help').click(function() {
	$('.hide').hide()
	$('.test').hide()
	$('.animals').hide()
	$('.game').hide()
	$('.instructions').show()
	$('.start').show()
	$('.help').hide()
})


$(function() {
	$('#type').typed({
		strings: ["hello world", "this is amazing"],
		typeSpeed: 0
	});
});

$('.start').click( function(){
   var counter = 10;
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