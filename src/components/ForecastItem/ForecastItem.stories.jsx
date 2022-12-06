import React from "react";
import ForecastItem from ".";
import WEATHERS from "../../utils/constants/weathers";
import DAYS_OF_WEEK from "../../utils/constants/weekDays";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const MondaySunny = () => (
  <ForecastItem
    hour={10}
    state={WEATHERS.CLEAR}
    temperature={23}
    weekDay={DAYS_OF_WEEK.MONDAY}
  />
);

export const FridayClearNight = () => (
  <ForecastItem 
    hour={19}
    state={WEATHERS.CLEAR_NIGHT}
    temperature={14}
    weekDay={DAYS_OF_WEEK.FRIDAY}
  />
)
