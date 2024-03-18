const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      alert('Login successful.');
      window.location.assign('/');
    } else {
      alert('Failed to log in. Please try again.');
    }
  };
  
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);