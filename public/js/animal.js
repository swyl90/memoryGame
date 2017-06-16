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
	$('.hide').fadeIn()
	$('.test').fadeIn()
};
setTimeout(show, 1000)

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



