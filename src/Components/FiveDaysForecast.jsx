import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const FiveDaysForecast = ({ forecastData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#4B5563",
        color: "white",
        borderRadius: "0.5rem",
        width: { xs: '100%', sm: '550px' },
        p: 2,
      }}
    >
      {forecastData.list
        .filter((_, index) => index % 8 === 0) // Select every 8th entry
        .map((item, index) => (
          <Grid
            container
            key={index}
            sx={{
              mb: 2,
              justifyContent: "space-between",
              alignItems: "center",
              // px: "1px"
            }}
          >
            <Grid item xs={3}>
              <Typography variant="body2" fontWeight="bold" textAlign="left">
                {formatDate(item.dt_txt)}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" fontWeight="bold" textAlign="left">
                Min Temp - {Math.round(item.main.temp_min)} °C
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" fontWeight="bold" textAlign="left">
                Max Temp - {Math.round(item.main.temp_max)} °C
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" textAlign="left">
                {item.weather[0].description}
              </Typography>
            </Grid>
          </Grid>
        ))}
    </Box>
  );
};

export default FiveDaysForecast;