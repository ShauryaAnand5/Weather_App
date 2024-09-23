import React, { useState } from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import TextField from "@mui/material/TextField";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { Button, Box, List, ListItem } from "@mui/material";
import { styled } from "@mui/system";

const SuggestionList = styled(List)({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    zIndex: 1000,
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    maxHeight: '200px',
    overflowY: 'auto',
});

const Navbar = ({ onSearch }) => {
    const [searchedCity, setSearchedCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const allSuggestions = [
        "Delhi", "Mumbai", "Gurugram", "Kolkata", "Chennai",
        "Bengaluru", "New York", "Los Angeles", "Chicago",
        "Dallas", "London", "Chandigarh"
    ];

    const handleSearchClick = () => {
        if (searchedCity.trim()) {
            onSearch(searchedCity);
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchedCity(value);

        // Filter suggestions based on input
        if (value) {
            const filteredSuggestions = allSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchedCity(suggestion);
        setSuggestions([]); // Clear suggestions after selection
        onSearch(suggestion); // Trigger search with selected suggestion
    };

    return (
        <Box
            component="nav"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
            px={2}
            sx={{ flexWrap: 'wrap' }} // Make it responsive
        >
            <Box display="flex" alignItems="center" gap={1}>
                <FilterDramaIcon />
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Weather</p>
            </Box>

            <Box position="relative" display="flex" alignItems="center" gap={1}>
                <TextField
                    variant="outlined"
                    placeholder="Enter City name..."
                    size="small"
                    value={searchedCity}
                    onChange={handleChange}
                    autoComplete="off"
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "2rem",
                        width: { xs: '100%', sm: '22rem' }, // Responsive width
                    }}
                />
                <Button
                    variant="contained"
                    onClick={handleSearchClick}
                    sx={{
                        borderRadius: "6px",
                        backgroundColor: "#1976D2",
                        color: 'white',
                    }}
                >
                    Search
                </Button>

                {suggestions.length > 0 && (
                    <SuggestionList>
                        {suggestions.map((suggestion, index) => (
                            <ListItem
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                sx={{
                                    padding: '8px',
                                    cursor: 'pointer',
                                    borderBottom: '1px solid #ccc',
                                    '&:hover': {
                                        backgroundColor: '#f0f0f0',
                                    }
                                }}
                            >
                                {suggestion}
                            </ListItem>
                        ))}
                    </SuggestionList>
                )}
            </Box>
        </Box>
    );
};

export default Navbar;