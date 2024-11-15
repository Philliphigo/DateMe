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

    // Sign Up Form Submission
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password.length >= 6) {
            // Save the user data to local storage (for demonstration purposes only)
            const user = { name, email, password };
            localStorage.setItem('user', JSON.stringify(user));

            alert("Sign-up successful! You can now log in.");
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert("Please fill out all fields with valid information.");
        }
    });
});
