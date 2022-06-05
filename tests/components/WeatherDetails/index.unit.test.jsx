/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "../../../src/components/WeatherDetails";

describe("Unit test suite for Weather Details component", () => {
  test("Should render Weather Details component", async () => {
    const { findByText } = render(<Weather humidity={10} wind={10} />);

    const humidity = await findByText("Humidity: 10%");
    const wind = await findByText("Wind: 10 km/h");

    expect(humidity).toHaveTextContent("10");
    expect(wind).toHaveTextContent("10");
  });
});
