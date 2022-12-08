/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Forecast from "../../../src/components/Forecast";
import ForecastBuilder from "../../builders/forecastBuilder";
import WEATHERS from "../../../src/utils/constants/weathers";
import DAYS_OF_WEEK from "../../../src/utils/constants/weekDays";

describe("Unit test suite for Forecast component", () => {
  test("Should render Forecast component", async () => {
    const forecastItemList = [
      new ForecastBuilder().build(),
      new ForecastBuilder()
        .withHour(18)
        .withState(WEATHERS.CLEAR)
        .withTemperature(17)
        .withWeekDay(DAYS_OF_WEEK.THURSDAY)
        .build(),
      new ForecastBuilder()
        .withHour(6)
        .withState(WEATHERS.CLOUD)
        .withTemperature(18)
        .withWeekDay(DAYS_OF_WEEK.FRIDAY)
        .build(),
      new ForecastBuilder()
        .withHour(12)
        .withState(WEATHERS.DRIZZLE)
        .withTemperature(18)
        .withWeekDay(DAYS_OF_WEEK.FRIDAY)
        .build(),
      new ForecastBuilder()
        .withHour(18)
        .withTemperature(19)
        .withWeekDay(DAYS_OF_WEEK.FRIDAY)
        .build(),
      new ForecastBuilder()
        .withHour(6)
        .withState(WEATHERS.RAIN)
        .withTemperature(17)
        .withWeekDay(DAYS_OF_WEEK.SATURDAY)
        .build(),
      new ForecastBuilder()
        .withHour(12)
        .withState(WEATHERS.RAIN)
        .withTemperature(17)
        .withWeekDay(DAYS_OF_WEEK.SATURDAY)
        .build(),
    ];
    const { findAllByTestId } = render(
      <Forecast forecastItemList={forecastItemList} />
    );

    const forecastItems = await findAllByTestId("forecast-item-container");

    expect(forecastItems).toHaveLength(7);
  });
});
