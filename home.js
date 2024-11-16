document.addEventListener('DOMContentLoaded', function () {
    // List of users (static data or fetched from an API)
    const users = [
        { name: 'John, 25', picture: 'user1.jpg', location: 'Lilongwe' },
        { name: 'Alice, 22', picture: 'user2.jpg', location: 'Lilongwe' },
        { name: 'Bob, 29', picture: 'user3.jpg', location: 'Lilongwe' }
    ];

    let currentUserIndex = 0; // Track the currently displayed nearby user

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
    const userName = document.getElementById('user-name');
    const userLocation = document.getElementById('user-location');
    const userCardsContainer = document.querySelector('.user-cards-container');

    // Philip's profile
    const philip = { name: 'Philip, 19', picture: 'philip.jpg', location: 'Lilongwe' };

    // Initialize background animation
    createBackgroundAnimation();

    // Function to display Philip's profile
    function updateUserProfile() {
        userPicture.src = philip.picture;
        userName.textContent = philip.name;
        userLocation.textContent = philip.location;
    }

    // Function to display the next nearby user
    function displayNextUser() {
        currentUserIndex = (currentUserIndex + 1) % users.length;
        updateNearbyUsers();
    }

    // Function to update nearby users
    function updateNearbyUsers() {
        userCardsContainer.innerHTML = '';
        const currentUser = users[currentUserIndex];
        const userCard = createUserCard(currentUser);
        userCardsContainer.appendChild(userCard);
    }

    // Create user card
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

    // Handle like button
    likeButton.addEventListener('click', function () {
        console.log('Liked:', users[currentUserIndex].name);
        triggerActionFeedback('like');
        displayNextUser();
    });

    // Handle dislike button
    dislikeButton.addEventListener('click', function () {
        console.log('Disliked:', users[currentUserIndex].name);
        triggerActionFeedback('dislike');
        displayNextUser();
    });

    // Trigger feedback animation for actions
    function triggerActionFeedback(action) {
        const feedbackElement = document.createElement('div');
        feedbackElement.className = `action-feedback ${action}`;
        feedbackElement.textContent = action === 'like' ? '👍 Liked!' : '👎 Disliked!';
        document.body.appendChild(feedbackElement);

        setTimeout(() => {
            feedbackElement.remove();
        }, 1000); // Remove after 1 second
    }

    // Upload profile picture
    uploadButton.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                userPicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Settings modal
    settingsButton.addEventListener('click', function () {
        settingsModal.style.display = 'block';
        settingsModal.classList.add('fade-in');
        loadSettings();
        startClock();
    });

    closeSettingsButton.addEventListener('click', function () {
        settingsModal.classList.remove('fade-in');
        setTimeout(() => {
            settingsModal.style.display = 'none';
        }, 300); // Delay for smooth transition
    });

    // Load settings dynamically
    function loadSettings() {
        settingsContent.innerHTML = `
            <h3>Settings</h3>
            <ul>
                <li><strong>Privacy:</strong> <button id="toggle-privacy">Public</button></li>
                <li><strong>Notifications:</strong> <button id="toggle-notifications">Enabled</button></li>
                <li><strong>Language:</strong> English</li>
                <li><strong>Time:</strong> <span id="current-time"></span></li>
            </ul>
        `;
        // Add toggle functionality
        document.getElementById('toggle-privacy').addEventListener('click', togglePrivacy);
        document.getElementById('toggle-notifications').addEventListener('click', toggleNotifications);
    }

    // Toggle privacy setting
    function togglePrivacy() {
        const button = document.getElementById('toggle-privacy');
        button.textContent = button.textContent === 'Public' ? 'Private' : 'Public';
    }

    // Toggle notifications setting
    function toggleNotifications() {
        const button = document.getElementById('toggle-notifications');
        button.textContent = button.textContent === 'Enabled' ? 'Disabled' : 'Enabled';
    }

    // Start live clock in settings
    function startClock() {
        const timeElement = document.getElementById('current-time');
        function updateClock() {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString();
        }
        updateClock();
        setInterval(updateClock, 1000);
    }

    // Create background animation
    function createBackgroundAnimation() {
        const background = document.body;
        background.style.background = 'linear-gradient(-45deg, #141E30, #243B55, #141E30)';
        background.style.backgroundSize = '400% 400%';
        background.style.animation = 'gradientShift 15s ease infinite';
    }

    // Initialize
    updateUserProfile();
    updateNearbyUsers();
});
