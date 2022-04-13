import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import FormattedDate from "./FormattedDate.js"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container frame">
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter a city"
                  autoFocus="on"
                />
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-outline-warning w-100 search-button"
                />
              </div>
            </div>
          </form>
          <div className="row city-result">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
            </div>
            <div className="col-6">
              <FormattedDate date={weatherData.date} />
            </div>
            <div className="row">
              <div className="col-6 weather-info">
                <ul>
                  <li>
                    Temperature: {Math.round(weatherData.temperature)} °C|°F
                  </li>
                  <li>Humidity: {Math.round(weatherData.humidity)}%</li>
                  <li>Wind: {Math.round(weatherData.wind)}km/h</li>
                </ul>
              </div>
              <div className="col-6">
                <ReactAnimatedWeather
                  icon="WIND"
                  color="goldenrod"
                  size={100}
                  animate={true}
                />
              </div>
            </div>
            <div className="row forecast">
              <div className="col-3">
                Thrusday
                <br />
                <ReactAnimatedWeather
                  icon="CLEAR_DAY"
                  color="goldenrod"
                  size={40}
                  animate={true}
                />
              </div>
              <div className="col-3">
                Friday <br />
                <ReactAnimatedWeather
                  icon="SNOW"
                  color="goldenrod"
                  size={40}
                  animate={true}
                />
              </div>
              <div className="col-3">
                Saturday <br />
                <ReactAnimatedWeather
                  icon="SLEET"
                  color="goldenrod"
                  size={40}
                  animate={true}
                />
              </div>
              <div className="col-3">
                Sunday <br />
                <ReactAnimatedWeather
                  icon="CLOUDY"
                  color="goldenrod"
                  size={40}
                  animate={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `5af297a6d7993b7bb3c2ec51eeeaccd4`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);

    return "Loading...";
  }
}
