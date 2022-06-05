import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <Fragment>
      <Typography variant="h2">Humidity: {humidity}%</Typography>
      <Typography variant="h2">Wind: {wind} km/h</Typography>
    </Fragment>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
