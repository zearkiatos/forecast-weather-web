/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "../../src/CityInfo";

describe("Unit test suite for CityInfo component", () => {
  test("Should render CityInfo component", async () => {
    const { findAllByRole } = render(
      <CityInfo city="Puerto Cabello" country="Venezuela" />
    );

    const cityAndCountryComponents = await findAllByRole("heading");
    // Arrange
    // Act
    // Assert
  });
});
