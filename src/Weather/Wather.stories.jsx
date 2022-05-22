import React from "react";
import Weather from ".";
import WEATHERS from "./weathers";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherExample = () => <Weather temperature="10" state={WEATHERS.CLOUD} />;

export const WeatherSunnyExample = () => <Weather temperature="30" state={WEATHERS.SUNNY} />;
