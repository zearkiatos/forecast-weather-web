import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import CityInfo from "../../components/CityInfo";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import ForecastChart from "../../components/ForecastChart";
import Forecast from "../../components/Forecast";
import WEATHERS from "../../utils/constants/weathers";
import forecastChartData from "../../data/mocks/forecastChartData";
import forecastItemListData from "../../data/mocks/forecastItemListData";
import AppFrame from "../../components/AppFrame";
import config from "../../config";

const City = () => {
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();
  const state = WEATHERS.CLOUDY;
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const getForecast = async () => {
    const url = `${config.OPEN_WEATHER_MAP.API_BASE_URL}/data/${config.OPEN_WEATHER_MAP.VERSION}/forecast?q=${city},${countryCode}&appid=${config.OPEN_WEATHER_MAP.API_KEY}`;
    try {
      const { data } = await axios.get(url);
      console.log(data);
      const daysAhead = [0, 1, 2, 3, 4, 5];
      const days = daysAhead.map((day) => moment().add(day, "d"));
      const date = days.map((day) => {
        return {
          dayHour: day.format("ddd"),
          min: 10,
          max: 30,
        };
      });
      setData(date);
      setForecastItemList(forecastItemListData);
    } catch (ex) {
      console.error(`Error: ${ex.message}`);
    }
  };
  useEffect(() => {
    getForecast();
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
          <CityInfo city={city} country={countryCode} />
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>{data && <ForecastChart data={data} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default City;
