// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    const backBtn = document.getElementById("back-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const editDetailsBtn = document.getElementById("edit-details-btn");
    const shareProfileBtn = document.getElementById("share-profile-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const editDetailsModal = document.getElementById("edit-details-modal");
    const cancelBtn = document.querySelector("button[type='button']"); // Select cancel button in modal
    const editDetailsForm = document.getElementById("edit-details-form");

    // Back button action
    backBtn.addEventListener("click", function() {
        window.history.back(); // Go back to the previous page
    });

    // Settings button action (open settings)
    settingsBtn.addEventListener("click", function() {
        alert("Settings clicked");
        // Future settings page/modal logic can go here
    });

    // Edit Personal Details Button
    editDetailsBtn.addEventListener("click", function() {
        editDetailsModal.style.display = "flex"; // Open modal
    });

    // Share Profile Button
    shareProfileBtn.addEventListener("click", function() {
        alert("Share Profile clicked");
        // Future sharing functionality can go here
    });

    // Logout Button
    logoutBtn.addEventListener("click", function() {
        alert("Logging out...");
        // Logic for logging out (e.g., clear session, redirect, etc.)
        // Example:
        // sessionStorage.clear();
        // window.location.href = "login.html"; // Redirect to login
    });

    // Close modal (Cancel button)
    cancelBtn.addEventListener("click", closeEditDetailsForm);

    // Function to close the edit details modal
    function closeEditDetailsForm() {
        editDetailsModal.style.display = "none"; // Close modal
    }

    // Save Personal Details (to be expanded for real functionality)
    editDetailsForm.addEventListener("submit", function(e) {
        e.preventDefault();
        closeEditDetailsForm(); // Close modal after saving
        alert("Personal details saved.");
        // Logic to save the updated details can be added here
    });

    // Optional: Allow closing modal by clicking outside or pressing 'Esc' key
    window.addEventListener("click", function(event) {
        if (event.target === editDetailsModal) {
            closeEditDetailsForm();
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            closeEditDetailsForm();
        }
    });
});
