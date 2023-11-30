// import helper from "helper.js";
// import validation from "validation.js";

// const helper = require("./helper");
// const validation = require("./validation");

function ageCalculate() {
	const dayElement = document.getElementById("dayId");
	const monthElement = document.getElementById("monthId");
	const yearElement = document.getElementById("yearId");

	const dayValue = dayElement.value;
	const monthValue = monthElement.value;
	const yearValue = yearElement.value;

	const currentDate = new Date();
	const currentDay = getDay(currentDate);
	const currentMonth = getMonth(currentDate);
	const currentYear = getYear(currentDate);

	const birthDate = new Date(`${monthValue}/${dayValue}/${yearValue}`);

	const birthDay = getDay(birthDate);
	const birthMonth = getMonth(birthDate);
	const birthYear = getYear(birthDate);

	var monthsInAge;
	var daysInAge;

	var yearsInAge = currentYear - birthYear;

	if (currentMonth < birthMonth) {
		yearsInAge--;
		monthsInAge = currentMonth + 12 - birthMonth;
	} else monthsInAge = currentMonth - birthMonth;

	if (currentDay < birthDay) {
		monthsInAge--;
		daysInAge = currentDay + helper.getDaysInLastMonth(currentDate) - birthDay;
	} else daysInAge = currentDay - birthDay;

	

	return { years: yearsInAge, months: monthsInAge, days: daysInAge };
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (validateInputs()) {
		const age = ageCalculate();
		console.log(age);
	}
});
