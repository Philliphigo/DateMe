document.addEventListener('DOMContentLoaded', function () {
    // List of users (for now, this can be static data)
    const users = [
        { name: 'User 1', picture: 'user1.jpg' },
        { name: 'User 2', picture: 'user2.jpg' },
        { name: 'User 3', picture: 'user3.jpg' }
    ];

    let currentUserIndex = 0;

    // Elements
    const userPicture = document.getElementById('user-picture');
    const likeButton = document.getElementById('like-button');
    const dislikeButton = document.getElementById('dislike-button');
    const uploadButton = document.getElementById('upload-button');
    const settingsButton = document.getElementById('settings-button');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettingsButton = document.getElementById('close-settings-button');
    const settingsContent = document.getElementById('settings-content');
    const fileInput = document.getElementById('file-input');

    // Function to display the next user
    function displayNextUser() {
        if (currentUserIndex < users.length - 1) {
            currentUserIndex++;
        } else {
            currentUserIndex = 0; // Reset to the first user (or you can hide the button if desired)
        }
        userPicture.src = users[currentUserIndex].picture;
        console.log('Displaying:', users[currentUserIndex].name); // Debugging info
    }

    // Event listeners for Like/Dislike buttons
    likeButton.addEventListener('click', function () {
        console.log('Liked:', users[currentUserIndex].name);
        displayNextUser();
    });

    dislikeButton.addEventListener('click', function () {
        console.log('Disliked:', users[currentUserIndex].name);
        displayNextUser();
    });

    // Upload picture functionality
    uploadButton.addEventListener('click', function () {
        fileInput.click(); // Trigger file input click
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                userPicture.src = e.target.result; // Update the user picture with the uploaded image
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

    // Function to load settings (can be expanded with more settings)
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
});
