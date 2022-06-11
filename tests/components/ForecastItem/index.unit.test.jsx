/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ForecastItem from "../../../src/components/ForecastItem";
import WEATHERS from "../../../src/utils/constants/weathers";
import DAYS_OF_WEEK from "../../../src/utils/constants/weekDays";

describe("Unit test suite for ForecastItem component", () => {
  test("Should render ForecastItem component", async () => {
    const { findByText } = render(
      <ForecastItem
        hour={19}
        weekDay={DAYS_OF_WEEK.FRIDAY}
        temperature={14}
        state={WEATHERS.NIGHT_CLEAR}
      />
    );

    const temperature = await findByText(/14/);
    const hour = await findByText(/19/);
    const weekDay = await findByText(/FRIDAY/);

    expect(temperature).toHaveTextContent("14°");
    expect(hour).toHaveTextContent("19");
    expect(weekDay).toHaveTextContent("FRIDAY");
  });
});
