import "./styles.css";

let inputter = document.querySelector(".location");
let fTemp = document.querySelector(".temp-f");
let cTemp = document.querySelector(".temp-c");
let area = document.querySelector(".area");
let currentWeather = document.querySelector(".current");
let currentWind = document.querySelector(".wind");

window.onload = () => {
    runWeather("london");
}

inputter.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        let location = document.querySelector(".location").value;
        runWeather(location);
        inputter.value = "";
    }
})

async function runWeather(location) {
    try {
        let base = "https://api.weatherapi.com/v1/current.json?key=f94d47c54aad469bb4642005231803&q=" + location + "&aqi=yes";
        let response = await (await fetch(base, {mode: "cors"})).json();
        updateWind(response);
        updateTemps(response);
        updateArea(response);
        updateWeather(response);
    } catch (err) {
        console.log(err);
    }
    
}

function updateWeather(response) {
    let weather = response.current.condition.text;
    currentWeather.innerHTML = `Current Weather: ${weather}`;
}

function updateArea(response) {
    let country = response.location.country;
    let location = response.location.name;
    area.innerHTML = `${location.toUpperCase()}, ${country.toUpperCase()}`;
}

function updateTemps(response) {
    let tempF = response.current.temp_f;
    let tempC = response.current.temp_c;
    fTemp.innerHTML =`F: ${tempF}° `;
    cTemp.innerHTML = `C: ${tempC}° `;
}

function updateWind(response) {
    let wind = response.current.wind_mph;
    currentWind.innerHTML = `Wind MPH: ${wind}`;
}