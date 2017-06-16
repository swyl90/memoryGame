$(document).ready(function() {
	$('.hide').hide()
	$('.test').hide()
})

var show = function() {
	$('.animals').hide()
	$('.hide').fadeIn()
	$('.test').fadeIn()
};
setTimeout(show, 20000)

