// Helper to display messages
function showMessage(msg, isError = false) {
  const messageBox = document.getElementById('message');
  if (!messageBox) return;
  messageBox.textContent = msg;
  messageBox.style.color = isError ? 'red' : 'green';
}

// Register form submission
async function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      showMessage(data.message || 'Registration failed', true);
    } else {
      showMessage('Registration successful! You can now log in.');
      // Optionally redirect to login page:
      // window.location.href = 'login.html';
    }
  } catch (err) {
    showMessage('Server error. Try again later.', true);
  }
}

// Login form submission
async function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      showMessage(data.message || 'Login failed', true);
    } else {
      localStorage.setItem('token', data.token);
      showMessage('Login successful!');
      // Redirect to profile or dashboard
      window.location.href = 'profile.html';
    }
  } catch (err) {
    showMessage('Server error. Try again later.', true);
  }
}
