import "./styles/index.scss";

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=968026c727974d82b99102459230710&q=${city}&days=3`,
      { mode: "cors" },
    );
    const data = await response.json();

    if (response.status !== 200) {
      console.log("RESPONSE: ", response);
      console.log("DATA: ", data);
      throw new Error(data.error.message);
    }

    console.log("RESPONSE: ", response);
    console.log("DATA: ", data);
  } catch (error) {
    console.error(error);
  }
}

getWeather("manila");
