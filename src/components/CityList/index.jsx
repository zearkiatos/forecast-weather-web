import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import axios from "axios";
import convertUnits from "convert-units";
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
  const getWeather = async (city, country, countryCode) => {
    try {
      const response = await axios.get(
        `${config.OPEN_WEATHER_MAP.API_BASE_URL}/data/${config.OPEN_WEATHER_MAP.VERSION}/weather?q=${city},${countryCode}&appid=${config.OPEN_WEATHER_MAP.API_KEY}`
      );

      if (response) {
        const { data, status } = response;

        console.log('data', data);
        console.log('status', status);

        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C")
        ).toFixed(0);
        const state = WEATHERS[data.weather[0].main.toUpperCase()];
        const propertyName = `${city}-${country}`;
        const propertyValue = { temperature, state };
        setAllWeather((allWeather) => ({
          ...allWeather,
          [propertyName]: propertyValue,
        }));
      }
      else if (response.request) {
        console.error("Server unavailable");
      }
      else {
        console.error("Unknow error");
      }
    } catch (ex) {
      console.error(`Error ${ex.message}`);
    }
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
