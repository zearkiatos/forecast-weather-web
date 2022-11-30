import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import axios from "axios";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import WEATHERS from "../../utils/constants/weathers";
import config from "../../config";

const renderCity =
  (eventOnClickCity) =>
  ({ city, country }, weather) => {
    return (
      <ListItem button key={`${city}-${country}`} onClick={eventOnClickCity}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={3} xs={12}>
            {weather ? (
              <Weather
                temperature={weather.temperature}
                state={weather.state}
              />
            ) : (
              "Data not found"
            )}
          </Grid>
        </Grid>
      </ListItem>
    );
  };

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const getWeather = async (city, country, countryCode) => {
    const { data } = await axios.get(
      `${config.OPEN_WEATHER_MAP.API_BASE_URL}/data/${config.OPEN_WEATHER_MAP.VERSION}/weather?q=${city},${countryCode}&appid=${config.OPEN_WEATHER_MAP.API_KEY}`
    );
    const temperature = data.main.temp;
    const state = WEATHERS.SUNNY;
    const propertyName = `${city}-${country}`;
    const propertyValue = { temperature, state };
    setAllWeather((allWeather) => {
      const result = {
        ...allWeather,
        [propertyName]: propertyValue,
      };
      return result;
    });
  };
  useEffect(() => {
    cities.forEach(({ city, country, countryCode }) => {
      getWeather(city, country, countryCode);
    });
  }, [cities]);
  return (
    <List>
      {cities.map((city) =>
        renderCity(onClickCity)(
          city,
          allWeather[`${city.city}-${city.country}`]
        )
      )}
    </List>
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
