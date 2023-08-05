import moment from "moment";
import { toCelsius } from "../constants/convertion";

const getChartData = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5];
  const days = daysAhead.map((day) => moment().add(day, "d"));
  const date = days
    .map((day) => {
      const tempObjectArray = data.list.filter((item) => {
        const dayOfYear = moment.unix(item.dt).dayOfYear();
        return dayOfYear === day.dayOfYear();
      });
      const temps = tempObjectArray.map((item) => item.main.temp);

      return {
        dayHour: day.format("ddd"),
        min: toCelsius(Math.min(...temps)),
        max: toCelsius(Math.max(...temps)),
        hasTemperature: temps.length > 0,
      };
    })
    .filter((item) => item.hasTemperature);

  return date;
};

export default getChartData;
