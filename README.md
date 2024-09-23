# Weather App

A responsive weather dashboard built with React.js that displays current weather information and a 5-day forecast for various cities. This application integrates with the OpenWeatherMap API to fetch real-time weather data.

## Features

1. **Current Weather Display**
   - Shows current weather for a default city (New York).
   - Displays city name, current temperature, weather condition, and an icon representing the weather.

2. **City Search**
   - Allows users to search for weather information for different cities.
   - Utilizes the OpenWeatherMap API to fetch data.
   - Gracefully handles errors (e.g., city not found, network issues).
   - Custom input component with a dropdown modal for city selection.

3. **Five-Day Forecast**
   - Displays a 5-day weather forecast below the current weather.
   - Shows day of the week, high and low temperatures, and a weather icon for each day.

4. **Temperature Unit Conversion**
   - Toggle button to switch between Celsius and Fahrenheit.
   - Manual conversion logic implemented without external libraries.

## Technologies Used

- React.js
- Axios for API requests
- OpenWeatherMap API
- Material-UI for UI components

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShauryaAnand5/Weather_App.git

2. Navigate to the project directory:

    ```bash
    cd Weather_App

3. Install the dependencies:

    ```bash
    npm install

4. Set up .env file
   ```bash
   VITE_API_KEY= your openweathermap api

## Running the Application

    npm run dev
