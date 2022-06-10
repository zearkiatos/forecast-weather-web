import React from "react";
import ForecastItem from ".";
import WEATHERS from "../../utils/constants/weathers";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const MondaySunny = () => (
  <ForecastItem
    hour={10}
    state={WEATHERS.SUNNY}
    temperature={23}
    weekDay="Monday"
  />
);
