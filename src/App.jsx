import MainWeather from './Components/MainWeather';
import Navbar from './Components/Navbar';
import FiveDaysForecast from './Components/FiveDaysForecast';
import TodaysHighlights from './Components/TodaysHighlights';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from "axios";

const MAX_CACHED_CITIES = 5;

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Mumbai');
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const [cachedCities, setCachedCities] = useState([]);

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem('cachedCities')) || [];
    setCachedCities(savedCities);
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    const API_KEY = 'cc15975064f05a99cdc6aa336e9aa2d0';
    
    const cachedData = cachedCities.find(c => c.city === city);
    if (cachedData) {
      setWeatherData(cachedData.weatherData);
      setFiveDayForecast(cachedData.fiveDayForecast);
      return;
    }

    try {
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      const weatherData = await weatherResponse.json();
      setWeatherData(weatherData);

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
      const fiveDayForecast = forecastResponse.data;

      setFiveDayForecast(fiveDayForecast);

      updateCache(city, weatherData, fiveDayForecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const updateCache = (city, weatherData, fiveDayForecast) => {
    const newCacheEntry = { city, weatherData, fiveDayForecast };
    let updatedCachedCities = cachedCities.filter(c => c.city !== city); 
    updatedCachedCities.unshift(newCacheEntry); 

    if (updatedCachedCities.length > MAX_CACHED_CITIES) {
      updatedCachedCities.pop(); 
    }

    setCachedCities(updatedCachedCities);
    localStorage.setItem('cachedCities', JSON.stringify(updatedCachedCities));
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {weatherData && (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "30px" }}>
          <Grid container spacing={2} sx={{ maxWidth: "1200px", width: "100%" }}>
            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
              <MainWeather weatherData={weatherData} />
              <Typography variant="h6" sx={{ fontWeight: 700, marginTop: "20px" }}>
                5 Days Forecast
              </Typography>
              {fiveDayForecast && <FiveDaysForecast forecastData={fiveDayForecast} />}
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <TodaysHighlights weatherData={weatherData} />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default WeatherDashboard;
