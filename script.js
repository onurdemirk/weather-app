const searchBar = document.getElementById("search-bar");
const errorMessage = document.querySelector(".error-message");
const displayBlock = document.querySelector(".details-block");
const weather = document.querySelector(".weather");
const place = document.querySelector(".place");
const degree = document.querySelector(".degree");
const feelsLike = document.querySelector(".feels-like");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

let currentTemperature = null;

async function getWeatherData(cityName) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=uk&elements=datetime%2Ctemp%2Cfeelslike%2Chumidity%2Cwindgust%2Cwindspeed%2Cwindspeedmean%2Cwindspeedmin%2Cicon&include=current&key=3YAXQT5AX2334QZB55RGYQUST&contentType=json`
    );
    const details = await response.json();

    const current = details.currentConditions;

    let weatherText = current.icon;
    weatherText = weatherText.charAt(0).toUpperCase() + weatherText.slice(1);
    weather.textContent = weatherText;

    place.textContent = details.resolvedAddress;
    degree.innerHTML = `<p>${current.temp}<sup class="celcius">&deg;C</sup></p>`;
    feelsLike.innerHTML = `<p>FEELS LIKE: ${current.feelslike}<sup>&deg;C</sup></p>`;
    wind.textContent = `WIND: ${current.windspeed} MPH`;
    humidity.textContent = `HUMIDITY: ${current.humidity}%`;

    errorMessage.style.display = "none";
    displayBlock.style.display = "block";

    currentTemperature = current.temp;
  } catch (error) {
    errorMessage.textContent = "Error retrieving weather data";
    errorMessage.style.display = "block";
    displayBlock.style.display = "none";
  }
}

const getSeason = () => {
  let season = "";

  if (currentTemperature > 0 && currentTemperature < 10) {
    season = "winter";
  } else if (currentTemperature > 10 && currentTemperature < 16) {
    season = "spring";
  } else if (currentTemperature > 16 && currentTemperature < 18) {
    season = "autumn";
  } else if (currentTemperature > 18 && currentTemperature < 30) {
    season = "summer";
  }

  return season;
};

function fadeInBackground(imageUrl) {
  const bgFadeElement = document.querySelector(".bg-fade");
  if (!bgFadeElement) return;

  bgFadeElement.style.opacity = 0;

  setTimeout(() => {
    bgFadeElement.style.backgroundImage = `url('${imageUrl}')`;

    bgFadeElement.offsetHeight;
    bgFadeElement.style.opacity = 1;
  }, 300);
}

async function getCityData(cityName) {
  let seasonName = getSeason();

  try {
    const response = await fetch(
      `https://pixabay.com/api/?key=48626903-b4ef356f9b5f61ffd35dc1f7b&q=${cityName}%2b${seasonName}&image_type=photo&order=popular`
    );
    const details = await response.json();

    const bg = details.hits[0].largeImageURL;
    fadeInBackground(bg);
  } catch (error) {
    fadeInBackground("/img/bg.jpg");
  }
}

searchBar.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    await getWeatherData(searchBar.value);
    await getCityData(searchBar.value);
  }
});
