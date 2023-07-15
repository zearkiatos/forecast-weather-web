import React from "react";
import "typeface-roboto";
import CityInfo from ".";

export default {
  title: "CityInfo",
  component: CityInfo,
  argTypes: {
    city: {
      control: {
        type: "text",
      },
    },
    country: {
      control: {
        type: "text",
      },
    },
  },
};

export const CityExample = (args) => <CityInfo {...args}></CityInfo>;

CityExample.args = {
  city: "Puerto Cabello",
  country: "Venezuela",
};
