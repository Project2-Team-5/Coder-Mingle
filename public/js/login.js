const loginFormHandler = async (event) => {
    event.preventDefault();

    // collect data from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // TODO: If successful, redirect the browser to the main page, currently for testing using profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
}

const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName-signup').value.trim();
    const last_name = document.querySelector('#lastName-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (first_name && last_name && username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name, username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // TODO: redirect to survey page, profile is for testing purpose now
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
};
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signUp-form')
    .addEventListener('submit', signupFormHandler);
