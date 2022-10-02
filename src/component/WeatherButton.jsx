import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  //   console.log("cities", cities);
  return (
    <div className="weather-btn">
      <Button
        variant={`${selectedCity == "" ? "secondary" : "light"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity == item ? "secondary" : "light"}`}
          key={index}
          onClick={() => handleCityChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
