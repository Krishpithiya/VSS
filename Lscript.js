document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace this with actual authentication logic)
    if (username === 'user' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        // Redirect or perform further actions here
    } else {
        document.getElementById('message').textContent = 'Invalid credentials. Please try again.';
    }
});