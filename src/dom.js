import { parseDay } from "./utility";
import { getData } from "./api";

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

showTime();
showDate();
