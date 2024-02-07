function fetchAndDisplayData() {
    fetch("building_info.json") 
        .then(response => response.json())
        .then(data => {
            // Loop through each key in the data object
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const value = data[key];
                    const div = document.querySelector(`.${key}`); // Select div based on class name
                    if (div) {
                        div.textContent = `There are ${value} people in ${key}`;
                    } else {
                        console.error(`Div with class ${key} not found.`);
                    }
                }
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

fetchAndDisplayData();

setInterval(fetchAndDisplayData, 5000);

