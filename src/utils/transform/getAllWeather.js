import WEATHERS from "../constants/weathers";
import { getCityCode } from "../constants/cities";
import { toCelsius } from "../constants/convertion";
const getAllWeather = (response, city, countryCode) => {
  const { data } = response;

  const temperature = toCelsius(data.main.temp);
  const state = WEATHERS[data.weather[0].main.toUpperCase()];
  const propertyName = getCityCode(city, countryCode);
  const propertyValue = { temperature, state };
  return {
    [propertyName]: propertyValue,
  };
};

export default getAllWeather;
