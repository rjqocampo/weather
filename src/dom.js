import { getWeatherIcon, parseDay } from "./utility";
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

function populateSectionOne(data, temperatureUnit) {
  const mainTemperature = document.getElementById("one__main-temperature");
  const locationName = document.getElementById("one__location-name");
  const weatherCondition = document.getElementById("one__weather-condition");
  const maxTemperature = document.getElementById("one__max-temperature");
  const minTemperature = document.getElementById("one__min-temperature");
  const background = document.querySelector(".day-night-bg");
  const weatherIcon = document.getElementById("one__weather-icon");

  console.log(data.current.condition.code);
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

  console.log(getWeatherIcon(data.current.condition.code));
  weatherIcon.src = `assets/${getWeatherIcon(data.current.condition.code)}`;
}

function getInput() {
  const input = document.querySelector("input[type=search]");

  return input.value;
}

function showTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();

  const h1 = document.getElementById("clock");

  h1.textContent = `${h}:${m}`;

  setTimeout(showTime, 60000);
}

function showDate() {
  const date = new Date();
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay();

  const h1 = document.getElementById("day-date");
  const h2 = document.getElementById("day-week");

  h1.textContent = parseDay(date.getDay());
  h2.textContent = dayOfMonth;
}

function updateTemperatuteValues() {
  const data = getData();

  populateSectionOne(data, getTemperatureUnit());
}

function switchTemperatureUnit() {
  toggleTemperatureUnit();

  buttonTemperatureUnit.textContent = getTemperatureUnit()
    ? "DISPLAY °F"
    : "DISPLAY °C";

  updateTemperatuteValues();
}

function clearInput() {
  const input = document.querySelector("input[type=search]");
  console.log(input);
  input.value = "";
}

async function search() {
  const input = getInput();
  await fetchData(input);
  const data = getData();

  populateSectionOne(data, getTemperatureUnit());

  clearInput();
}

buttonSearch.addEventListener("click", search);
buttonTemperatureUnit.addEventListener("click", switchTemperatureUnit);

showTime();
showDate();

export { populateSectionOne };
