import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <h4>
        The temperature in {props.city} is {Math.round(temperature)}°C
      </h4>
    );
  } else {
    let apiKey = "8d1799a5f90d6e333e3d08444708fd03";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      props.city
    }&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
    return <h4>Loading temperature for {props.city}...</h4>;
  }
}
