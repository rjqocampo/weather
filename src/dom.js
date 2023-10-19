import { getWeatherIcon, formatDay, formatTime, formatMonth } from "./utility";
import {
  fetchData,
  getData,
  getTemperatureUnit,
  toggleTemperatureUnit,
} from "./api";

const buttonSearch = document.querySelector(".search__button");
const buttonTemperatureUnit = document.getElementById(
  "button-temperature-unit",
);

function populateSectionOne(temperatureUnit) {
  const data = getData();
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

function populateSectionThree(temperatureUnit) {
  const data = getData();

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

function getInput() {
  const input = document.querySelector("input[type=search]");

  return input.value;
}

function updateTemperatuteValues() {
  const data = getData();

  populateSectionOne(getTemperatureUnit());
  populateSectionThree(getTemperatureUnit());
}

function switchTemperatureUnit() {
  const textTemperatureUnit = document.getElementById("text-temperature-unit");
  toggleTemperatureUnit();

  textTemperatureUnit.textContent = getTemperatureUnit()
    ? "DISPLAY °F"
    : "DISPLAY °C";

  updateTemperatuteValues();
}

function clearInput() {
  const input = document.querySelector("input[type=search]");

  input.value = "";
}

async function search() {
  const input = getInput();
  await fetchData(input);
  const data = getData();

  populateSectionOne(data, getTemperatureUnit());
  populateSectionThree(getTemperatureUnit());
  populateDate();
  populateTime();

  clearInput();
}

buttonSearch.addEventListener("click", search);
buttonTemperatureUnit.addEventListener("click", switchTemperatureUnit);

// showTime();
// showDate();

export { populateSectionOne, populateSectionThree, populateDate, populateTime };
