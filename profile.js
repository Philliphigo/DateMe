document.addEventListener('DOMContentLoaded', function() {
    // Selecting buttons
    const backButton = document.getElementById('back-btn');
    const editDetailsButton = document.getElementById('edit-details-btn');
    const shareProfileButton = document.getElementById('share-profile-btn');
    const logoutButton = document.getElementById('logout-btn');
    
    // Back button functionality: Redirect to home page
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'home.html'; // Redirects to home page
        });
    }

    // Edit Details Button functionality
    if (editDetailsButton) {
        editDetailsButton.addEventListener('click', function() {
            window.location.href = 'edit-profile.html'; // Redirects to edit profile page
        });
    }

    // Share Profile Button functionality
    if (shareProfileButton) {
        shareProfileButton.addEventListener('click', function() {
            // Add share functionality if needed
            alert('Share profile feature coming soon!'); // Placeholder message
        });
    }

    // Logout Button functionality
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'login.html'; // Redirect to login page after logout
        });
    }
});
