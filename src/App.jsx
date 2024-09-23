import MainWeather from './Components/MainWeather';
import Navbar from './Components/Navbar';
import FiveDaysForecast from './Components/FiveDaysForecast';
import TodaysHighlights from './Components/TodaysHighlights';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from "axios";

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Mumbai');
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = (city) => {
    const API_KEY = 'cc15975064f05a99cdc6aa336e9aa2d0';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        console.log(JSON.stringify(data));
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
          .then(response => {
            setFiveDayForecast(response.data);
          })
          .catch(error => console.error('Error fetching the 5-day forecast data:', error));
      })
      .catch(error => console.error('Error fetching the weather data:', error));
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