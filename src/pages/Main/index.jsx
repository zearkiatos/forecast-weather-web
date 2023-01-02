import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import CityList from "../../components/CityList";
import AppFrame from "../../components/AppFrame";

const citiesMock = [
  {
    city: "New York",
    country: "United States",
    countryCode: "US",
  },
  {
    city: "Santiago de Chile",
    country: "Chile",
    countryCode: "CL",
  },
  {
    city: "Puerto Cabello",
    country: "Venezuela",
    countryCode: "VE",
  },
  {
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
  },
  {
    city: "Bogota",
    country: "Colombia",
    countryCode: "CO",
  },
  {
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
  },
  {
    city: "Ciudad de Mexico",
    country: "Mexico",
    countryCode: "MX",
  },
];
const Main = () => {
  const navigate = useNavigate();

  const onClickHandler = (city, countryCode) => {
    navigate(`/city/${countryCode}/${city}`);
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={citiesMock} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default Main;
