/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Weather from "../../src/Weather";

describe("Unit test suite for Weather component", () => {
  test("Should render Weather component", async () => {
    const { findByRole } = render(<Weather temperature={10} />);

    const temperature = await findByRole("heading");

    expect(temperature).toHaveTextContent("10");
  });
});
