// Initialize all input of date type.
const calendars = bulmaCalendar.attach('[type="datetime"]',{});
console.log(calendars)
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
	element.bulmaCalendar.show();
}