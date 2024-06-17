document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('locationForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const city = document.getElementById('city').value;

        try {
            const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            console.error('Erro ao obter os dados meteorológicos:', error);
        }
    });

    function displayWeather(data) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = '';

        const cityElement = document.createElement('h2');
        cityElement.textContent = `Previsão para ${data.city}`;
        weatherInfo.appendChild(cityElement);

        data.weather.daily.time.forEach((time, index) => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('weather-day');

            const date = new Date(time).toLocaleDateString();
            const minTemp = data.weather.daily.temperature_2m_min[index];
            const maxTemp = data.weather.daily.temperature_2m_max[index];
            const precipitation = data.weather.daily.precipitation_sum[index];

            dayElement.innerHTML = `
          <h3>${date}</h3>
          <p>Temperatura Mínima: ${minTemp} °C</p>
          <p>Temperatura Máxima: ${maxTemp} °C</p>
          <p>Precipitação: ${precipitation} mm</p>
        `;

            weatherInfo.appendChild(dayElement);
        });
    }
});
