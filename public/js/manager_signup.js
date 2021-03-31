const signupManager = async (event) => {
  event.preventDefault();

  const qs = document.querySelector.bind(document);
  const firstName = qs('#manager_firstName').value.trim();
  const lastName = qs('#manager_lastName').value.trim();
  const email = qs('#manager_email').value.trim();
  const password = qs('#manager_password').value.trim();
  const location = qs('#manager_location').value.trim();


  if (firstName && lastName && email && password && location) {
    const response = await fetch('/api/manager', {
      method: 'POST',
      body: JSON.stringify({ 
        first_name: firstName, 
        last_name: lastName, 
        email, 
        password, 
        location
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/manager');
    } else {
      alert(response.statusText);
      consolw.log(err)
    }
  }
}

document
  .querySelector('#manager-signup')
  .addEventListener('submit', signupManager)
