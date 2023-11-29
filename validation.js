function setError(element, message = "This field is required") {
	let formGroup = element.parentNode;
	let error = formGroup.querySelector(".error");
	formGroup.classList.add("error");
	error.innerText = message;
	//resetOutput();
}
function setSuccess(element) {
	let formGroup = element.parentNode;
	if (formGroup.classList.contains("error")) {
		formGroup.classList.remove("error");
	}
}

function validateInputs() {
	const dayElement = document.getElementById("dayId");
	const monthElement = document.getElementById("monthId");
	const yearElement = document.getElementById("yearId");

	const dayValue = dayElement.value;
	const monthValue = monthElement.value;
	const yearValue = yearElement.value;

	const currentYear = getYear(new Date());

	// const daysInMonth = getDaysInMonth(`${month}/${day}/${year}`);

	// check day for empty input
	if (dayValue === "" || dayValue === null) {
		setError(dayElement);
		return;
		// check for invalid day
	} else if (dayValue > 31) {
		setError(dayElement, "Must be a valid day");
		return;
		// check for february day
	} else if (monthValue == 2 && !checkLeapYear(yearValue) && dayValue > 28) {
		setError(dayElement, "Must be a valid day");
		return;
		// check for months with max 30 days
	} else if (
		(monthValue == 4 ||
			monthValue == 6 ||
			monthValue == 9 ||
			monthValue == 11) &&
		dayValue > 30
	) {
		setError(dayElement, "Must be a valid day");
		console.log(`first day`);
		return;
	} else {
		setSuccess(dayElement);
	}

	if (yearValue === "" || yearValue === null) {
		console.log(`first year`);
		setError(yearElement);
		return;
	} else if (yearValue > currentYear) {
		setError(yearElement, "Must be in the past");
		return;
	} else {
		setSuccess(yearElement);
	}

	if (monthValue === "" || monthValue === null) {
		setError(monthElement);
		console.log(`first mmm`);
		return;
	} else if (monthValue > 12) {
		setError(monthElement, "Must be a valid month");
		return;
	} else {
		setSuccess(monthElement);
	}

	const birthdate = { dayValue, monthValue, yearValue };

	return birthdate;
}
