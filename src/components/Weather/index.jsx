import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import IconState from "../IconState";

const Weather = ({ temperature, state }) => (
  <Grid
    container
    item
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing="1"
  >
    <IconContext.Provider value={{ size: "6em" }}>
      <IconState state={state} />
    </IconContext.Provider>
    <Typography display="inline" variant="h2">
      {temperature}
    </Typography>
  </Grid>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
