async function signupFormHandler(event){
    event.preventDefault();
    const Employee = document.querySelector('#employee_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
    if (user && password){
        const response = await fetch ('/api/employee',{
            method: 'POST',
            body: JSON.stringify({
                Employee,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            console.log('success');
            document.location.replace('/employee');
        } else {
            alert(response.statusText);

        }
    }
}
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);