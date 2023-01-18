import { useState, useEffect } from "react";
import axios from "axios";
import convertUnits from "convert-units";
import WEATHERS from "../../utils/constants/weathers";
import config from "../../config";
import { getCityCode } from "../../utils/constants/cities";

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);
  const getWeather = async (city, countryCode) => {
    try {
      const response = await axios.get(
        `${config.OPEN_WEATHER_MAP.API_BASE_URL}/data/${config.OPEN_WEATHER_MAP.VERSION}/weather?q=${city},${countryCode}&appid=${config.OPEN_WEATHER_MAP.API_KEY}`
      );

      if (response) {
        const { data } = response;

        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C")
        ).toFixed(0);
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
