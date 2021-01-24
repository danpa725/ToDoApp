import { WEATHER_API_KEY as API_KEY } from "../../config";
const LOCATION = "LOCATION";
const weather = document.querySelector(".js-weather");

const getWeatherApi = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
    `)
        .then((res) => res.json())
        .then((json) => {
            weather.innerText = "";
            const tempInfo = json.main.temp;
            const locationInfo = json.name;
            const weatherInfo = json.weather[0].description;

            const tempLocationSpan = document.createElement("span");
            const weatherSpan = document.createElement("span");

            tempLocationSpan.innerText = `${locationInfo} ${tempInfo}°C`;
            weatherSpan.innerText = `${weatherInfo}`;

            weather.appendChild(tempLocationSpan);
            weather.appendChild(weatherSpan);
        });
};

const saveLocation = (LocationObj) => {
    localStorage.setItem(LOCATION, JSON.stringify(LocationObj));
};

const handleGetLocationSucess = (position) => {
    const { latitude, longitude } = position.coords;

    const userLocation = {
        latitude,
        longitude,
    };
    saveLocation(userLocation);
    getWeatherApi(latitude, longitude);
};

const handleGetLocationFail = () => console.log(err);

const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(
        handleGetLocationSucess,
        handleGetLocationFail
    );
};

const loadLocationFromDb = () => {
    const userLocation = localStorage.getItem(LOCATION);

    if (userLocation === null) {
        getUserLocation();
    } else {
        const parseLocation = JSON.parse(userLocation);
        getWeatherApi(parseLocation.latitude, parseLocation.longitude);
    }
};

const init = () => {
    loadLocationFromDb();
};

init();
