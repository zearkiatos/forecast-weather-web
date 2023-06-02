import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { getForecastUrl } from "../../utils/constants/urls";
import { toCelsius } from "../../utils/constants/convertion";
import getChartData from "../../utils/transform/getChartData";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();
  const getForecast = async () => {
    const url = getForecastUrl({ city, countryCode });
    try {
      const { data } = await axios.get(url);
      const date = getChartData(data);
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
