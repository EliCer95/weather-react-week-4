import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
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
            <h1>Luxembourg</h1>
          </div>
          <div className="col-6"> </div>
        </div>
        <div className="row">
          <div className="col-6 weather-info">
            Temperature: 16°C
            <br />
            Humidity: 12%
            <br />
            Wind: 3km/h
          </div>
          <div className="col-6">
            <ReactAnimatedWeather
              icon="WIND"
              color="goldenrod"
              size="100"
              animate="true"
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
              size="40"
              animate="true"
            />
          </div>
          <div className="col-3">
            Friday <br />
            <ReactAnimatedWeather
              icon="SNOW"
              color="goldenrod"
              size="40"
              animate="true"
            />
          </div>
          <div className="col-3">
            Saturday <br />
            <ReactAnimatedWeather
              icon="SLEET"
              color="goldenrod"
              size="40"
              animate="true"
            />
          </div>
          <div className="col-3">
            Sunday <br />
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="goldenrod"
              size="40"
              animate="true"
            />
          </div>
        </div>
      </div>
      <p>
        <a
          href="https://github.com/EliCer95/weather-react-week-4"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source
        </a>{" "}
        code by Eliska Cerna
      </p>
    </div>
  );
}
