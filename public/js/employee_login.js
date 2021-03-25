const employeeLoginHandler = async (event) => {
	// event.preventDefault();
	//Collects values from login form
	const email = document.querySelector('#employee-email').value.trim();
	const password = document.querySelector('#employee-password').value.trim();

	if (email && password) {
		//This sends a POST request to API endpoint
		const response = await fetch('/api/employee/login', {
			method: 'POST',
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			//On Success will go to employee's schedule
			document.location.replace('/employee');
		} else {
			alert(response.statusText);
			console.log(response.error);
		}
	}
};

document
	.querySelector('#employee-login')
	.addEventListener('submit', employeeLoginHandler);
