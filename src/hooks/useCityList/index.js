import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "../../utils/constants/urls";
import getAllWeather from "../../utils/transform/getAllWeather";

const useCityList = (cities, onSetAllWeather) => {
  const [error, setError] = useState(null);
  const getWeather = async (city, countryCode) => {
    try {
      const response = await axios.get(
        getWeatherUrl({
          city,
          countryCode,
        })
      );
      const allWeatherTransformed = getAllWeather(response, city, countryCode);

      onSetAllWeather(allWeatherTransformed);
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
  }, [cities, onSetAllWeather]);

  return { error, setError };
};

export default useCityList;
