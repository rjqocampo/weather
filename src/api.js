import { handleError } from "./dom";

let data = null;
let temperatureUnit = true;
let forecastType = false;
let startIndexForecast = 0;

async function fetchData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=968026c727974d82b99102459230710&q=${city}&days=3`,
      { mode: "cors" },
    );
    const responseData = await response.json();

    if (response.status !== 200) {
      throw new Error(responseData.error.message);
    }

    console.log(responseData);

    data = responseData;

    return true;
  } catch (error) {
    console.error(error);

    handleError();

    return false;
  }
}

function getData() {
  return data;
}

function getTemperatureUnit() {
  return temperatureUnit;
}

function getForecastType() {
  return forecastType;
}

function toggleTemperatureUnit() {
  temperatureUnit = !temperatureUnit;
}

function toggleForecastType(input) {
  if (input) {
    forecastType = true;
  } else {
    forecastType = false;
  }
  console.log(forecastType);
}

function getStartIndexForecast() {
  return startIndexForecast;
}

function navigateForecast(input) {
  if (input === true) {
    startIndexForecast += 3;
  } else if (input === false) {
    startIndexForecast -= 3;
  }
}

function resetStartIndexForecast() {
  startIndexForecast = 0;
}

export {
  fetchData,
  getData,
  getTemperatureUnit,
  toggleTemperatureUnit,
  getForecastType,
  toggleForecastType,
  getStartIndexForecast,
  resetStartIndexForecast,
  navigateForecast,
};
