// Function to show the login page
function showLogin() {
    document.getElementById("home").classList.add("hide");
    document.getElementById("login").classList.remove("hide");
}

// Function to show the home page
function showHome() {
    document.getElementById("login").classList.add("hide");
    document.getElementById("home").classList.remove("hide");
}

// Function to switch to the settings page
function showSettings() {
    document.getElementById("profile").classList.add("hide");
    document.getElementById("inbox").classList.add("hide");
    document.getElementById("settings").classList.remove("hide");
}

// Function to show the inbox
function showInbox() {
    document.getElementById("profile").classList.add("hide");
    document.getElementById("settings").classList.add("hide");
    document.getElementById("inbox").classList.remove("hide");
}

// Function to show the profile page
function showProfile() {
    document.getElementById("inbox").classList.add("hide");
    document.getElementById("settings").classList.add("hide");
    document.getElementById("profile").classList.remove("hide");
}

// Function to switch to the messages page
function showMessages() {
    document.getElementById("profile").classList.add("hide");
    document.getElementById("inbox").classList.add("hide");
    document.getElementById("messages").classList.remove("hide");
}

// Function to handle login form submission
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "user" && password === "password") {
        alert("Login successful!");
        showHome(); // Switch to home page after successful login
    } else {
        alert("Invalid credentials! Please try again.");
    }
}

// Function to handle user registration (simplified version)
function register() {
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;
    
    if (username && password)
