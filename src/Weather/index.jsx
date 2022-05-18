import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Weather = ({ temperature }) => (
  <div>
    <Typography variant="h2">{temperature}</Typography>
  </div>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
