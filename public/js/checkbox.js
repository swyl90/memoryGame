function KeepCount() {
	var NewCount = 0

	if(document.food.answer1.checked){
		NewCount = NewCount + 1
	}
	if(document.food.answer2.checked){
		NewCount = NewCount + 1
	}
	if(document.food.answer3.checked){
		NewCount = NewCount + 1
	}
	if(document.food.answer4.checked){
		NewCount = NewCount + 1
	}
	if(document.food.answer5.checked){
		NewCount = NewCount + 1
	}
	if(document.food.answer6.checked){
		NewCount = NewCount + 1
	}
	if(document.food.answer7.checked){
		NewCount = NewCount + 1
	}
	if (NewCount == 6){
		alert('Pick Just Five Please')
		document.food;
		return false;
	}
}