import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiSnowy
} from "react-icons/wi";
import { IconContext } from "react-icons";

const stateByName = {
  'CLOUD': WiCloud,
  'CLOUDY': WiDayCloudy,
  'FOG': WiDayFog,
  'SUNNY': WiDaySunny,
  'RAIN': WiRain,
  'SNOWY': WiSnowy
};

const renderState = state => stateByName[state];

const Weather = ({ temperature, state }) => (
  <div>
    <IconContext.Provider value={{ size: "5em" }}>
      <WiCloud />
    </IconContext.Provider>
    <Typography display="inline" variant="h2">
      {temperature}
    </Typography>
  </div>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
