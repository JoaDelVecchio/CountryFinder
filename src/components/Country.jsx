import axios from "axios";
import { useEffect, useState } from "react";
const Country = ({ country }) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

  const [weather, setWeatherData] = useState(null);
  const capital = country.capital ? country.capital[0] : "";

  useEffect(() => {
    if (!capital || !apiKey) return;
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;
    axios
      .get(baseUrl)
      .then((response) => setWeatherData(response.data))
      .catch((error) => console.error("Error fetching weather data", error));
  }, [capital, apiKey]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>{country.capital}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language, i) => (
          <li key={i}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png || country.flags.svg}
        alt={country.flags.alt}
      />
      {weather && (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Country;
