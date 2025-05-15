document.getElementById('year').textContent = new Date().getFullYear();

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/egypt?unitGroup=metric&include=current,days&key=NQQ37KHTY5E54TB46ZWVQ474Z&contentType=json")
    .then(response => response.json())  
    .then(data => {
        console.log(data);  

        const temp = data.currentConditions.temp;
        const conditions = data.currentConditions.conditions;
        const humidity = data.currentConditions.humidity;
        const windSpeed = data.currentConditions.windspeed;
        const windDir = data.currentConditions.winddir;
        const pressure = data.currentConditions.pressure;
        const cloudCover = data.currentConditions.cloudcover;
        const sunrise = data.days[0].sunrise;
        const sunset = data.days[0].sunset;
        const feelsLike = data.currentConditions.feelslike;
        const rainChance = data.currentConditions.precipprob;
        const rainAmount = data.currentConditions.precip;
        const uvIndex = data.currentConditions.uvindex;
        const tempMax = data.days[0].tempmax;
        const tempMin = data.days[0].tempmin;

        document.getElementById('today').innerHTML += `
            <h3>🌍 Weather Update</h3>
            <p>🌡 Temperature: <strong>${temp}°C</strong></p>
            <p>🌤 Conditions: <strong>${conditions}</strong></p>
            <p>🔥 Feels Like: <strong>${feelsLike}°C</strong></p>
            <p>🌡 Max Temp: <strong>${tempMax}°C</strong>, Min Temp: <strong>${tempMin}°C</strong></p>
            <p>💧 Humidity: <strong>${humidity}%</strong></p>
            <p>🌬 Wind: <strong>${windSpeed} km/h</strong> (${windDir}°)</p>
            <p>☁️ Cloud Cover: <strong>${cloudCover}%</strong></p>
            <p>🌄 Sunrise: <strong>${sunrise}</strong></p>
            <p>🌅 Sunset: <strong>${sunset}</strong></p>
            <p>🌧 Rain Chance: <strong>${rainChance}%</strong>, Amount: <strong>${rainAmount}mm</strong></p>
            <p>☀️ UV Index: <strong>${uvIndex}</strong></p>
            <p>🌀 Pressure: <strong>${pressure} hPa</strong></p>
        `;
    })
    .catch(err => {
        console.error("Error fetching weather data:", err);
        document.getElementById('today').innerHTML += `<p style="color:red;">⚠️ Failed to load weather data.</p>`;
    });

document.getElementById('year').textContent = new Date().getFullYear();

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/egypt?unitGroup=metric&include=days&key=NQQ37KHTY5E54TB46ZWVQ474Z&contentType=json")
.then(response => response.json())  
.then(data => {
    console.log(data); 

    const tomorrow = data.days[1];  
    const tempMax = tomorrow.tempmax;
    const tempMin = tomorrow.tempmin;
    const conditions = tomorrow.conditions;
    const windSpeed = tomorrow.windspeed;
    const windDir = tomorrow.winddir;
    const humidity = tomorrow.humidity;
    const pressure = tomorrow.pressure;
    const cloudCover = tomorrow.cloudcover;
    const sunrise = tomorrow.sunrise;
    const sunset = tomorrow.sunset;
    const rainChance = tomorrow.precipprob;
    const rainAmount = tomorrow.precip;
    const uvIndex = tomorrow.uvindex;
    
    // "Tomorrow"
    document.getElementById('tomorrow').innerHTML += `
        <h3>🌍 Weather Forecast for Tomorrow</h3>
        <p>🌤 Conditions: <strong>${conditions}</strong></p>
        <p>🌡 Max Temp: <strong>${tempMax}°C</strong>, Min Temp: <strong>${tempMin}°C</strong></p>
        <p>💧 Humidity: <strong>${humidity}%</strong></p>
        <p>🌬 Wind: <strong>${windSpeed} km/h</strong> (${windDir}°)</p>
        <p>☁️ Cloud Cover: <strong>${cloudCover}%</strong></p>
        <p>🌄 Sunrise: <strong>${sunrise}</strong></p>
        <p>🌅 Sunset: <strong>${sunset}</strong></p>
        <p>🌧 Rain Chance: <strong>${rainChance}%</strong>, Amount: <strong>${rainAmount}mm</strong></p>
        <p>☀️ UV Index: <strong>${uvIndex}</strong></p>
        <p>🌀 Pressure: <strong>${pressure} hPa</strong></p>
    `;
})
.catch(err => {
    console.error("Error fetching weather data:", err);
    document.getElementById('tomorrow').innerHTML += `<p style="color:red;">⚠️ Failed to load weather data for tomorrow.</p>`;
});

    document.getElementById('year').textContent = new Date().getFullYear();

    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/egypt?unitGroup=metric&include=days&key=NQQ37KHTY5E54TB46ZWVQ474Z&contentType=json")
        .then(response => response.json())  
        .then(data => {
            console.log(data);  

            const forecastContainer = document.getElementById('week-forecast');
            forecastContainer.innerHTML = "<h3>📅 Weekly Weather Forecast</h3>";

            // استخراج بيانات الأيام القادمة
            for (let i = 1; i <= 6; i++) {  // من الغد حتى 6 أيام قادمة
                const day = data.days[i];
                const date = day.datetime;
                const tempMax = day.tempmax;
                const tempMin = day.tempmin;
                const conditions = day.conditions;
                const windSpeed = day.windspeed;
                const humidity = day.humidity;
                const rainChance = day.precipprob;

                forecastContainer.innerHTML += `
                    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 8px;">
                        <h4>📆 ${date}</h4>
                        <p>🌤 <strong>${conditions}</strong></p>
                        <p>🌡 Max: <strong>${tempMax}°C</strong>, Min: <strong>${tempMin}°C</strong></p>
                        <p>💧 Humidity: <strong>${humidity}%</strong></p>
                        <p>🌬 Wind: <strong>${windSpeed} km/h</strong></p>
                        <p>🌧 Rain Chance: <strong>${rainChance}%</strong></p>
                    </div>
                `;
            }
        })
        .catch(err => {
            console.error("Error fetching weather data:", err);
            document.getElementById('week-forecast').innerHTML = `<p style="color:red;">⚠️ Failed to load weekly weather data.</p>`;
        });

