import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import useCityList from "../../hooks/useCityList";
import { getCityCode } from "../../utils/constants/cities";

const renderCity =
  (eventOnClickCity) =>
  ({ city, countryCode, country }, weather) => {
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={() => eventOnClickCity(city, countryCode)}
      >
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

const CityList = ({ cities, onClickCity, data, actions }) => {
  const { onSetAllWeather } = actions;
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, onSetAllWeather);
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
