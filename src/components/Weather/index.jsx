import React from "react";
import { Typography, Skeleton } from "@mui/material";
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
      {state ? (
        <IconState state={state} />
      ) : (
        <Skeleton variant="circular" height={80} width={80}></Skeleton>
      )}
    </IconContext.Provider>
    {temperature ? (
      <Typography display="inline" variant="h2">
        {temperature}
      </Typography>
    ) : (
      <Skeleton variant="rectangular" height={80} width={80}></Skeleton>
    )}
  </Grid>
);

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
};

export default Weather;
