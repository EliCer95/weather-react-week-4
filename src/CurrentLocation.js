import React, { useState } from "react";
import axios from "axios";

export default function CurrentLocation() {
  const [currentData, setCurrentData] = useState({ ready: false });

  function saveLocation(geo) {
    console.log(geo);
  }
  function setCurrent(response) {
    navigator.geolocation.getCurrentPosition(function (position) {
      saveLocation([[position.coords.latitude, position.coords.longitude]]);
    });
  }

  function showCurrent(event) {
    event.preventDefault();
    setCurrent();
  }

  return (
    <input
      type="button"
      onClick={showCurrent}
      value="Current"
      className="btn btn-outline-warning w-100 search-button"
    />
  );
}
