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

    // Function to display the next user
    function displayNextUser() {
        if (currentUserIndex < users.length - 1) {
            currentUserIndex++;
        } else {
            currentUserIndex = 0; // Reset to the first user (or you can hide the button if desired)
        }
        userPicture.src = users[currentUserIndex].picture;
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
});
