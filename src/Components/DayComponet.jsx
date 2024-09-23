import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const DayComponent = ({ props }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short",
        }).format(date);
    };
    return (
        <>
            <Grid item xs={3}>
              <Typography variant="body2" fontWeight="bold" textAlign="left">
                {formatDate(props.dt_txt)}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" fontWeight="bold" textAlign="left">
                Min Temp - {Math.round(props.main.temp_min)} °C
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" fontWeight="bold" textAlign="left">
                Max Temp - {Math.round(props.main.temp_max)} °C
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" textAlign="left">
                {props.weather[0].description}
              </Typography>
            </Grid>
        </>
    )
  };

export default DayComponent;