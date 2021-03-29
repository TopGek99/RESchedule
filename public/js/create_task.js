const createTaskHandler = async (event) => {
	//Collects values from login form
	console.log('working');
	const employee_select = document.querySelector('#employee');
	const employee_id = document.querySelector('option')[
		employee_select.selectedIndex
	].value;
	employee_name.split(' ') = [employee_first_name, employee_last_name];
	const title = document.querySelector('#task-title').value.trim();
	const start_time = new Date(
		document.querySelector('#start-time').value.trim()
	);
	const finish_time = new Date(
		document.querySelector('#finish-time').value.trim()
	);

	const response = await fetch('/api/task', {
		method: 'POST',
		body: JSON.stringify({
			title: title,
			start_time: start_time,
			finish_time: finish_time,
			employee_id: employee_id,
		}),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		alert('success');
		const success = document.createElement('P');
		success.innerText = 'Task Created Successfully';
		document.querySelector('#create-task').appendChild;
	} else {
		alert(response.statusText);
	}
};

document
	.querySelector('#task-button')
	.addEventListener('click', createTaskHandler);
