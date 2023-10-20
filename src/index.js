import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/sec-one.scss";
import "./styles/sec-two.scss";
import "./styles/sec-three.scss";
import "./styles/sec-four.scss";
import "./styles/footer.scss";
import "./styles/breakpoints/bp-index.scss";
import "./styles/breakpoints/bp-sec-one.scss";
import "./styles/breakpoints/bp-sec-two.scss";
import "./styles/breakpoints/bp-sec-three.scss";
import "./styles/breakpoints/bp-sec-four.scss";
import "./styles/breakpoints/bp-header.scss";

import {
  populateDate,
  populateSectionFour,
  populateSectionOne,
  populateSectionThree,
  populateTime,
  showActiveForecastType,
} from "./dom";
import { fetchData, getStartIndexForecast } from "./api";

async function initializeApp() {
  await fetchData("Manila");

  populateSectionOne();
  populateSectionThree();
  populateDate();
  populateTime();
  populateSectionFour(getStartIndexForecast());
  showActiveForecastType();
}

initializeApp();
