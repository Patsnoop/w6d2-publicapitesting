document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'a10e9057376c90a4164ef4eb24fa1595';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            displayError('Error fetching weather data. Please try again.');
        });
});

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

function displayError(message) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p class="error">${message}</p>`;
}