import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { getForecastUrl } from "../../utils/constants/urls";
import { toCelsius } from "../../utils/constants/convertion";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();
  const getForecast = async () => {
    const url = getForecastUrl({ city, countryCode });
    try {
      const { data } = await axios.get(url);
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
      setChartData(date);
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
      setForecastItemList(forecastItemList);
    } catch (ex) {
      console.error(`Error: ${ex.message}`);
    }
  };
  useEffect(() => {
    getForecast();
  }, [city, countryCode]);

  return { city, chartData, forecastItemList, countryCode };
};

export default useCityPage;
