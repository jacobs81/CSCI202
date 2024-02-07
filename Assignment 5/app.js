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

var panelCF = document.getElementById('panelCF');

document.getElementById('CF').addEventListener('click', function() {
    if (panelCF.style.display === 'none') {
      panelCF.style.display = 'block';
    } else {
      panelCF.style.display = 'none';
    }
  });

document.getElementById("closeCF").addEventListener("click", function() {
    if (panelCF.style.display === 'block') {
        panelCF.style.display = 'none';
      } else {
        panelCF.style.display = 'block';
      }
})

var panelPH = document.getElementById('panelPH');

document.getElementById('PH').addEventListener('click', function() {
    if (panelPH.style.display === 'none') {
      panelPH.style.display = 'block';
    } else {
      panelPH.style.display = 'none';
    }
  });

document.getElementById("closePH").addEventListener("click", function() {
    if (panelPH.style.display === 'block') {
        panelPH.style.display = 'none';
      } else {
        panelPH.style.display = 'block';
      }
})

var panelAW = document.getElementById('panelAW');

document.getElementById("closeAW").addEventListener("click", function() {
    if (panelAW.style.display === 'block') {
        panelAW.style.display = 'none';
      } else {
        panelAW.style.display = 'block';
      }
})

document.getElementById('AW').addEventListener('click', function() {
    if (panelAW.style.display === 'none') {
      panelAW.style.display = 'block';
    } else {
      panelAW.style.display = 'none';
    }
  });

// document.getElementById('AW').addEventListener('click', function() {
//     fetch('building_info.json')
//     .then(response => response.json())
//     .then(data => {
//         // Update the AW property
//         data.AW = (data.AW || 0) + 1;

//         // Convert the updated data back to JSON
//         const jsonData = JSON.stringify(data);

//         // Send a POST request to update the JSON file
//         fetch('https://api.github.com/repos/jacobs81/CSCI202/contents/Assignment%205/building_info.json', {
//             method: 'PUT',
//             headers: {
//                 'Authorization': 'Bearer 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',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 message: 'Increment AW property',
//                 content: btoa(jsonData), 
//                 sha: 'e719a0883f0f2132287df9e05a671905854b0562' 
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('AW property incremented successfully');
//         })
//         .catch(error => {
//             console.error('Error updating building_info.json:', error);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching building_info.json:', error);
//     });
// });

// function handleButtonClick(id) {
//     // Fetch the JSON file
//     fetch('building_info.json')
//     .then(response => response.json())
//     .then(data => {
//         // Update the corresponding property based on the button id
//         data[id] = (data[id] || 0) + 1;

//         // Convert the updated data back to JSON
//         const jsonData = JSON.stringify(data);

//         // Send a POST request to update the JSON file
//         fetch('https://api.github.com/repos/jacobs81/CSCI202/contents/Assignment%205/building_info.json', {
//             method: 'PUT',
//             headers: {
//                 'Authorization': 'Bearer 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',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 message: `Increment ${id} property`,
//                 content: btoa(jsonData), 
//                 sha: 'e719a0883f0f2132287df9e05a671905854b0562' 
//             })
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(`${id} property incremented successfully`);
//         })
//         .catch(error => {
//             console.error('Error updating building_info.json:', error);
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching building_info.json:', error);
//     });
// }

// document.getElementById('AW').addEventListener('click', function() {
//     handleButtonClick('AW');
// });

// document.getElementById('CF').addEventListener('click', function() {
//     handleButtonClick('CF');
// });

// document.getElementById('PH').addEventListener('click', function() {
//     handleButtonClick('PH');
// });

