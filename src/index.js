import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/sec-one.scss";
import "./styles/sec-two.scss";
import "./styles/sec-three.scss";
import "./styles/sec-four.scss";
import {
  populateDate,
  populateSectionFour,
  populateSectionOne,
  populateSectionThree,
  populateTime,
  showActiveForecastType,
} from "./dom";
import { fetchData, getTemperatureUnit } from "./api";

async function initializeApp() {
  await fetchData("Manila");

  populateSectionOne(getTemperatureUnit());
  populateSectionThree(getTemperatureUnit());
  populateDate();
  populateTime();
  populateSectionFour();
  showActiveForecastType();
}

initializeApp();
