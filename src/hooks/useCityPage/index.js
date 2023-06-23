import { useEffect, useDebugValue } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getForecastUrl } from "../../utils/constants/urls";
import getChartData from "../../utils/transform/getChartData";
import getForecastItemList from "../../utils/transform/getForecastItemList";
import { getCityCode } from "../../utils/constants/cities";

const useCityPage = (onSetChartData, onSetForecastItemList) => {
  const { city, countryCode } = useParams();
  useDebugValue(`useCityPage ${city}`);
  const getForecast = async () => {
    const url = getForecastUrl({ city, countryCode });
    const cityCode = getCityCode(city, countryCode);
    try {
      const { data } = await axios.get(url);
      const chartData = getChartData(data);
      onSetChartData({ [cityCode]: chartData });
      const forecastItemList = getForecastItemList(data);
      onSetForecastItemList({ [cityCode]: forecastItemList });
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
