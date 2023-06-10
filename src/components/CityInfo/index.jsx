import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const CityInfo = ({ city, country }) => {
  return (
    <Fragment>
      <Typography display="inline" variant="h4">{country}, </Typography>
      <Typography display="inline" variant="h6">{city}</Typography>
    </Fragment>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
