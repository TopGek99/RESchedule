const employeeAvailabilityHandler = async (event) => {
	event.preventDefault();
	//Collects values from login form
	const availability = document.querySelector('#avail').value;

	if (availability) {
		//This sends a POST request to API endpoint
		const response = await fetch('/api/employee/availability', {
			method: 'PUT',
			body: JSON.stringify({
				availability: availability,
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			alert('success');
		} else {
			alert(response.statusText);
			console.log(response.error);
		}
	}
};

document
	.querySelector('#conf')
	.addEventListener('click', employeeAvailabilityHandler);
