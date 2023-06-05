import moment from "moment";
import { toCelsius } from "../constants/convertion";

const getForecastItemList = (data) => {
  const interval = [4, 8, 12, 16, 20, 24];

  const forecastItemList = data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => ({
      hour: moment.unix(item.dt).hour(),
      weekDay: moment.unix(item.dt).format("dddd"),
      state: item.weather[0].main.toUpperCase(),
      humidity: item.main.humidity,
      wind: item.wind.speed,
      temperature: toCelsius(item.main.temp),
    }));

  return forecastItemList;
};

export default getForecastItemList;
