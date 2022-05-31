import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import WEATHERS from "../Weather/weathers";

const renderCity = ({ city, country }) => (
  <li key={`${city}-${country}`}>
    <Grid container justify="center" alignItems="center">
      <Grid item sm={8}>
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid item sm={4}>
        <Weather temperature={10} state={WEATHERS.SUNNY} />
      </Grid>
    </Grid>
  </li>
);

const CityList = ({ cities }) => {
  return <ul>{cities.map((city) => renderCity(city))}</ul>;
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default CityList;
