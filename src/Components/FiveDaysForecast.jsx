import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import DayComponent from "./DayComponet";

const FiveDaysForecast = ({ forecastData }) => {
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
            <DayComponent props={item} />
          </Grid>
        ))}
    </Box>
  );
};

export default FiveDaysForecast;