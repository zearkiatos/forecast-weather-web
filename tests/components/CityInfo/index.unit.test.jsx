/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CityInfo from "../../../src/components/CityInfo";

describe("Unit test suite for CityInfo component", () => {
  test("Should render CityInfo component", async () => {
    const cityExpected = "Puerto Cabello";
    const countryExpected = "Venezuela";
    const { findAllByRole } = render(
      <CityInfo city="Puerto Cabello" country="Venezuela" />
    );

    const cityAndCountryComponents = await findAllByRole("heading");

    expect(cityAndCountryComponents[0]).toHaveTextContent(countryExpected);
    expect(cityAndCountryComponents[1]).toHaveTextContent(cityExpected);
  });
});
