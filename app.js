document.addEventListener("DOMContentLoaded", function () {

    // Scroll to Top Button Functionality
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Show or hide the scroll-to-top button based on the scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    // Scroll smoothly to the top when the button is clicked
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation for Sign-Up and Login Forms
    const signupForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#login form');

    // Validate the Sign-Up Form
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (name === "" || email === "" || password === "") {
                alert("All fields are required!");
                e.preventDefault();
            } else if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                e.preventDefault();
            }
        });
    }

    // Validate the Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            if (email === "" || password === "") {
                alert("All fields are required!");
                e.preventDefault();
            }
        });
    }

});
