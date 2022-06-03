import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiSnow,
} from "react-icons/wi";
import { IconContext } from "react-icons";
import WEATHERS from "./weathers";

const stateByName = {
  CLOUD: <WiCloud />,
  CLOUDY: <WiDayCloudy />,
  FOG: <WiDayFog />,
  SUNNY: <WiDaySunny />,
  RAIN: <WiRain />,
  SNOW: <WiSnow />,
};

const renderState = (state) => stateByName[state] || <WiDaySunny />;

const Weather = ({ temperature, state }) => (
  <div>
    <IconContext.Provider value={{ size: "5em" }}>
      {renderState(state)}
    </IconContext.Provider>
    <Typography display="inline" variant="h2">
      {temperature}
    </Typography>
  </div>
);

const stateValidValues = Object.values(WEATHERS);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(stateValidValues).isRequired,
};

export default Weather;
