
document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector("form");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        
        // Retrieve users from localStorage or initialize an empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if the username or email already exists
        const existingUser = users.find(user => user.username === username || user.email === email);
        if (existingUser) {
            alert(existingUser.username === username ? "Username already taken" : "Email already in use");
            return;
        }

        // Hash the password (for simplicity, we'll skip hashing in this client-side example)
        const newUser = { username, email, password };

        // Add new user to the array
        users.push(newUser);

        // Save updated users back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");
        window.location.href = "login.html"; // Redirect to login page
    });
});
