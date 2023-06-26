import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import CityList from "../../components/CityList";
import AppFrame from "../../components/AppFrame";
import { getCities } from "../../services/mock/cities";

const cities = getCities();
const Main = ({ data, actions }) => {
  const navigate = useNavigate();

  const onClickHandler = (city, countryCode) => {
    navigate(`/city/${countryCode}/${city}`);
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          data={data}
          actions={actions}
          cities={cities}
          onClickCity={onClickHandler}
        />
      </Paper>
    </AppFrame>
  );
};

export default Main;
