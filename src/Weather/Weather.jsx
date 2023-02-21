import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("¿Qué tiempo hace hoy?");

  useEffect(() => {
    // console.log("useEffect se monta");
    // console.log(weather);

    setTimeout(() => {
      setWeather("Hoy hace sol y nubes");
    }, 5000);
  }, [weather]);

  return <div>Weather</div>;
};

export default Weather;

// Se renderiza todo el componente menos el useEffect
// El useEffect se renderiza
