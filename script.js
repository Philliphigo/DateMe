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
    
    if (username && password) {
        alert("Registration successful! You can now log in.");
        showLogin(); // Switch to login page after successful registration
    } else {
        alert("Please fill in both fields.");
    }
}

// Function to send a message from the messages page
function sendMessage() {
    var messageContent = document.getElementById("message-input").value;
    
    if (messageContent) {
        var messageBox = document.createElement("div");
        messageBox.classList.add("message");
        messageBox.textContent = messageContent;
        
        document.getElementById("message-list").appendChild(messageBox);
        document.getElementById("message-input").value = ""; // Clear the input
    } else {
        alert("Please enter a message.");
    }
}

// Show profile settings based on the checkbox (Visibility toggle)
function toggleProfileVisibility() {
    var checkBox = document.getElementById("profile-visibility");
    var profileSection = document.getElementById("profile");
    
    if (checkBox.checked) {
        profileSection.style.display = "block";
    } else {
        profileSection.style.display = "none";
    }
}

// Initial setup: Hide all sections initially and show only the home page
document.addEventListener("DOMContentLoaded", function () {
    showHome(); // Show the home page by default
});
