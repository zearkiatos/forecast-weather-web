/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CityList from "../../../src/components/CityList";
import CityBuilder from "../../builders/cityBuilder";

describe("Unit test suite for CityList component", () => {
  test("Should render CityList component", async () => {
    const cities = [new CityBuilder().build()];
    const { findAllByRole } = render(
      <CityList onSetAllWeather={jest.fn()} cities={cities} onClickCity={jest.fn()} />
    );

    const cityListComponent = await findAllByRole("button");

    expect(cityListComponent).toHaveLength(1);
  });

  test("Should make click on the each item", async () => {
    const clickOnItem = jest.fn();
    const cities = [
      new CityBuilder().build(),
      new CityBuilder()
        .withCity("Santiago de Chile")
        .withCountry("Chile")
        .build(),
    ];

    const { findAllByRole } = render(
      <CityList cities={cities} onClickCity={clickOnItem} />
    );

    const items = await findAllByRole("button");
    fireEvent.click(items[1]);

    expect(clickOnItem).toHaveBeenCalled();
    expect(clickOnItem).toHaveBeenCalledTimes(1);
  });
});
