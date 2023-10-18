import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/sec-one.scss";
import "./styles/sec-two.scss";
import "./styles/sec-three.scss";
import "./styles/sec-four.scss";
import { populateSectionOne } from "./dom";
import { fetchData, getData, getTemperatureUnit } from "./api";

async function initializeApp() {
  await fetchData("Manila");
  const data = getData();
  populateSectionOne(data, getTemperatureUnit());
}

initializeApp();
