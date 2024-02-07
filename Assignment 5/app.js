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

document.getElementById('AW').addEventListener('click', function() {
    // Fetch the JSON file
    fetch('building_info.json')
    .then(response => response.json())
    .then(data => {
        // Update the AW property
        data.AW = (data.AW || 0) + 1;

        // Convert the updated data back to JSON
        const jsonData = JSON.stringify(data);

        // Send a POST request to update the JSON file
        fetch('https://api.github.com/repos/jacobs81/CSCI202/contents/Assignment%205/building_info.json', {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Increment AW property',
                content: btoa(jsonData), // Convert the JSON string to base64
                sha: 'e719a0883f0f2132287df9e05a671905854b0562' // You need to get the SHA of the file from GitHub
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('AW property incremented successfully');
        })
        .catch(error => {
            console.error('Error updating building_info.json:', error);
        });
    })
    .catch(error => {
        console.error('Error fetching building_info.json:', error);
    });
});