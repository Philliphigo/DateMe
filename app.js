document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Handle Sign Up
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form from submitting to the server

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Store the user data in local storage
            localStorage.setItem("user", JSON.stringify({ name, email, password }));

            alert("Sign up successful! You can now log in.");
            window.location.href = 'login.html'; // Redirect to login page
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form from submitting to the server

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const user = JSON.parse(localStorage.getItem("user"));

            if (user && user.email === email && user.password === password) {
                alert("Login successful!");
                window.location.href = 'profile.html'; // Redirect to profile page
            } else {
                alert("Invalid email or password.");
            }
        });
    }
});
