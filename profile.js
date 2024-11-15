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

// Save Personal Details functionality
document.getElementById('edit-details-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('edit-name').value || "Your Name";
    const age = document.getElementById('edit-age').value || "Age";
    const bio = document.getElementById('edit-bio').value || "Bio";
    const occupation = document.getElementById('edit-occupation').value || "Occupation";
    const preferences = document.getElementById('edit-preferences').value || "Preferences";

    // Update the profile with the new values
    document.getElementById('user-name').textContent = `${name}, ${age}`;
    document.getElementById('user-bio').textContent = bio;
    document.getElementById('user-profession').textContent = occupation;
    document.getElementById('user-location').textContent = preferences;

    // Close the modal after saving
    closeEditDetailsForm();
});

// Share Profile functionality
function shareProfile() {
    const profileUrl = window.location.href; // Current page URL
    prompt("Copy your profile URL:", profileUrl);
}

// Logout functionality
function logout() {
    window.location.href = "../login/index.html"; // Redirect to the login page
}

// Settings functionality (example: open a settings modal)
function openSettings() {
    alert("Settings functionality can be added here!");
}

// Scroll to Top Button functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close Modal on Outside Click
window.addEventListener('click', function(event) {
    const modal = document.getElementById('edit-details-modal');
    if (event.target === modal) {
        closeEditDetailsForm();
    }
});
