// Get a reference to the form and input fields
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Get a reference to the message div
const messageDiv = document.getElementById("message");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values entered by the user
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Display the entered values and a success message
    messageDiv.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p>Login successful!</p>
    `;
});

