import { useState, useEffect } from "react";
import axios from "axios";
import { getWeatherUrl } from "../../utils/constants/urls";
import getAllWeather from "../../utils/transform/getAllWeather";

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
      const allWeatherAux = getAllWeather(response, city, countryCode)
      setAllWeather(allWeather => ({
        ...allWeather,
        ...allWeatherAux
      }));
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
