import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import HighlightsBox from "./HighlightsBox";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompressIcon from '@mui/icons-material/Compress';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const TodaysHighlights = ({ weatherData }) => {
  const { main, visibility, sys } = weatherData;

  const highlights = [
    { title: "Humidity", value: `${main.humidity}%`, Icon: InvertColorsIcon },
    { title: "Pressure", value: `${main.pressure} hPa`, Icon: CompressIcon },
    { title: "Visibility", value: `${visibility / 1000} km`, Icon: VisibilityIcon },
    { title: "Feels Like", value: `${main.feels_like}°C`, Icon: DeviceThermostatIcon },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#4B5563",
        color: "white",
        maxWidth: "840px",
        borderRadius: "0.5rem",
        padding: "30px",
        margin: "0 auto",
      }}
    >
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6">Sunrise And Sunset</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", padding: '10px' }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <WbSunnyIcon sx={{ fontSize: "40px", marginRight: '10px' }} />
            <Typography variant="body1">{new Date(sys.sunrise * 1000).toLocaleTimeString()}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NightsStayIcon sx={{ fontSize: "40px", marginRight: '10px' }} />
            <Typography variant="body1">{new Date(sys.sunset * 1000).toLocaleTimeString()}</Typography>
          </Box>
        </Box>
      </Box>

      <Typography variant="h6" sx={{ marginBottom: '10px' }}>Today's Highlights</Typography>
      <Grid container spacing={2}>
        {highlights.map((highlight, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <HighlightsBox
              title={highlight.title}
              value={highlight.value}
              Icon={highlight.Icon}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TodaysHighlights;