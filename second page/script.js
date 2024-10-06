
// Get references to the elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInBtn = document.getElementById("signInBtn");
const signUpBtn = document.getElementById("signUpBtn");
// Add event listeners for toggling between sign-up and sign-in forms
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Add event listener for signing in
signInBtn.addEventListener("click", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Here, you can add your code to handle sign-in functionality
    // For example, you can perform validation and then redirect the user to a specific page
    // For demonstration purposes, let's log a message to the console
    console.log("Signing in...");
    
    // Once signed in, you can redirect the user to a specific page
    // Replace 'your-link-url' with the URL you want to redirect to
    window.location.href = "../third page/index.html";
});
signUpBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Redirect the user to a specific page when signing up
    // Replace 'your-signup-link' with the URL you want to redirect to
    window.location.href = "../third page/index.html";
});