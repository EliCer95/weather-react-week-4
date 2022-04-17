import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature.js";

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
                <WeatherTemperature celsius={props.data.temperature} />
              </li>
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
          <div className="col-6 main-icon">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="row forecast">
          <div className="col-3">
            Thrusday
            <br />
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-3">
            Friday <br />
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-3">
            Saturday <br />
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div className="col-3">
            Sunday <br />
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
