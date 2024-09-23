import React from "react";
import { Box, Typography } from "@mui/material";

const HighlightBox = ({ title, value, Icon }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#374151",
        color: "white",
        p: 2,
        borderRadius: "0.5rem",
        width: { xs: "100%", sm: "180px" }, // Responsive width
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" fontSize="18px">
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Icon sx={{ fontSize: "30px" }} />
        <Typography variant="h6" fontSize="30px">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default HighlightBox;