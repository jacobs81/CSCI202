document.addEventListener('DOMContentLoaded', function () {
    // Set up for all buttons to be recognizable and easier to read code later
    const alphabetical = document.getElementById("alphabetical");
    const genre = document.getElementById("genre");
    const playtime = document.getElementById("playtime");
    const type = document.getElementById("type");
    const date = document.getElementById("date");
    const games = document.getElementById("games");

    // Displays Alphabetically when the page loads
    displayBy("title");

    // Event Listener for all the buttons and calling their respective helper functions
    alphabetical.addEventListener("click", function() {
        displayBy("title");
    });

    genre.addEventListener("click", function() {
        displayBy("genre");
    });

    playtime.addEventListener("click", function() {
        displayBy("playtime");
    });

    date.addEventListener("click", function() {
        displayBy("release_date");
    });

    // Displays the games given the data from the JSON file
    function displayInformation(data) {
        let htmlInfo = "";
        data.forEach((obj, index) => {
            const title = obj.title;
            const description = obj.description;
            const genre = obj.genre;
            const playtime = obj.playtime;
            const personalConnection = obj.personal_connection;
            const release_date = obj.release_date;
            const imageName = obj.image_name;

            htmlInfo += `
            <div class="game">
            <div class="left">
                <h2>${title}</h2>
                <img src="images/${imageName}" alt="cover of the game 7 Days to Die">
            </div>
            <div class="right">
                <p>
                    <strong>Game Description:</strong> ${description}

                    <br><br>
                    <strong>Game Genre:</strong> ${genre}

                    <br><br>
                    <strong>Hours Played:</strong> ${playtime} hours

                    <br><br>
                    <strong>Personal Connection:</strong> ${personalConnection}

                    <br><br>
                    <strong>Release Year:</strong> ${release_date}

                </p>
            </div>
            <div class="clearfix"></div>
        </div>
        `;
        });

        games.innerHTML = htmlInfo;
    }

    function displayBy(property) {
        fetch("games.json")
            .then(response => response.json())
            .then(data => {
                if (property === "playtime" || property === "release_date") {
                    data.sort((a,b) => b[property] - a[property]);
                } else {
                    data.sort((a,b) => a[property].localeCompare(b[property]));
                }
                displayInformation(data);
            })
            .catch(error => console.error("Error reading json, ", error));
    }

});