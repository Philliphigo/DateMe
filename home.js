document.addEventListener('DOMContentLoaded', function () {
    // List of users (static data or fetched from an API)
    const users = [
        { name: 'John, 25', picture: 'user1.jpg', location: 'Lilongwe' },
        { name: 'Alice, 22', picture: 'user2.jpg', location: 'Lilongwe' },
        { name: 'Bob, 29', picture: 'user3.jpg', location: 'Lilongwe' }
    ];

    let currentUserIndex = 0; // Track the currently displayed nearby user

    // Elements for profile and user cards
    const userPicture = document.getElementById('user-picture');
    const likeButton = document.getElementById('like-button');
    const dislikeButton = document.getElementById('dislike-button');
    const uploadButton = document.getElementById('upload-button');
    const settingsButton = document.getElementById('settings-button');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsButton = document.getElementById('close-settings-button');
    const settingsContent = document.getElementById('settings-content');
    const fileInput = document.getElementById('file-input');
    const userName = document.getElementById('user-name');
    const userLocation = document.getElementById('user-location');
    const userCardsContainer = document.querySelector('.user-cards-container');

    // Define Philip's (profile) data separately to avoid overwriting
    const philip = { name: 'Philip, 19', picture: 'philip.jpg', location: 'Lilongwe' };
    
    // Function to display the current user profile (Philip's)
    function updateUserProfile() {
        userPicture.src = philip.picture;
        userName.textContent = philip.name;
        userLocation.textContent = philip.location;
    }

    // Function to display the next nearby user
    function displayNextUser() {
        // Loop back to the first user if the last user is reached
        if (currentUserIndex < users.length - 1) {
            currentUserIndex++;
        } else {
            currentUserIndex = 0; // Reset to the first user
        }
        updateNearbyUsers(); // Only update nearby users
    }

    // Function to update the list of nearby users (in the user cards section)
    function updateNearbyUsers() {
        userCardsContainer.innerHTML = ''; // Clear the current list
        const currentUser = users[currentUserIndex];
        const userCard = createUserCard(currentUser);
        userCardsContainer.appendChild(userCard); // Add only one user at a time
    }

    // Helper function to create a user card element for nearby users
    function createUserCard(user) {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <img src="${user.picture}" alt="${user.name}" class="user-card-picture">
            <div class="user-card-info">
                <p class="user-card-name">${user.name}</p>
                <p class="user-card-location">${user.location}</p>
            </div>
        `;
        return userCard;
    }

    // Event listeners for Like/Dislike buttons
    likeButton.addEventListener('click', function () {
        console.log('Liked:', users[currentUserIndex].name);
        displayNextUser(); // Only change nearby users, not profile
    });

    dislikeButton.addEventListener('click', function () {
        console.log('Disliked:', users[currentUserIndex].name);
        displayNextUser(); // Only change nearby users, not profile
    });

    // Upload picture functionality for the profile picture
    uploadButton.addEventListener('click', function () {
        fileInput.click(); // Trigger file input click for profile picture upload
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                userPicture.src = e.target.result; // Update the profile picture with the uploaded image
            };
            reader.readAsDataURL(file);
        }
    });

    // Settings button functionality
    settingsButton.addEventListener('click', function () {
        settingsModal.style.display = 'block'; // Show the settings modal
        loadSettings(); // Load settings content dynamically
    });

    // Close settings modal
    closeSettingsButton.addEventListener('click', function () {
        settingsModal.style.display = 'none'; // Hide the settings modal
    });

    // Function to load settings
    function loadSettings() {
        settingsContent.innerHTML = `
            <h3>Settings</h3>
            <ul>
                <li><strong>Privacy:</strong> Public</li>
                <li><strong>Notifications:</strong> Enabled</li>
                <li><strong>Language:</strong> English</li>
            </ul>
        `;
    }

    // Initially load Philip's profile and the first nearby user
    updateUserProfile();
    updateNearbyUsers();
});
