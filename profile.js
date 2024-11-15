// Edit Photos functionality
function openPhotoEditor() {
    document.getElementById('photo-input').click();
}

function updateProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-picture').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Edit Personal Details functionality
function openEditDetailsForm() {
    const modal = document.getElementById('edit-details-modal');
    modal.style.display = 'block';
}

function closeEditDetailsForm() {
    const modal = document.getElementById('edit-details-modal');
    modal.style.display = 'none';
}

// Save Personal Details functionality (stub for now)
document.getElementById('edit-details-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('edit-name').value;
    const age = document.getElementById('edit-age').value;
    const bio = document.getElementById('edit-bio').value;
    const occupation = document.getElementById('edit-occupation').value;
    const preferences = document.getElementById('edit-preferences').value;

    // For now, just update the profile with the new values
    document.getElementById('user-name').textContent = `${name}, ${age}`;
    document.getElementById('user-profession').textContent = occupation;
    document.getElementById('user-location').textContent = preferences;

    // Close the modal after saving
    closeEditDetailsForm();
});

// Share Profile functionality
function shareProfile() {
    const profileUrl = window.location.href;  // Current page URL
    prompt("Copy your profile URL:", profileUrl);
}
