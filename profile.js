// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    const backBtn = document.getElementById("back-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const editDetailsBtn = document.getElementById("edit-details-btn");
    const shareProfileBtn = document.getElementById("share-profile-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const editDetailsModal = document.getElementById("edit-details-modal");

    // Back button action
    backBtn.addEventListener("click", function() {
        window.history.back(); // Go back to the previous page
    });

    // Settings button action (open settings)
    settingsBtn.addEventListener("click", function() {
        alert("Settings clicked");
    });

    // Edit Personal Details Button
    editDetailsBtn.addEventListener("click", function() {
        editDetailsModal.style.display = "flex"; // Open modal
    });

    // Share Profile Button
    shareProfileBtn.addEventListener("click", function() {
        alert("Share Profile clicked");
    });

    // Logout Button
    logoutBtn.addEventListener("click", function() {
        alert("Logging out...");
        // Logic for logging out (e.g., clear session, redirect, etc.)
    });

    // Close modal (Cancel button)
    function closeEditDetailsForm() {
        editDetailsModal.style.display = "none";
    }

    // Save Personal Details (to be expanded for real functionality)
    document.getElementById("edit-details-form").addEventListener("submit", function(e) {
        e.preventDefault();
        closeEditDetailsForm(); // Close modal after saving
        alert("Personal details saved.");
    });
});
