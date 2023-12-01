function ageCalculate(yearValue, monthValue, dayValue) {
	const currentDate = new Date();
	var currentDay = Number(getDay(currentDate));
	var currentMonth = Number(getMonth(currentDate));
	var currentYear = Number(getYear(currentDate));

	const birthDate = new Date(`${monthValue}/${dayValue}/${yearValue}`);

	const birthDay = getDay(birthDate);
	const birthMonth = getMonth(birthDate);
	const birthYear = getYear(birthDate);

	if (birthDay > currentDay) {
		currentDay = currentDay + getDaysInMonth(birthMonth, birthYear);
		currentMonth = currentMonth - 1;
	}

	if (birthMonth > currentMonth) {
		currentMonth = currentMonth + 12;
		currentYear = currentYear - 1;
	}

	var yearsInAge = currentYear - birthYear;
	var monthsInAge = currentMonth - birthMonth;
	var daysInAge = currentDay - birthDay;

	return { yearsInAge, monthsInAge, daysInAge };
}

function output(yearsInAge, monthsInAge, daysInAge) {
	const dayOutput = document.getElementById("dayOutputId");
	const monthOutput = document.getElementById("monthOutputId");
	const yearOutput = document.getElementById("yearOutputId");

	dayOutput.innerText = daysInAge;
	monthOutput.innerText = monthsInAge;
	yearOutput.innerText = yearsInAge;
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();

	var result = validateInputs();

	if (result.isValid) {
		const age = ageCalculate(
			result.yearValue,
			result.monthValue,
			result.dayValue
		);

		output(age.yearsInAge, age.monthsInAge, age.daysInAge);
	}
});
