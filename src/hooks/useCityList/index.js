import { useState, useEffect } from "react";
import axios from "axios";
import WEATHERS from "../../utils/constants/weathers";
import { getCityCode } from "../../utils/constants/cities";
import { getWeatherUrl } from "../../utils/constants/urls";
import { toCelsius } from "../../utils/constants/convertion";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  const getWeather = async (city, countryCode) => {
    try {
      const response = await axios.get(
        getWeatherUrl({
          city,
          countryCode,
        })
      );

      if (response) {
        const { data } = response;

        const temperature = toCelsius(data.main.temp);
        const state = WEATHERS[data.weather[0].main.toUpperCase()];
        const propertyName = getCityCode(city, countryCode);
        const propertyValue = { temperature, state };
        setAllWeather((allWeather) => ({
          ...allWeather,
          [propertyName]: propertyValue,
        }));
      }
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
      getWeather(city, countryCode);
    });
  }, [cities]);

  return { allWeather, error, setError };
};

export default useCityList;
