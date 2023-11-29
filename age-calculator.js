function _getDay(date) {
	console.log(`date: ${date}`);
	const date2 = new Date(date);

	const day = ("0" + date2.getDate()).slice(-2);

	console.log(`day: ${day}`);
	return Number(day);
}

function getMonth(date) {
	const month = new Date(date).getMonth() + 1;
	console.log(`month: ${month}`);
	return month;
}
function getYear(date) {
	const year = new Date(date).getFullYear();
	console.log(`year: ${year}`);
	return year;
}

function getDaysInMonth(date) {
	const year = getYear(date);
	const month = getMonth(date);

	const daysInMonth = new Date(year, month - 1, 0).getDate();

	return daysInMonth;
}

function getDaysInLastMonth(date) {
	const year = getYear(date);
	const month = getMonth(date);

	const daysInMonth = new Date(year, month - 2, 0).getDate();

	return daysInMonth;
}

function ageCalculate() {
	const birthdate = validateInputs();

	const currentDate = new Date();

	const currentDay = _getDay(currentDate);

	const currentMonth = getMonth(currentDate);
	const currentYear = getYear(currentDate);

	const birthDate = new Date(
		`${birthdate.month}/${birthdate.day}/${birthdate.year}`
	);

	const birthDay = _getDay(birthDate);
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
		daysInAge = currentDay + getDaysInLastMonth(currentDate) - birthDay;
	} else daysInAge = currentDay - birthDay;

	return { years: yearsInAge, months: monthsInAge, days: daysInAge };
}

function validateInputs() {
	const day = document.getElementById("dayId").value;
	const month = document.getElementById("monthId").value;
	const year = document.getElementById("yearId").value;

	const form = document.querySelector("form");

	const birthdate = { day, month, year };

	return birthdate;
}
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const age = ageCalculate();

	console.log(age);
});
