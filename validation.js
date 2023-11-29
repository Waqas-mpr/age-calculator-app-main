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

function errors() {}

function validateInputs() {
	const dayElement = document.getElementById("dayId");
	const monthElement = document.getElementById("monthId");
	const yearElement = document.getElementById("yearId");

	const dayValue = dayElement.value;
	const monthValue = monthElement.value;
	const yearValue = yearElement.value;

	console.log(`first-${dayValue}- ${dayElement}`);

	console.log(dayElement);
	const currentYear = getYear(new Date());

	if (monthValue <= 0 || monthValue > 12) {
		setError(monthElement, "enter valid day value");
	}

	if (dayValue <= 0 || dayValue > 31) {
		setError(dayElement, "enter valid month value");
	}

	if (yearValue <= 0 || yearValue > 12) {
		setError(yearElement, "enter valid year value");
	}

	const birthdate = { dayValue, monthValue, yearValue };

	return birthdate;
}

function errors(element) {}
