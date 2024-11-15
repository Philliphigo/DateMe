document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form Validation for Sign-Up and Login Forms
    const signupForm = document.querySelector('#signup-form');
    const loginForm = document.querySelector('#login-form');

    // Validate and Handle Sign-Up Form
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (name && email && password.length >= 6) {
                // Save user details to localStorage
                localStorage.setItem('user', JSON.stringify({ name, email }));
                alert("Sign-up successful! Redirecting to profile.");
                window.location.href = 'profile.html'; // Redirect to profile page
            } else {
                alert("Please fill all fields correctly.");
            }
        });
    }

    // Validate and Handle Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Check stored user details
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.email === email && password.length >= 6) {
                alert("Login successful! Redirecting to profile.");
                window.location.href = 'profile.html'; // Redirect to profile page
            } else {
                alert("Invalid email or password.");
            }
        });
    }

    // Toggle active sections based on navigation clicks
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(this.getAttribute('href').substring(1)).classList.add('active');
        });
    });
});
