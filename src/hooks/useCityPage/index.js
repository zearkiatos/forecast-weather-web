import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getForecastUrl } from "../../utils/constants/urls";
import getChartData from "../../utils/transform/getChartData";
import getForecastItemList from "../../utils/transform/getForecastItemList";

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
      const forecastItemList = getForecastItemList(data);
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
