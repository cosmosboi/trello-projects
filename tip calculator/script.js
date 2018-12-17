function calculate() {
	let bill = document.querySelector("#billAmount").value
	let people = document.querySelector("#people").value
	let result = bill/people;
	document.querySelector("#rezultat").innerHTML = `Each person has to pay ${result}$`;


}
