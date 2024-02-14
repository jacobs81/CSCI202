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

document.getElementById('CF').addEventListener('click', function () {
    if (panelCF.style.display === 'none') {
        panelCF.style.display = 'block';
    } else {
        panelCF.style.display = 'none';
    }
});

document.getElementById("closeCF").addEventListener("click", function () {
    if (panelCF.style.display === 'block') {
        panelCF.style.display = 'none';
    } else {
        panelCF.style.display = 'block';
    }
})

var panelPH = document.getElementById('panelPH');

document.getElementById('PH').addEventListener('click', function () {
    if (panelPH.style.display === 'none') {
        panelPH.style.display = 'block';
    } else {
        panelPH.style.display = 'none';
    }
});

document.getElementById("closePH").addEventListener("click", function () {
    if (panelPH.style.display === 'block') {
        panelPH.style.display = 'none';
    } else {
        panelPH.style.display = 'block';
    }
})

var panelAW = document.getElementById('panelAW');

document.getElementById("closeAW").addEventListener("click", function () {
    if (panelAW.style.display === 'block') {
        panelAW.style.display = 'none';
    } else {
        panelAW.style.display = 'block';
    }
})

document.getElementById('AW').addEventListener('click', function () {
    if (panelAW.style.display === 'none') {
        panelAW.style.display = 'block';
    } else {
        panelAW.style.display = 'none';
    }
});


// Array of image sources
const images1 = [
    "floor_plans/AW/AW1.png",
    "floor_plans/AW/AW2.png",
    "floor_plans/AW/AW3.png",
    "floor_plans/AW/AW4.png",
    "floor_plans/AW/AW5.png"
];

let currentIndex1 = 1;
const totalImages1 = images1.length;
const imageElement1 = document.getElementById("current-imageAW");
const prevButton1 = document.getElementById("prev-btn1");
const nextButton1 = document.getElementById("next-btn1");

function updateImage1() {
    imageElement1.src = images1[currentIndex1];
}

nextButton1.addEventListener("click", function () {
    currentIndex1 = (currentIndex1 - 1 + totalImages1) % totalImages1;
    updateImage1();
});


prevButton1.addEventListener("click", function () {
    currentIndex1 = (currentIndex1 + 1) % totalImages1;
    updateImage1();
});

// Initial setup


  // Array of image sources
  const images2 = [
    "floor_plans/CF/CF1.png",
    "floor_plans/CF/CF2.png",
    "floor_plans/CF/CF3.png",
    "floor_plans/CF/CF4.png",
    "floor_plans/CF/CF5.png"
  ];

  let currentIndex2 = 1;
  const totalImages2 = images2.length;
  const imageElement2 = document.getElementById("current-imageCF");
  const prevButton2 = document.getElementById("prev-btn2");
  const nextButton2 = document.getElementById("next-btn2");

  // Function to update the image source
  function updateImage2() {
    imageElement2.src = images2[currentIndex2];
  }

  // Event listener for previous button
  nextButton2.addEventListener("click", function() {
    currentIndex2 = (currentIndex2 - 1 + totalImages2) % totalImages2;
    updateImage2();
  });

  // Event listener for next button
  prevButton2.addEventListener("click", function() {
    currentIndex2 = (currentIndex2 + 1) % totalImages2;
    updateImage2();
  });

  const images3 = [
    "floor_plans/PH/PH1.png",
    "floor_plans/PH/PH2.png",
    "floor_plans/PH/PH3.png",
    "floor_plans/PH/PH4.png",
    "floor_plans/PH/PH5.png"
  ];

  let currentIndex3 = 0;
  const totalImages3 = images3.length;
  const imageElement3 = document.getElementById("current-imagePH");
  const prevButton3 = document.getElementById("prev-btn3");
  const nextButton3 = document.getElementById("next-btn3");

  // Function to update the image source
  function updateImage3() {
    imageElement3.src = images3[currentIndex3];
  }

  // Event listener for previous button
  nextButton3.addEventListener("click", function() {
    currentIndex3 = (currentIndex3 - 1 + totalImages3) % totalImages3;
    updateImage3();
  });

  // Event listener for next button
  prevButton3.addEventListener("click", function() {
    currentIndex3 = (currentIndex3 + 1) % totalImages3;
    updateImage3();
  });


  updateImage1();
  updateImage2();
  updateImage3();