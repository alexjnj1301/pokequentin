import React, { useEffect, useState } from 'react';
import axios from 'axios';

const apiKey = '3924c62a680cd72ff590fe3e8e5d0346';
const lat = '45.764043';
const lon = '4.835659';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;


export default function App({...props}) {
  const [weatherData, setWeatherData] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [actualTimeStamp, setActualTimeStamp] = useState(null);

  const fetchWeatherData = () => {
    axios.get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        setSunrise(response.data.sys.sunrise);
        setSunset(response.data.sys.sunset);
        setActualTimeStamp(response.data.dt);
        actualTimeStamp >= sunrise && actualTimeStamp <= sunset ? props.setTheme("day") : props.setTheme("night");
        console.log("Appel fait")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!weatherData) return (
    <button onClick={fetchWeatherData}>Refresh Weather</button>
  );

  return (
    <div>
      <button onClick={fetchWeatherData}>Refresh Weather</button>
      <h1>Weather in {weatherData.name}</h1>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Levée du soleil: {sunrise}</p>
      <p>Couchée du soleil: {sunset}</p>
      <p>TimeStamp actuel: {actualTimeStamp}</p>
    </div>
  );
}
