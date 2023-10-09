// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Select the Sign In and Sign Up buttons
    var signInButton = document.getElementById("signInButton");
    var signUpButton = document.getElementById("signUpButton");

    // Add click event listeners to the buttons
    signInButton.addEventListener("click", function () {
        // Get the values of the Username and Password fields
        var username = document.getElementById("userSignIn").value;
        var password = document.getElementById("passSignIn").value;

        // Log the values to the console
        console.log("Sign In - Username: " + username + ", Password: " + password);
        console.log("Sign-in Successfull");
    });

    signUpButton.addEventListener("click", function () {
        // Get the values of the Username, Password, Repeat Password, and Email fields
        var username = document.getElementById("userSignUp").value;
        var password = document.getElementById("passSignUp").value;
        var repeatPassword = document.getElementById("repeatPass").value;
        var email = document.getElementById("email").value;

        // Log the values to the console
        console.log("Sign Up - Username: " + username + ", Password: " + password + ", Repeat Password: " + repeatPassword + ", Email: " + email);
        console.log("Sign-Up Successfull");
    });
});
