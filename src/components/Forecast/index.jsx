import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import ForecastItem from "../ForecastItem";

const renderForecast = ({ hour, weekDay, state, temperature }) => (
  <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
    <ForecastItem
      hour={hour}
      weekDay={weekDay}
      state={state}
      temperature={temperature}
    />
  </Grid>
);
const Forecast = ({ forecastItemList }) => {
  const renderForecastItemList = forecastItemList.map((forecast) =>
    renderForecast(forecast)
  );
  return (
    <Grid container justify="center" alignItems="center">
      {renderForecastItemList}
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
