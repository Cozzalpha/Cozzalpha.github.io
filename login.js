
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        // Retrieve users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the username and password match any user
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful! Welcome, " + username);
            window.location.href = "index.html"; // Redirect to homepage
        } else {
            alert("Invalid username or password");
        }
    });
});
