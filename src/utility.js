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
  console.log(obj);
  return obj.source;
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
    default:
      return "Mon";
  }
}

export { parseDay, getWeatherIcon };
