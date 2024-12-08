document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Proceed with form submission or handle the login logic
        alert("Login Successful!");
        // You can add logic to redirect the user or make an API request here
        window.location.href = "dashboard.html"; // Example of redirecting to the dashboard
    }
});
