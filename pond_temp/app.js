const apiKey = '96583aba81c305f1f8ca2798d8b1c38b';

function getWeather() {
    const province = document.getElementById('province-select').value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${province}&appid=${apiKey}&units=metric&lang=th`;

    fetch(URL)
        .then(response => {
            if (!response.ok) throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูล');
            return response.json();
        })
        .then(data => {
            document.getElementById('temp').innerText = `${Math.round(data.main.temp)} องศาเซลเซียส`;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('humidity').innerText = `${data.main.humidity} % ความชื้น`;
            document.getElementById('wind').innerText = `${data.wind.speed} เมตร/วินาที`;

            const iconCode = data.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            document.getElementById('weather-icon').src = iconURL;
            document.getElementById('weather-icon').alt = data.weather[0].description;
        })
        .catch(error => {
            const card = document.querySelector('.weather-card');
            card.innerHTML = `<p style="color: #ff43ff; font-weight: 700;">${error.message}</p>`;
        });
}
