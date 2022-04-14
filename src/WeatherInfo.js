import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row city-result">
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
        <div className="col-6">
          <FormattedDate date={props.data.date} />
        </div>
        <div className="row">
          <div className="col-6 weather-info">
            <ul>
              <li>
                Temperature: {Math.round(props.data.temperature)} °C|°F
              </li>
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
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
  );
}
