import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import axios from "axios";
import convertUnits from "convert-units";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import WEATHERS from "../../utils/constants/weathers";
import config from "../../config";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

const renderCity =
  (eventOnClickCity) =>
  ({ city, countryCode, country }, weather) => {
    return (
      <ListItem button key={getCityCode(city, countryCode)} onClick={eventOnClickCity}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  };

const CityList = ({ cities, onClickCity }) => {
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
  const onCloseError = () => setError(null);
  return (
    <div>
      {error && (
        <Alert onClose={onCloseError} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((city) =>
          renderCity(onClickCity)(
            city,
            allWeather[getCityCode(city.city, city.countryCode)]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
