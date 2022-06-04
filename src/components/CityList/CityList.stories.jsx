import React from "react";
import { action } from "@storybook/addon-actions";
import CityList from ".";

export default {
  title: "CityList",
  component: CityList,
};

const cities = [
  {
    city: "New York",
    country: "United States",
  },
  {
    city: "Santiago de Chile",
    country: "Chile",
  },
  {
    city: "Puerto Cabello",
    country: "Venezuela",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
  },
  {
    city: "Bogota",
    country: "Colombia",
  },
  {
    city: "Madrid",
    country: "Spain",
  },
  {
    city: "Ciudad de Mexico",
    country: "Mexico",
  },
];

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action("Click in the city")} />
);
