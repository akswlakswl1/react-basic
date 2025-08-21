import React from 'react'

const WeatherBox = ({ weather }) => {
    return (
        <div className='weather-box'>
            <div>{weather?.name}</div>
            <h2>
                {weather?.main?.temp
                    ? `${weather.main.temp.toFixed(2)} °C / ${(weather.main.temp * 9 / 5 + 32).toFixed(2)} °F`
                    : "Loading..."}
            </h2>
            <h3>{weather?.main.humidity} 습도</h3>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox