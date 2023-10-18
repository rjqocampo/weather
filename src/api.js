import { clearInput } from "./dom";

let data = null;
let temperatureUnit = true;

async function fetchData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=968026c727974d82b99102459230710&q=${city}&days=3`,
      { mode: "cors" },
    );
    const responseData = await response.json();

    if (response.status !== 200) {
      console.log("RESPONSE: ", response);
      console.log("DATA: ", responseData);
      throw new Error(responseData.error.message);
    }
    console.log(responseData);
    data = responseData;
  } catch (error) {
    window.alert(error);
    console.error(error);
  }
}

function getData() {
  return data;
}

function getTemperatureUnit() {
  return temperatureUnit;
}

function toggleTemperatureUnit() {
  temperatureUnit = !temperatureUnit;
  console.log(temperatureUnit);
}

export { fetchData, getData, getTemperatureUnit, toggleTemperatureUnit };
