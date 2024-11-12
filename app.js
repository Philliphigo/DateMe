document.addEventListener("DOMContentLoaded", function () {
    // Scroll to Top Button Functionality
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

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

    // Display User Info on Profile Page
    if (window.location.pathname.includes("profile.html")) {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            document.getElementById('user-name').querySelector('span').textContent = storedUser.name;
            document.getElementById('user-email').querySelector('span').textContent = storedUser.email;
        } else {
            window.location.href = 'index.html'; // Redirect to home if no user info is found
        }

        // Logout Button Functionality
        document.getElementById('logout-button').addEventListener('click', function () {
            localStorage.removeItem('user');
            alert("Logged out successfully.");
            window.location.href = 'index.html'; // Redirect to home page after logout
        });
    }
});
