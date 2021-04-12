const signupEmployee = async (event) => {
  event.preventDefault();

  const qs = document.querySelector.bind(document);
  const firstName = qs("#employee_firstName").value.trim();
  const lastName = qs("#employee_lastName").value.trim();
  const email = qs("#employee_email").value.trim();
  const password = qs("#employee_password").value.trim();
  const select = qs("#employee_manager");
  const managerID = document.querySelectorAll("option")[select.selectedIndex]
    .value;

  if (firstName && lastName && email && password && managerID) {
    const response = await fetch("/api/employee", {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        manager_id: managerID,
        availability: 0,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const newResponse = await fetch("/api/employee/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (newResponse.ok) {
        document.location.replace("/employee");
      } else {
        alert(newResponse.statusText);
        console.log(newResponse.error);
      }
    } else {
      alert(response.statusText);
      console.log(response.error);
    }
  }
};

document
  .querySelector("#employee-signup")
  .addEventListener("click", signupEmployee);
