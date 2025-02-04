# Weather App

[Live Demo](https://onurdemirk.github.io/weather-app/)

This Weather App dynamically fetches and displays current weather data for any city you search for. It leverages the Visual Crossing Weather API to retrieve weather details and uses the Pixabay API to update the background image based on the determined season. A smooth fade-in animation is applied during background transitions to enhance the user experience.

## Features

- **Dynamic Weather Data**
  - Retrieves current conditions such as temperature, feels-like temperature, wind speed, and humidity.
  - Displays the weather icon and location information.
  
- **Season-Based Background Image**
  - Determines the current season based on the temperature (e.g., winter, spring, autumn, summer).
  - Fetches a seasonal background image from the Pixabay API using the city name and season as keywords.
  - Applies a fade-in animation for a smooth background transition.

- **Responsive Design**
  - Built using HTML, CSS, and JavaScript.
  - Fully responsive layout ensuring compatibility with various devices.

## Technologies Used

- **HTML5:** Provides the semantic structure for the application.
- **CSS3:** Implements styling and animations, including the fade-in effect for background image transitions.
- **JavaScript (ES6+):** Handles API calls, DOM manipulation, and dynamic updates.
- **Visual Crossing Weather API:** Supplies up-to-date weather data.
- **Pixabay API:** Provides free, high-quality images for seasonal backgrounds.

## How It Works

1. **Search Functionality:**
   - Enter the name of a city in the search bar.
   - Press the `Enter` key to trigger API calls.

2. **Weather Data Fetching:**
   - The app calls the Visual Crossing Weather API to fetch the current weather data.
   - Weather details are then displayed in the details block on the page.

3. **Season Determination & Background Update:**
   - The app uses temperature thresholds to determine the current season.
   - It combines the city name and season into a search query for the Pixabay API.
   - The fetched image is applied as the background with a fade-in animation.