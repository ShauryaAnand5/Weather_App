import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography, Button } from "@mui/material";

const MainWeather = ({ weatherData }) => {
  const [isCelsius, setIsCelsius] = useState(true); // State to track temperature unit

  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "City Not Available";
  const countryName = weatherData?.sys?.country || "Country Not Available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return <WbSunnyIcon sx={{ ml: 1, color: "orange" }} />;
    } else if (temperatureCelsius < 10) {
      return <AcUnitIcon sx={{ ml: 1, color: "blue" }} />;
    } else {
      return <CloudIcon sx={{ ml: 1, color: "gray" }} />;
    }
  };

  const handleToggle = () => {
    setIsCelsius(!isCelsius); // Toggle between Celsius and Fahrenheit
  };

  const getTemperature = () => {
    if (temperatureCelsius === "N/A") return "N/A";
    return isCelsius
      ? `${Math.round(temperatureCelsius)}°C`
      : `${Math.round((temperatureCelsius * 9) / 5 + 32)}°F`;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#4B5563",
        color: "white",
        borderRadius: "0.5rem",
        width: { xs: '100%', sm: '160px' }, // Responsive width
        padding: "30px",
      }}
    >
      <Typography variant="h6">Now</Typography>
      <Box display="flex" alignItems="center" sx={{ fontSize: "35px", fontWeight: "bold" }}>
        {getTemperature()}
        {renderTemperatureIcon()}
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {weatherDescription}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Box display="flex" alignItems="center">
          <CalendarMonthIcon />
          <Typography variant="body2" sx={{ ml: 1 }}>{currentDate}</Typography>
        </Box>
        <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
          <LocationOnIcon />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {cityName}, {countryName}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="outlined"
        onClick={handleToggle}
        sx={{ mt: 2, color: "white", borderColor: "white" }}
      >
        {isCelsius ? "Fahrenheit" : "Celsius"}
      </Button>
    </Box>
  );
};

export default MainWeather;