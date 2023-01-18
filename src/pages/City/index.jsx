import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import convertUnits from "convert-units";
import "moment/locale/es";
import CityInfo from "../../components/CityInfo";
import Weather from "../../components/Weather";
import WeatherDetails from "../../components/WeatherDetails";
import ForecastChart from "../../components/ForecastChart";
import Forecast from "../../components/Forecast";
import AppFrame from "../../components/AppFrame";
import config from "../../config";

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();
  const getForecast = async () => {
    const toCelsius = (temp) =>
      Number(convertUnits(temp).from("K").to("C").toFixed());
    const url = `${config.OPEN_WEATHER_MAP.API_BASE_URL}/data/${config.OPEN_WEATHER_MAP.VERSION}/forecast?q=${city},${countryCode}&appid=${config.OPEN_WEATHER_MAP.API_KEY}`;
    try {
      const { data } = await axios.get(url);
      console.log(data);
      const daysAhead = [0, 1, 2, 3, 4, 5];
      const days = daysAhead.map((day) => moment().add(day, "d"));
      const date = days.map((day) => {
        const tempObjectArray = data.list.filter((item) => {
          const dayOfYear = moment.unix(item.dt).dayOfYear();
          return dayOfYear === day.dayOfYear();
        });
        console.log("dayOfYear", day.dayOfYear());
        console.log("tempObjectArray", tempObjectArray);
        const temps = tempObjectArray.map((item) => item.main.temp);

        console.log(temps);
        return {
          dayHour: day.format("ddd"),
          min: toCelsius(Math.min(...temps)),
          max: toCelsius(Math.max(...temps)),
        };
      });
      setChartData(date);
      const interval = [4, 8, 12, 16, 20, 24];

      const forecastItemList = data.list
        .filter((item, index) => interval.includes(index))
        .map((item) => ({
          hour: moment.unix(item.dt).hour(),
          weekDay: moment.unix(item.dt).format("dddd"),
          state: item.weather[0].main.toUpperCase(),
          temperature: toCelsius(item.main.temp),
        }));
      setForecastItemList(forecastItemList);
    } catch (ex) {
      console.error(`Error: ${ex.message}`);
    }
  };
  useEffect(() => {
    getForecast();
  }, [city, countryCode]);

  return { city, chartData, forecastItemList, countryCode };
};

const City = () => {
  const { city, chartData, forecastItemList, countryCode } = useCityPage();
  console.log("forecastItemList", forecastItemList);
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
              state={forecastItemList.state}
              temperature={forecastItemList.temperature}
            />
            <WeatherDetails
              humidity={forecastItemList.humidity}
              wind={forecastItemList.wind}
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
