/* eslint-disable testing-library/prefer-screen-queries */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "../../../src/components/WeatherDetails";

describe("Unit test suite for Weather Details component", () => {
  test("Should render Weather Details component", async () => {
    const { findByText } = render(<Weather humidity={80} wind={10} />);

    const humidity = await findByText(/80/);
    const wind = await findByText(/10/);

    expect(humidity).toHaveTextContent("Humidity: 80%");
    expect(wind).toHaveTextContent("Wind: 10 km/h");
  });
});
