import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "../../utils/constants/urls";
import { getCityCode } from "../../utils/constants/cities";
import getAllWeather from "../../utils/transform/getAllWeather";
import { WEATHER_TYPES } from "../../types";

const useCityList = (cities, allWeather, actions) => {
  const [error, setError] = useState(null);
  const getWeather = async (city, countryCode) => {
    try {
      const propertyName = getCityCode(city, countryCode);
      actions({
        type: WEATHER_TYPES.SET_ALL_WEATHER,
        payload: { [propertyName]: {} },
      });
      const response = await axios.get(
        getWeatherUrl({
          city,
          countryCode,
        })
      );
      const allWeatherTransformed = getAllWeather(response, city, countryCode);
      actions({
        type: WEATHER_TYPES.SET_ALL_WEATHER,
        payload: allWeatherTransformed,
      });
    } catch (ex) {
      if (ex.response) {
        setError("There was ocurred an error in the weather server");
      } else if (ex.request) {
        setError("Verify your internet connection");
      } else {
        const errorMessage = `Error ${ex.message}`;
        setError(errorMessage);
      }
    }
  };
  useEffect(() => {
    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        getWeather(city, countryCode);
      }
    });
  }, [cities, actions, allWeather]);

  return { error, setError };
};

export default useCityList;
