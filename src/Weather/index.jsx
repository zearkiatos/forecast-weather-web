import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { WiCloud } from "react-icons/wi";

const Weather = ({ temperature }) => (
  <div>
    <WiCloud></WiCloud>
    <Typography display="inline" variant="h2">
      {temperature}
    </Typography>
  </div>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
