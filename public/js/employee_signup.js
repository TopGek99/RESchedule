const signupEmployee = async (event) => {
  event.preventDefault();

  const qs = document.querySelector.bind(document);
  const firstName = qs('#employee_firstName').value.trim();
  const lastName = qs('#employee_lastName').value.trim();
  const email = qs('#employee_email').value.trim();
  const password = qs('#employee_password').value.trim();
  const select = qs('#employee_manager')
  const managerID = select.options[select.selectedIndex].value;

  if (firstName && lastName && email && password && managerID) {
    const response = await fetch('/api/employee', {
      method: 'POST',
      body: JSON.stringify({ 
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        manager_id: managerID,
        availability: 0,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      document.location.replace('/employee');
    } else {
      alert(response.statusText);
      console.log(err)
    }
  }
};

document
  .querySelector('#employee-signup')
  .addEventListener('submit', signupEmployee)

