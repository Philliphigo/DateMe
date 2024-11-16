document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { name: 'John, 25', picture: 'user1.jpg', location: 'Lilongwe' },
        { name: 'Alice, 22', picture: 'user2.jpg', location: 'Lilongwe' },
        { name: 'Bob, 29', picture: 'user3.jpg', location: 'Lilongwe' }
    ];

    const philip = { name: 'Philip, 19', picture: 'philip.jpg', location: 'Lilongwe' };
    let currentUserIndex = 0;

    const userCardsContainer = document.querySelector('.user-cards-container');
    const likeButton = document.getElementById('like-button');
    const dislikeButton = document.getElementById('dislike-button');
    const uploadButton = document.getElementById('upload-button');
    const fileInput = document.getElementById('file-input');

    // Display Philip's profile
    function displayPhilipProfile() {
        document.getElementById('user-picture').src = philip.picture;
        document.getElementById('user-name').textContent = philip.name;
        document.getElementById('user-location').textContent = philip.location;
    }

    // Display next nearby user
    function displayNextUser() {
        currentUserIndex = (currentUserIndex + 1) % users.length;
        updateNearbyUsers();
    }

    // Update nearby users
    function updateNearbyUsers() {
        userCardsContainer.innerHTML = '';
        const currentUser = users[currentUserIndex];
        const userCard = createUserCard(currentUser);
        userCardsContainer.appendChild(userCard);
    }

    // Create user card element
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

    // Handle Like/Dislike actions
    likeButton.addEventListener('click', () => {
        console.log('Liked:', users[currentUserIndex].name);
        displayNextUser();
    });

    dislikeButton.addEventListener('click', () => {
        console.log('Disliked:', users[currentUserIndex].name);
        displayNextUser();
    });

    // Handle upload
    uploadButton.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                document.getElementById('user-picture').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Initialize
    displayPhilipProfile();
    updateNearbyUsers();
});
