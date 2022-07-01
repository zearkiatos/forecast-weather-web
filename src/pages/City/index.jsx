import React from "react";
import Grid from "@mui/material/Grid";
import CityInfo from "../../components/CityInfo";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import ForecastChart from "../../components/ForecastChart";
import Forecast from "../../components/Forecast";
import WEATHERS from "../../utils/constants/weathers";
import forecastChartData from "../../data/mocks/forecastChartData";
import forecastItemListData from "../../data/mocks/forecastItemListData";

const City = () => {
  const city = "Puerto Cabello";
  const country = "Venezuela";
  const state = WEATHERS.CLOUDY;
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const data = forecastChartData;
  const forecastItemList = forecastItemListData;
  return (
    <Grid container justify="center" direction="column">
      <Grid item xs={12}>
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={8}>
          <Weather state={state} temperature={temperature} />
        </Grid>
        <Grid item xs={4}>
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
      </Grid>
      <Grid item>
        <ForecastChart data={data} />
      </Grid>
      <Grid item>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  );
};

export default City;
