// Information about each astronaut in space
$.getJSON('http://api.open-notify.org/astros.json', function (data) {
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Jasmin_Moghbeli_official_portrait.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Andreas_Mogensen_official_portrait.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Satoshi_Furukawa_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Konstantin_Borisov_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/%27A_Beautiful_Planet%27_World_Premiere_%28NHQ201604160010%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/72/Nikolai_Chub_at_the_Expedition_68_State_Commission_meeting_on_September_20%2C_2022_%28NHQ202209200012%29_%28cropped%29_2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Loral_O%27Hara_portrait_%28cropped%29.jpg"
        ];
    for (let x = 0; x < data["number"]; x++) {
        var name = data["people"][x]["name"];
        var abroad = data["people"][x]["craft"];
        var div = document.getElementById("w" + x);
        div.innerHTML = "<img>" + "<br>" + name + "<br>" + abroad;
        var image = div.querySelector("img");
        image.src = images[x];
        div.style.top = getRandomNumber(200,height-200) + "px";
        div.style.left = getRandomNumber(200,width-200) + "px";
    }
    const amount = document.getElementById("number");
    amount.innerHTML = "There are " + data["number"] + " astronauts in space.";
});

// Information about where the ISS exactly is
$.getJSON('http://api.open-notify.org/iss-now.json', function (data) {
    const location = document.getElementById("location");
    location.innerHTML = "The ISS is currently located: (" + data["iss_position"]["longitude"] + "," + data["iss_position"]["latitude"] + ")";
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}