// Information about each astronaut in space
$.getJSON('http://api.open-notify.org/astros.json', function (data) {
    for (let x = 0; x < data["number"]; x++) {
        var name = data["people"][x]["name"];
        var abroad = data["people"][x]["craft"];
        console.log("Name: " + name + " and Abroad: " + abroad);
        console.log(x);
        var temp = document.getElementById(x);
        temp.innerHTML = "<img>" + "<br>" + name + "<br>" + abroad;

        var image = temp.querySelector("img");
        image.src = "https://searchengineland.com/wp-content/seloads/2014/08/four-pandas-ss-1920.jpg";
    }
});

// Information about where the ISS exactly is
$.getJSON('http://api.open-notify.org/iss-now.json', function (data) {
    console.log(data);
});