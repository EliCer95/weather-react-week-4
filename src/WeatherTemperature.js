import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div>
        Temperature: {Math.round(props.celsius)} °C|
        <a href="/" onClick={convertToFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        Temperature: {Math.round(fahrenheit)}{" "}
        <a href="/" onClick={convertToCelsius}>
          °C
        </a>
        | °F
      </div>
    );
  }
}
