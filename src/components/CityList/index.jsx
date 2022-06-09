import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import WEATHERS from "../Weather/weathers";

const renderCity =
  (eventOnClickCity) =>
  ({ city, country }) =>
    (
      <li key={`${city}-${country}`} onClick={eventOnClickCity}>
        <Grid container justify="center" alignItems="center">
          <Grid item md={8} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Weather temperature={10} state={WEATHERS.SUNNY} />
          </Grid>
        </Grid>
      </li>
    );

const CityList = ({ cities, onClickCity }) => {
  return <ul>{cities.map((city) => renderCity(onClickCity)(city))}</ul>;
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;