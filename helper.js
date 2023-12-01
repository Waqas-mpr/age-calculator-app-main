function getDay(date) {
	const date2 = new Date(date);
	return ("0" + date2.getDate()).slice(-2);
}

function getMonth(date) {
	return new Date(date).getMonth() + 1;
}
function getYear(date) {
	return new Date(date).getFullYear();
}

function getDaysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}

function getDaysInLastMonth(month, year) {
	return new Date(year, month - 1, 0).getDate();
}
