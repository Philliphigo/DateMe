document.addEventListener("DOMContentLoaded", function () {
    // Handle switching to Login form
    document.getElementById('show-login').addEventListener('click', function () {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    });

    // Handle switching to Sign Up form
    document.getElementById('show-signup').addEventListener('click', function () {
        document.getElementById('login').style.display = 'none';
        document.getElementById('signup').style.display = 'block';
    });

    // Handle Sign Up form submission
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if all fields are filled and password is at least 6 characters
        if (name && email && password.length >= 6) {
            localStorage.setItem('user', JSON.stringify({ name, email, password }));
            alert("Sign-up successful! Redirecting to profile.");
            window.location.href = 'profile.html'; // Redirect to profile page
        } else {
            alert("Please fill all fields correctly.");
        }
    });

    // Handle Login form submission
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Retrieve stored user details from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Check if stored user exists and credentials match
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful! Redirecting to profile.");
            window.location.href = 'profile.html'; // Redirect to profile page
        } else {
            alert("Invalid email or password.");
        }
    });
});
