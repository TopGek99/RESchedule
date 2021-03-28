const managerLoginHandler = async (event) => {
	event.preventDefault();
	//Collects values from login form
	const email = document.querySelector('#manager-email').value.trim();
	const password = document.querySelector('#manager-password').value.trim();

	if (email && password) {
		//This sends a POST request to API endpoint
		const response = await fetch('/api/manager/login', {
			method: 'POST',
			body: JSON.stringify({	
				email: email,
				password: password, 
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			//On Success will go to managers page
			document.location.replace('/manager');
		} else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector('.login-form')
	.addEventListener('submit', managerLoginHandler);
