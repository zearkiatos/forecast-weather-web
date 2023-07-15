import React from "react";
import Weather from ".";
import WEATHERS from "../../utils/constants/weathers";

export default {
  title: "Weather",
  component: Weather,
};

const WeatherTemplate = (args) => <Weather {...args} />;

export const WeatherExample = WeatherTemplate.bind({});
WeatherExample.args = {
  temperature: 10,
  state: WEATHERS.CLOUDS,
};

export const WeatherSunnyExample = WeatherTemplate.bind({});

WeatherSunnyExample.args = {
  temperature: 30,
  state: WEATHERS.CLEAR,
};
