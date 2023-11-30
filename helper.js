function getDay(date) {
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

	const daysInMonth = new Date(year, month, 0).getDate();

	return daysInMonth;
}

function getDaysInMonth(month, year) {
	const daysInMonth = new Date(year, month, 0).getDate();

	return daysInMonth;
}

function getDaysInLastMonth(date) {
	const year = getYear(date);
	const month = getMonth(date);

	const daysInMonth = new Date(year, month - 1, 0).getDate();

	return daysInMonth;
}
