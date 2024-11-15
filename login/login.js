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

    // Login Form Validation
    const loginForm = document.querySelector('#login-form');
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
});
