const loginFormHandler = async (event) =>{
    event.preventDefault();
//Collects values from login form
const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();

if (email && password){
    //This sends a POST request to API endpoint
    const response = await fetch('/api/manager/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok){
        //On Success will go to managers page
        document.location.replace('/manager');
    } else {
        alert(response.statusText);
    }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
