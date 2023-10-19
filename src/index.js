import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/sec-one.scss";
import "./styles/sec-two.scss";
import "./styles/sec-three.scss";
import "./styles/sec-four.scss";
import {
  populateDate,
  populateSectionOne,
  populateSectionThree,
  populateTime,
} from "./dom";
import { fetchData, getTemperatureUnit } from "./api";

async function initializeApp() {
  await fetchData("Manila");

  populateSectionOne(getTemperatureUnit());
  populateSectionThree(getTemperatureUnit());
  populateDate();
  populateTime();
}

initializeApp();
