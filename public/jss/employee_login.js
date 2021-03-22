const loginFormHandler = async (event) =>{
    event.preventDefault();
//Collects values from login form
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

if (email && password){
    //This sends a POST request to API endpoitn
    const response = await fetch('/api/employee/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok){
        //On Success will go to employee's schedule
        document.location.replace('/employee');
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
