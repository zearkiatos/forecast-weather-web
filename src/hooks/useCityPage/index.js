import { useEffect, useDebugValue } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getForecastUrl } from "../../utils/constants/urls";
import getChartData from "../../utils/transform/getChartData";
import getForecastItemList from "../../utils/transform/getForecastItemList";

const useCityPage = (onSetChartData, onSetForecastItemList) => {
  const { city, countryCode } = useParams();
  useDebugValue(`useCityPage ${city}`);
  const getForecast = async () => {
    const url = getForecastUrl({ city, countryCode });
    try {
      const { data } = await axios.get(url);
      const date = getChartData(data);
      onSetChartData(date);
      const forecastItemList = getForecastItemList(data);
      onSetForecastItemList(forecastItemList);
    } catch (ex) {
      console.error(`Error: ${ex.message}`);
    }
  };
  useEffect(() => {
    getForecast();
  }, [city, countryCode, onSetChartData, onSetForecastItemList]);

  return { city, countryCode };
};

export default useCityPage;
