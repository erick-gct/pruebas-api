"use client";

import { useEffect, useState } from "react";

export default function WeatherViewer() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-0.23&longitude=-78.52&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.current_weather));
  }, []);
  if (!weather) {
    return <p>Cargando climita...</p>;
  }

  return (
    <div stryle={{ border: "1px solid #ccc", paddding: 20, borderRadius: 10 }}>
      <h2> Clima actual en Guayaquil</h2>
      <p>
        <strong>Temperatura:</strong> {weather.temperature}°C
      </p>
      <p>
        <strong>Viento: </strong>
        {weather.windspeed} km/h
      </p>
      <p>
        <strong>Estado: </strong>
        {weather.weathercode}
      </p>
    </div>
  );
}
