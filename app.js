document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#login form');
    const logoutBtn = document.getElementById('logout-btn');
    const userInfo = document.getElementById('user-info');

    // Handle Sign Up
    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page reload

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
            e.preventDefault(); // Prevent page reload

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

    // Handle Profile Page
    if (userInfo) {
        const user = JSON.parse(localStorage.getItem("user"));

        // If no user is logged in, redirect to login page
        if (!user) {
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            // Display user info
            document.getElementById('user-name').textContent = user.name;
            document.getElementById('user-email').textContent = user.email;
        }
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            localStorage.removeItem("user"); // Clear user data from local storage
            alert("You have logged out.");
            window.location.href = 'login.html'; // Redirect to login page
        });
    }
});
