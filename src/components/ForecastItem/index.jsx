import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconState from "../IconState";

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
        <IconState state={state} />
      </Grid>
      <Grid item>
        <Typography>{temperature}°</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
