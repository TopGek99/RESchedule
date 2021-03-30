var cal = [];
document.querySelector('#confirm').addEventListener('click', (e) => {
	e.preventDefault();
	cal = document.querySelector('#schedule').bulmaCalendar;
	// console.log(cal.startTime);
	// console.log(cal.endTime);
	// console.log(cal.startDate);
	// console.log(cal.endDate);
	// console.log;
});

const createTaskHandler = async (e) => {
	e.preventDefault();
	console.log(cal.startTime);
	const employee_select = document.querySelector('#manager_employee');
	const employee_id = document.querySelectorAll('option')[
		employee_select.selectedIndex
	].value;
	const title = document.querySelector('#task-title').value.trim();

	const response = await fetch('/api/task', {
		method: 'POST',
		body: JSON.stringify({
			title: title,
			start_time: cal.startTime,
			finish_time: cal.endTime,
			employee_id: employee_id,
		}),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		const success = document.createElement('P');
		success.innerText = 'Task Created Successfully';
		document.querySelector('#assign-task').appendChild(success);
	} else {
		alert(response.statusText);
	}
};

document
	.querySelector('#task-button')
	.addEventListener('click', createTaskHandler);
