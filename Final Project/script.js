// Get the grid container
const gridContainer = document.getElementById('gridContainer');
const topBar = ["Level", "Prapor","Therapist","Skier","Peacekeeper","Mechanic","Ragman","Jaeger","Fence","Lightkeeper"]
for (let j = 0; j < 10; j++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = topBar[j]
    gridContainer.appendChild(gridItem);
}


// Loop through 300 times to create and fill grid items
for (let i = 0; i < 650; i++) {
    // Create a new div element for each grid item
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.id = (i);
    // Fill the grid item with the current index number
    if ((i % 10) == 0) {
        gridItem.textContent = Math.floor(i / 10) + 1;
    } else {
        // let trader = topBar[i % 10];
        // gridItem.textContent = trader;
        gridItem.textContent = "";
    }
    
    // Append the grid item to the grid container
    gridContainer.appendChild(gridItem);
}

fetch("task.json")
    .then(response => response.json())
    .then(data =>{
        for (let k = 0; k < data.length; k++){
            traderIndex = 0;
            task = data[k];
            taskName = task[0]
            if (task[task.length - 3] == null) {
                level_req = 1;
            } else {
                level_req = parseInt(task[task.length - 3]);
            }
            trader = task[task.length - 2];
            for (let w = 1; w < topBar.length; w++) {
                if (trader == topBar[w]) {
                    traderIndex = w;
                    w = topBar.length;
                }
            }
            placementId = level_req * 10 + traderIndex
            addHere = document.getElementById(placementId)
            console.log(taskName)
            addHere.textContent = taskName
        }
    })
    .catch(error => {
        console.error("Error:", error)
    })