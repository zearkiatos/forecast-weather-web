/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CityList from '../../../src/components/CityList';
import CityBuilder from '../../builders/cityBuilder';

describe("Unit test suite for CityList component", () => {
    test("Should render CityList component", async () => {
        const cities = [new CityBuilder().build()];
        const { findAllByRole } = render(<CityList cities={cities}/>);

        const cityListComponent = await findAllByRole("listitem");

        expect(cityListComponent).toHaveLength(1);
    });
});