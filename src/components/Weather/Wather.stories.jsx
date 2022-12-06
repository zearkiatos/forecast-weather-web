import React from "react";
import Weather from ".";
import WEATHERS from "../../utils/constants/weathers";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherExample = () => (
  <Weather temperature="10" state={WEATHERS.CLOUDS} />
);

export const WeatherSunnyExample = () => (
  <Weather temperature="30" state={WEATHERS.CLEAR} />
);
