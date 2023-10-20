import {
  getWeatherIcon,
  formatDay,
  formatTime,
  formatMonth,
  formatHour,
} from "./utility";
import {
  fetchData,
  getData,
  getForecastType,
  getTemperatureUnit,
  toggleForecastType,
  toggleTemperatureUnit,
  getStartIndexForecast,
  navigateForecast,
  resetStartIndexForecast,
} from "./api";

const buttonSearch = document.querySelector(".search__button");
const buttonTemperatureUnit = document.getElementById(
  "button-temperature-unit",
);
const buttonDaily = document.getElementById("button-daily");
const buttonHourly = document.getElementById("button-hourly");
const buttonPrev = document.getElementById("button-prev");
const buttonNext = document.getElementById("button-next");

function populateSectionOne() {
  const data = getData();
  const temperatureUnit = getTemperatureUnit();

  const mainTemperature = document.getElementById("one__main-temperature");
  const locationName = document.getElementById("one__location-name");
  const weatherCondition = document.getElementById("one__weather-condition");
  const maxTemperature = document.getElementById("one__max-temperature");
  const minTemperature = document.getElementById("one__min-temperature");
  const background = document.querySelector(".day-night-bg");
  const weatherIcon = document.getElementById("one__weather-icon");

  mainTemperature.textContent = temperatureUnit
    ? `${data.current.temp_c} °C`
    : `${data.current.temp_f} °F`;

  locationName.textContent = data.location.name;

  weatherCondition.textContent = data.current.condition.text;

  maxTemperature.textContent = temperatureUnit
    ? `${data.forecast.forecastday[0].day.maxtemp_c} °C`
    : `${data.forecast.forecastday[0].day.maxtemp_f} °F`;

  minTemperature.textContent = temperatureUnit
    ? `${data.forecast.forecastday[0].day.mintemp_c} °C`
    : `${data.forecast.forecastday[0].day.mintemp_f} °F`;

  background.src = data.current.is_day ? "assets/day.png" : "assets/night.png";

  weatherIcon.src = `assets/${getWeatherIcon(data.current.condition.code)}`;
}

function populateDate() {
  const data = getData();
  const date = new Date(data.location.localtime);
  const y = date.getFullYear();
  const m = formatMonth(date.getMonth());
  const d = date.getDate();

  const h1 = document.getElementById("month-date");

  h1.textContent = `${m} ${d} ${y}`;
}

function populateTime() {
  const data = getData();
  const local = data.location.localtime;
  const date = new Date(local);
  const formatted = formatTime(date);

  const h1 = document.getElementById("clock");

  h1.textContent = `${formatted}`;
}

function populateSectionThree() {
  const data = getData();
  const temperatureUnit = getTemperatureUnit();

  const feelsLike = document.getElementById("feels-like-value");
  const humidity = document.getElementById("humidity-value");
  const chanceOfRain = document.getElementById("chance-of-rain-value");
  const windSpeed = document.getElementById("wind-speed-value");

  feelsLike.textContent = temperatureUnit
    ? `${data.current.feelslike_c} °C`
    : `${data.current.feelslike_f} °F`;

  humidity.textContent = `${data.current.humidity}%`;
  chanceOfRain.textContent = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;
  windSpeed.textContent = `${data.current.wind_kph}km/h`;
}

function populateSectionFour(startIndexForecast) {
  const data = getData();
  const forecastType = getForecastType();

  const arrayOfDaily = data.forecast.forecastday;

  clearForecast();

  if (forecastType) {
    arrayOfDaily.forEach((item, index) => {
      createDailyForecast(index);
    });
  } else {
    for (let i = startIndexForecast; i < startIndexForecast + 3; i++) {
      createHourlyForecast(i);
    }
  }
}

function createDailyForecast(index) {
  const data = getData();
  const temperatureUnit = getTemperatureUnit();

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");

  h1.textContent = formatDay(
    new Date(data.forecast.forecastday[index].date).getDay(),
  );
  h2.textContent = temperatureUnit
    ? `${data.forecast.forecastday[index].day.avgtemp_c} °C`
    : `${data.forecast.forecastday[index].day.avgtemp_f} °F`;
  h3.textContent = !temperatureUnit
    ? `${data.forecast.forecastday[index].day.avgtemp_c} °C`
    : `${data.forecast.forecastday[index].day.avgtemp_f} °F`;
  img.src = `assets/${getWeatherIcon(
    data.forecast.forecastday[index].day.condition.code,
  )}`;

  li.appendChild(h1);
  li.appendChild(h2);
  li.appendChild(h3);
  li.appendChild(img);
  ul.appendChild(li);
}

function createHourlyForecast(index) {
  const data = getData();
  const temperatureUnit = getTemperatureUnit();

  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");

  const date = new Date(data.forecast.forecastday[0].hour[index].time);
  const h = formatHour(date);

  h1.textContent = h;

  h2.textContent = temperatureUnit
    ? `${data.forecast.forecastday[0].hour[index].temp_c} °C`
    : `${data.forecast.forecastday[0].hour[index].temp_f} °F`;
  h3.textContent = !temperatureUnit
    ? `${data.forecast.forecastday[0].hour[index].temp_c} °C`
    : `${data.forecast.forecastday[0].hour[index].temp_f} °F`;
  img.src = `assets/${getWeatherIcon(
    data.forecast.forecastday[0].hour[index].condition.code,
  )}`;

  li.appendChild(h1);
  li.appendChild(h2);
  li.appendChild(h3);
  li.appendChild(img);
  ul.appendChild(li);
}

function getInput() {
  const input = document.querySelector("input[type=search]");

  return input.value;
}

function clearInput() {
  const input = document.querySelector("input[type=search]");

  input.value = "";
}

function clearForecast() {
  const ul = document.querySelector("ul");

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function updateTemperatuteValues() {
  populateSectionOne();
  populateSectionThree();
  populateSectionFour();
  populateSectionFour(getStartIndexForecast());
}

function showActiveForecastType() {
  const forecastType = getForecastType();

  if (forecastType) {
    buttonHourly.classList.remove("on");
    buttonDaily.classList.add("on");
  } else {
    buttonDaily.classList.remove("on");
    buttonHourly.classList.add("on");
  }
}

function showNavigationButtons() {
  const forecastType = getForecastType();
  const navButtons = document.querySelector(".nav-buttons");

  if (!forecastType) {
    navButtons.classList.add("on");
  } else {
    navButtons.classList.remove("on");
  }
}

function handleError() {
  const responseOne = document.querySelector(".response-one");
  const responseTwo = document.querySelector(".response-two");

  responseOne.textContent = "Location not found.";
  responseTwo.textContent =
    'Try searching for "Countries", "Cities", or "States".';
}

function validateInput(input) {
  const responseOne = document.querySelector(".response-one");
  const responseTwo = document.querySelector(".response-two");

  if (!input) {
    responseOne.textContent = "Oops!";
    responseTwo.textContent = "Please specify a location to search.";
    return false;
  }
  return true;
}

function clearValidationResponse() {
  const responseOne = document.querySelector(".response-one");
  const responseTwo = document.querySelector(".response-two");

  responseOne.textContent = "";
  responseTwo.textContent = "";
}

async function runSearch() {
  const input = getInput();

  if (!validateInput(input)) {
    return;
  }

  if (await fetchData(input)) {
    resetStartIndexForecast();
    populateSectionOne();
    populateSectionThree();
    populateSectionFour(getStartIndexForecast());
    populateDate();
    populateTime();

    clearInput();
    clearValidationResponse();
  }
}

function runSwitchTemperatureUnit() {
  const textTemperatureUnit = document.getElementById("text-temperature-unit");
  toggleTemperatureUnit();

  textTemperatureUnit.textContent = getTemperatureUnit()
    ? "DISPLAY °F"
    : "DISPLAY °C";

  updateTemperatuteValues();
}

function runForecastHourly() {
  toggleForecastType(false);
  showActiveForecastType();
  showNavigationButtons();
  populateSectionFour(getStartIndexForecast());
}

function runForecastDaily() {
  toggleForecastType(true);
  showActiveForecastType();
  showNavigationButtons();
  populateSectionFour();
}

function runNavigateLeft() {
  if (getStartIndexForecast() === 0) {
    return;
  }

  navigateForecast(false);
  populateSectionFour(getStartIndexForecast());
}

function runNavigateRight() {
  if (getStartIndexForecast() === 21) {
    return;
  }

  navigateForecast(true);
  populateSectionFour(getStartIndexForecast());
}

function runSearchByEnter(e) {
  if (e.key === "Enter") {
    runSearch();
  }
}

buttonSearch.addEventListener("click", runSearch);
buttonTemperatureUnit.addEventListener("click", runSwitchTemperatureUnit);
buttonHourly.addEventListener("click", runForecastHourly);
buttonDaily.addEventListener("click", runForecastDaily);
buttonPrev.addEventListener("click", runNavigateLeft);
buttonNext.addEventListener("click", runNavigateRight);
document.addEventListener("keypress", runSearchByEnter);

showNavigationButtons(); // FOR TESTING

export {
  populateSectionOne,
  populateSectionThree,
  populateSectionFour,
  populateDate,
  populateTime,
  createDailyForecast,
  showActiveForecastType,
  handleError,
};
