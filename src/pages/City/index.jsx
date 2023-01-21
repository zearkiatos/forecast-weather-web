import React from "react";
import Grid from "@mui/material/Grid";
import "moment/locale/es";
import CityInfo from "../../components/CityInfo";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import ForecastChart from "../../components/ForecastChart";
import Forecast from "../../components/Forecast";
import AppFrame from "../../components/AppFrame";
import useCityPage from "../../hooks/useCityPage";

const City = () => {
  const { city, chartData, forecastItemList, countryCode } = useCityPage();
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
          {city && countryCode && (
            <CityInfo city={city} country={countryCode} />
          )}
        </Grid>
        {forecastItemList && (
          <Grid container item xs={12} justifyContent="center">
            <Weather
              state={forecastItemList[0].state}
              temperature={forecastItemList[0].temperature}
            />
            <WeatherDetails
              humidity={forecastItemList[0].humidity}
              wind={forecastItemList[0].wind}
            />
          </Grid>
        )}

        <Grid item>{chartData && <ForecastChart data={chartData} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default City;
