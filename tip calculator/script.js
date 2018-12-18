function calculate() {
	
	let bill = document.querySelector("#billAmount").value;
	let people = document.querySelector("#people").value;
	let service = document.querySelector("#select").value;
	let result = (bill/people) + (bill*service/100);
	if(bill > 0 && people > 1 ){
	document.querySelector("#rezultat").innerHTML = `Each person has to pay ${Math.round(result*100)/100}$`;
       }
}
