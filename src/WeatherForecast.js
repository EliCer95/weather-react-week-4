import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="row forecast">
      <div className="col-3">
        Thrusday
        <br />
        <WeatherIcon code="01d" size={50} />
        <br />
        <div>19 10</div>
      </div>
      <div className="col-3">
        Friday <br />
        <WeatherIcon code="01d" size={50} />
        <br />
        <div>19 10</div>
      </div>
      <div className="col-3">
        Saturday <br />
        <WeatherIcon code="01d" size={50} />
        <br />
        <div>19 10</div>
      </div>
      <div className="col-3">
        Sunday <br />
        <WeatherIcon code="01d" size={50} />
        <br />
        <div>19 10</div>
      </div>
    </div>
  );
}
