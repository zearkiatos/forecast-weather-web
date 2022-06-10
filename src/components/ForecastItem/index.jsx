import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
  WiSnow,
} from "react-icons/wi";
import { IconContext } from "react-icons";
import Grid from "@mui/material/Grid";
import WEATHERS from "../Weather/weathers";

const stateByName = {
  CLOUD: <WiCloud />,
  CLOUDY: <WiDayCloudy />,
  FOG: <WiDayFog />,
  SUNNY: <WiDaySunny />,
  RAIN: <WiRain />,
  SNOW: <WiSnow />,
};

const renderState = (state) => stateByName[state] || <WiDaySunny />;

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: "5em" }}>
          {renderState(state)}
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature}°</Typography>
      </Grid>
    </Grid>
  );
};

const stateValidValues = Object.values(WEATHERS);

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(stateValidValues).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
