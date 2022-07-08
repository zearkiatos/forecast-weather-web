import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import WEATHERS from "../../utils/constants/weathers";

const renderCity =
  (eventOnClickCity) =>
  ({ city, country }) =>
    (
      <ListItem button key={`${city}-${country}`} onClick={eventOnClickCity}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Weather temperature={10} state={WEATHERS.SUNNY} />
          </Grid>
        </Grid>
      </ListItem>
    );

const CityList = ({ cities, onClickCity }) => {
  return <List>{cities.map((city) => renderCity(onClickCity)(city))}</List>;
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
