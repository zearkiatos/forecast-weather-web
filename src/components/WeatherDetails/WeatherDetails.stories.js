import React from "react";
import WeatherDetails from ".";

export default {
  title: "WeatherDetails",
  component: WeatherDetails,
};

export const WeatherDetailsExample = () => (
  <WeatherDetails humidity={10} wind={9} />
);
