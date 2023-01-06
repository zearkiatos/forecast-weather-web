import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import CityInfo from "../../components/CityInfo";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import ForecastChart from "../../components/ForecastChart";
import Forecast from "../../components/Forecast";
import WEATHERS from "../../utils/constants/weathers";
import forecastChartData from "../../data/mocks/forecastChartData";
import forecastItemListData from "../../data/mocks/forecastItemListData";
import AppFrame from "../../components/AppFrame";

const City = () => {
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const params = useParams();
  console.log(params);
  const city = "Puerto Cabello";
  const country = "Venezuela";
  const state = WEATHERS.CLOUDY;
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  // const data = forecastChartData;
  // const forecastItemList = forecastItemListData;
  useEffect(() => {
    setData(forecastChartData);
    setForecastItemList(forecastItemListData);
  }, [data, forecastItemList]);
  return (
    <AppFrame>
      <Grid
        container
        justifyContent="space-around"
        direction="column"
        spacing={2}
      >
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="flex-end"
        >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>
          {data && <ForecastChart data={data} />}
        </Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default City;
