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

function showTime() {
  const date = new Date();
  const day = parseDay(date.getDay());
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const h1 = document.querySelector("h1");

  console.log(`${day} -- ${h}:${m}:${s}`);

  h1.textContent = `${day} -- ${h}:${m}:${s}`;

  setTimeout(showTime, 1000);
}

function parseDay(day) {
  switch (day) {
    case 1:
      return "Mon";
      break;
    case 2:
      return "Tue";
      break;
    case 3:
      return "Wed";
      break;
    case 4:
      return "Thu";
      break;
    case 5:
      return "Fri";
      break;
    case 6:
      return "Sat";
      break;
    case 7:
      return "Sun";
      break;
  }
}

getWeather("manila");
// showTime();
