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
$(document).ready(function() {
    const movies = [
        "John Wick 3", "Sinister", "Home Alone", "Joker", "Kung Fu Panda 4", "Bagman", 
        "Elevation", "Scooby-Doo Tombie Island", "The Beekeepers", "The Finnish Line",
        "Armor", "Smile 2", "The Dark Knight"
    ];

    // Dynamically create movie cards
    movies.forEach(movie => {
        $(".movies-container").append(`
            <div class="movie-card">
                <div class="movie-info">
                    <h2 class="movie-title">${movie}</h2>
                </div>
            </div>
        `);
    });

    // Search functionality
    $('#search-input').on('input', function() {
        const query = $(this).val().toLowerCase();
        $('.movie-card').each(function() {
            const movieTitle = $(this).find('.movie-title').text().toLowerCase();
            if (movieTitle.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
