// Initialize all input of date type.
const options = {
	color: 'primary',
	type: 'datetime',
	startDate:'03-29-2021',
	endDate:'04-05-2021',
	dateFormat: 'DD-MM-YYYY',
	startTime: '09:00',
	endTime: '17:00',
	timeFormat: 'HH:mm A',
	displayMode: 'inline',
	lang: 'en',
	isRange: 'true',
	allowSameDayRange: 'true',
	toggleOnInputClick: 'true',
};
const calendars = bulmaCalendar.attach('#calendar', options);
console.log(calendars);
// Loop on each calendar initialized
calendars.forEach(calendar => {
	// Add listener to select event
	calendar.on('select', date => {
		console.log(date);
	});
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#calendar');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', datepicker => {
		console.log(datepicker.data.value());
		console.log(element.bulmaCalendar);
	});
	
}