document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {

        alert("Login Successful!");

        window.location.href = "dashboard.html"; 
    }
});
