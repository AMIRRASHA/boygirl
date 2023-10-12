document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the login data is correct (compare with JSON data)
    if (isValidLogin(username, password)) {
        // Hide the login form
        document.querySelector('.login-box').style.display = 'none';

        // Display the success message
        document.getElementById('success-message').style.display = 'block';
    }
});

function isValidLogin(username, password) {
    // Replace this with your JSON data or database query
    const userData = {
        "aaa": "000",
        "user2": "password2",
        // Add more users as needed
    };

    return userData[username] === password;
}
