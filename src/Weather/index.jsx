import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { WiCloud } from "react-icons/wi";
import { IconContext } from "react-icons";

const Weather = ({ temperature }) => (
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
