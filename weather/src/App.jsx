import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClipLoader } from "react-spinners";
/**
 * 1. 앱이 실행되자마자 현재 위치 날씨가 보인다 -> useEffect 
 * 2. 도시, 섭씨, 화씨, 날씨 상태 정보가 들어간다
 * 3. 5개의 버튼이 있다 1개의 현재위치와 4개의 다른 도시
 * 4. 도시버튼을 클릭할 때마다 도시별 날씨가 나온다
 * 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
 * 6. 데이터를 들고오는 동안 로딩 스피너가 돈다
 */

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const cities = ['paris', 'new york', 'tokyo', 'busan']
  
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherByCurrentLocation(lat, lon); 

      }, () => { });
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const API_key = "f4246920d3c2267cb5a308864fa53a34";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    const API_key = "f4246920d3c2267cb5a308864fa53a34";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  useEffect(() => {
    if (city == null) {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);


  return (
    <div>

      {loading ? (
        <div className='container'>
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} />
        </div>
      )}

    </div>
  )
}

export default App
