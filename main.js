const key = "3fe7090d8590b76b6cb699220cf98822";

var nameInput = document.getElementById('zip');

nameInput.addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    let zip = document.getElementById('zip').elements["zipInput"].value;
    if(zip.length != 5){
        console.error('Invalid Zip Code');
        alert('Invalid zipcode');
        return;
    }

    getWeather(zip);
});

function getWeather(zip){
    let x = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}`;
    fetch(x).then(Response => Response.json()).then(data => populateWeather(data)).catch(alert('Error: Location Not Found, Please enter Valid Zipcode'));
};

function populateWeather(data){
    let pic = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let celsius = (data.main.temp - 273.15);
    let fahrenheit = celsius * (9/5) + 32;
 
    document.getElementById('town').innerHTML = data.name;
    document.getElementById('kelvin').innerHTML = data.main.temp + ' k';
    document.getElementById('imperial').innerHTML = fahrenheit.toFixed(2) + ' F';
    document.getElementById('metric').innerHTML = celsius.toFixed(2) + ' C';
    document.getElementById('condition').innerHTML = data.weather[0].main;
    document.getElementById('pic').setAttribute("src", pic);
}