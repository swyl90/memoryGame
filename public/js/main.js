$(document).ready(function() {
	$('.buttons').hide()
	$('.options').hide()
	$('.tweet2').hide()
})

$('.start').click(function() {
	$('.buttons').fadeIn()
	$('.start').hide()
	$('.text').hide()
	$('.options').fadeIn()
	$('.tweet').hide()
	$('.tweet2').show()
})

