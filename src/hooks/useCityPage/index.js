import { useEffect, useDebugValue } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getForecastUrl } from "../../utils/constants/urls";
import getChartData from "../../utils/transform/getChartData";
import getForecastItemList from "../../utils/transform/getForecastItemList";
import { getCityCode } from "../../utils/constants/cities";
import { FORECAST_TYPES, CHART_TYPES } from "../../types";

const useCityPage = (allChartData, allForecastItemList, actions) => {
  const { city, countryCode } = useParams();
  useDebugValue(`useCityPage ${city}`);
  useEffect(() => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode });
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);
        const chartData = getChartData(data);
        actions({
          type: CHART_TYPES.SET_CHART_DATA,
          payload: {
            [cityCode]: chartData,
          },
        });
        const forecastItemList = getForecastItemList(data);
        actions({
          type: FORECAST_TYPES.SET_FORECAST_ITEM_LIST,
          payload: {
            [cityCode]: forecastItemList,
          },
        });
      } catch (ex) {
        console.error(`Error: ${ex.message}`);
      }
    };
    const cityCode = getCityCode(city, countryCode);
    if (
      allChartData &&
      allForecastItemList &&
      !allChartData[cityCode] &&
      !allForecastItemList[cityCode]
    ) {
      getForecast();
    }
  }, [city, countryCode, actions, allChartData, allForecastItemList]);

  return { city, countryCode };
};

export default useCityPage;
