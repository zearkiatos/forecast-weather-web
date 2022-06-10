import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import IconState from "../IconState";

const Weather = ({ temperature, state }) => (
  <div>
    <IconState state={state} />
    <Typography display="inline" variant="h2">
      {temperature}
    </Typography>
  </div>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
