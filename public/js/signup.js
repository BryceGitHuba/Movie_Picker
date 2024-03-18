const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Your account was successfully created. Please login.');
      window.location.assign('/login');
    } else {
      const resMessage = await response.json();
      alert(resMessage.message);
    }
  }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);