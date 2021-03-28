const employeeAvailabilityHandler = async (event) => {
	// event.preventDefault();
	//Collects values from login form
	const availability = document.querySelector(datetimepicker.data.value());
	
	if (!availability == 0) {
		//This sends a POST request to API endpoint
		const response = await fetch('/api/employee/availability', {
			method: 'POST',
			body: JSON.stringify({
				availability: availability
			}),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
		//If successfull will update employee availability
			document.location.replace('/employee');
		} else {
			alert(response.statusText);
			console.log(response.error);
		}
	}
};


//For employee api route modification
//router.post('/availability',(request, result) =>
//{
    //Employee.update( request.body,{
        //individualHooks: true,
        //where: {id: request.params.id}
    //}).then(userData[?] => {
     //   request.session.employee_availability = userData.availability
     
   // })

//})
document.$('#calendar').querySelector('.form-hours')
	.addEventListener('submit', employeeAvailabilityHandler);
    
console.log(document);