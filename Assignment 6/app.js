// Information about each astronaut in space
$.getJSON('http://api.open-notify.org/astros.json', function (data) {
    console.log(data);
    console.log(data["people"]);

    for (let x = 0; x < data["people"].length; x++) {
        var name = data["people"][x]["name"];
        var abroad = data["people"][x]["craft"];
        console.log("Name: " + name + " and Abroad: " + abroad);
        console.log(x);
        var temp = document.getElementById(x);
        temp.innerHTML = name + "<br>" + abroad
    }
});

// Information about where the ISS exactly is
$.getJSON('http://api.open-notify.org/iss-now.json', function (data) {
    console.log(data);
});