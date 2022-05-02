import React from "react";

export default function CurrentLocation() {
  function showCurrent() {
    return "Hello";
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
