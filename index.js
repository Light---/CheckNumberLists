window.onload = function () {
	var calculateButton = document.getElementById("calculate")

	calculateButton.onclick = function(){

		var firstList = document.getElementById("firstList").value.split(/\n|,/)
		var secondList = document.getElementById("secondList").value.split(/\n|,/)

		var duplicates = (_.intersection(firstList, secondList));

		var answer = document.getElementById("answer")
		answer.className = "well"

		answer.innerHTML = duplicates.join("<br>")
	}
}