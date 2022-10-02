import React from "react";

const WeatherBox = ({ weather }) => {
  // console.log("weather", weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp} ˚C /{" "}
        {Math.round((weather?.main.temp * 1.8 + 32) * 100) / 100.0} ˚F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
