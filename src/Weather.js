import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = `5af297a6d7993b7bb3c2ec51eeeaccd4`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function showPosition(response) {
    console.log(response);
  }

  function getCurrentLocation(reponse) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showCurrent(event) {
    event.preventDefault();
    getCurrentLocation();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container frame">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-warning w-100 search-button"
                />
              </div>
              <div className="col-3">
                <input
                  type="button"
                  onClick={showCurrent}
                  value="Current"
                  className="btn btn-outline-warning w-100 search-button"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
