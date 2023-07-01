import React, { memo } from "react";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import { getCityCode } from "../../utils/constants/cities";

const CityItem = memo(
  ({ city, countryCode, country, weather, eventOnClickCity }) => {
    return (
      <ListItem
        button
        key={getCityCode(city, countryCode)}
        onClick={() => eventOnClickCity(city, countryCode)}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={9} xs={12}>
            <CityInfo city={city} country={country} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Weather
              temperature={weather && weather.temperature}
              state={weather && weather.state}
            />
          </Grid>
        </Grid>
      </ListItem>
    );
  }
);

export default CityItem;
