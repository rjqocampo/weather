const weatherCodes = [
  { code: 1000, source: "cloud-off.svg" },
  { code: 1003, source: "cloud.svg" },
  { code: 1006, source: "cloudy.svg" },
  { code: 1009, source: "cloudy.svg" },
  { code: 1030, source: "cloud-fog.svg" },
  { code: 1063, source: "cloud-drizzle.svg" },
  { code: 1066, source: "snowflake.svg" },
  { code: 1069, source: "cloud-drizzle.svg" },
  { code: 1072, source: "cloud-drizzle.svg" },
  { code: 1087, source: "cloud-lightning.svg" },
  { code: 1114, source: "snowflake.svg" },
  { code: 1117, source: "snowflake.svg" },
  { code: 1135, source: "cloud-fog.svg" },
  { code: 1147, source: "cloud-fog.svg" },
  { code: 1150, source: "cloud-drizzle.svg" },
  { code: 1153, source: "cloud-drizzle.svg" },
  { code: 1168, source: "cloud-drizzle.svg" },
  { code: 1171, source: "cloud-drizzle.svg" },
  { code: 1180, source: "cloud-rain-wind.svg" },
  { code: 1183, source: "cloud-rain-wind.svg" },
  { code: 1186, source: "cloud-rain-wind.svg" },
  { code: 1189, source: "cloud-rain-wind.svg" },
  { code: 1192, source: "cloud-rain-wind.svg" },
  { code: 1195, source: "cloud-rain-wind.svg" },
  { code: 1198, source: "cloud-rain-wind.svg" },
  { code: 1201, source: "cloud-rain-wind.svg" },
  { code: 1204, source: "cloud-drizzle.svg" },
  { code: 1207, source: "snowflake.svg" },
  { code: 1210, source: "snowflake.svg" },
  { code: 1213, source: "snowflake.svg" },
  { code: 1216, source: "snowflake.svg" },
  { code: 1219, source: "snowflake.svg" },
  { code: 1222, source: "snowflake.svg" },
  { code: 1225, source: "snowflake.svg" },
  { code: 1237, source: "snowflake.svg" },
  { code: 1240, source: "cloud-drizzle.svg" },
  { code: 1243, source: "cloud-rain-wind.svg" },
  { code: 1246, source: "cloud-rain-wind.svg" },
  { code: 1249, source: "snowflake.svg" },
  { code: 1252, source: "snowflake.svg" },
  { code: 1255, source: "snowflake.svg" },
  { code: 1258, source: "snowflake.svg" },
  { code: 1261, source: "snowflake.svg" },
  { code: 1264, source: "snowflake.svg" },
  { code: 1273, source: "cloud-lightning.svg" },
  { code: 1276, source: "cloud-lightning.svg" },
  { code: 1279, source: "snowflake.svg" },
  { code: 1282, source: "snowflake.svg" },
];

function getWeatherIcon(code) {
  const obj = weatherCodes.find((weatherCode) => code === weatherCode.code);

  return obj.source;
}

function formatDay(day) {
  switch (day) {
    case 1:
      return "MONDAY";
    case 2:
      return "TUESDAY";
    case 3:
      return "WEDNESDAY";
    case 4:
      return "THURSDAY";
    case 5:
      return "FRIDAY";
    case 6:
      return "SATURDAY";
    case 7:
      return "SUNDAY";
    default:
      return "DAY";
  }
}

function formatMonth(month) {
  switch (month) {
    case 0:
      return "JAN";
    case 1:
      return "FEB";
    case 2:
      return "MAR";
    case 3:
      return "APR";
    case 4:
      return "MAY";
    case 5:
      return "JUN";
    case 6:
      return "JUL";
    case 7:
      return "AUG";
    case 8:
      return "SEP";
    case 9:
      return "OCT";
    case 10:
      return "NOV";
    case 11:
      return "DEC";
    default:
      return "month";
  }
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours || 12;
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

export { formatDay, formatTime, formatMonth, getWeatherIcon };
