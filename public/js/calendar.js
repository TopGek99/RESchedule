// Initialize all input of date type.

const options = {
	color: 'primary',
	type: 'datetime',
	startDate:'03-29-2021',
	endDate:'04-05-2021',
	dateFormat: 'DD-MM-YYYY',
	startTime: '09:00',
	endTime: '17:00',
	timeFormat: 'HH:mm',
	displayMode: 'inline',
	lang: 'en',
	isRange: 'true',
	allowSameDayRange: 'true',
	toggleOnInputClick: 'true',
}
const calendars = bulmaCalendar.attach('[type = "datetime"]', options);
console.log(calendars);

// Loop on each calendar initialized
// calendars.forEach(calendar => {
// 	console.log(calendar)
// 	// Add listener to select event
// 	calendar.on('select', date => {
// 		console.log(date);
// 		calendar.isRange();
// 		console.log(calendars);
// 	});

// 	// calendar.onChange(({datepicker, timepicker}) => {
// 	// 	console.log(datepicker.data.value(startDate, endDate));
// 	// 	console.log(timepicker.data.value(startTime, endTime));
		
// 	// });
	

// });

for(var i = 0; i < calendars.length; i++) {
	// Add listener to select event
	calendars[i].on('select', date => {
		console.log(date);
	});
}


document.querySelector("#confirm").addEventListener('click', (e) => {
	e.preventDefault();
	const cal = document.querySelector("#day").bulmaCalendar;	
	console.log(cal.startTime);
	console.log(cal.endTime);
	console.log(cal.startDate);
	console.log(cal.endDate);
	console.log
})

// To access to bulmaCalendar instance of an element
// const element = document.querySelector('#day');

// console.log(element);
// if (element) {
// 	// bulmaCalendar instance is available as element.bulmaCalendar
// 	element.bulmaCalendar.on('select', function(datepicker) {
// 		console.log(datepicker.data.value());
// 	});
	


	
// }
