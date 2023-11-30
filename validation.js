function setError(element, message = "This field is required") {
	let formGroup = element.parentNode;
	let error = formGroup.querySelector(".error");

	formGroup.classList.add("error");
	error.innerText = message;

	formGroup.querySelector(".label-text").classList.add("warning-label");
	formGroup.querySelector(".input-box").classList.add("warning-border");
}
function setSuccess(element) {
	let formGroup = element.parentNode;

	let error = formGroup.querySelector(".error");
	error.innerText = "";

	formGroup.querySelector(".label-text").classList.remove("warning-label");
	formGroup.querySelector(".input-box").classList.remove("warning-border");
}

function validateInputs() {
	var isValidDay = true;
	var isValidMonth = true;
	var isValidYear = true;

	const dayElement = document.getElementById("dayId");
	const monthElement = document.getElementById("monthId");
	const yearElement = document.getElementById("yearId");

	const dayValue = dayElement.value;
	const monthValue = monthElement.value;
	const yearValue = yearElement.value;

	const daysInMonth = getDaysInMonth(monthValue, yearValue);
	const currentYear = getYear(new Date());

	if (dayValue == "") {
		setError(dayElement);
		isValidDay = false;
	} else if (dayValue <= 0 || dayValue > 31) {
		setError(dayElement, "Must be a valid day");
		isValidDay = false;
	} else if (dayValue > daysInMonth) {
		setError(dayElement, "Must be a valid day");
		isValidDay = false;
	} else setSuccess(dayElement);

	if (monthValue == "") {
		setError(monthElement);
		isValidDay = false;
	} else if (monthValue <= 0 || monthValue > 12) {
		setError(monthElement, "Must be a valid month");
		isValidMonth = false;
	} else setSuccess(monthElement);

	if (yearValue == "") {
		setError(yearElement);
		isValidDay = false;
	} else if (yearValue > currentYear) {
		setError(yearElement, "Must be in the past");
		isValidYear = false;
	} else setSuccess(yearElement);

	return isValidDay && isValidMonth && isValidYear;
}
