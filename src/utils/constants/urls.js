import config from "../../config";

const getMethodUrl = (method, query) =>
  `${config.OPEN_WEATHER_MAP.API_BASE_URL}/data/${config.OPEN_WEATHER_MAP.VERSION}/${method}?q=${query.city},${query.countryCode}&appid=${config.OPEN_WEATHER_MAP.API_KEY}`;

const getWeatherUrl = ({ city, countryCode }) =>
  getMethodUrl("weather", { city, countryCode });

const getForecastUrl = ({ city, countryCode }) =>
  getMethodUrl("forecast", { city, countryCode });
export { getWeatherUrl, getForecastUrl };
