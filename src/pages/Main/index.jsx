import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import CityList from "../../components/CityList";
import AppFrame from "../../components/AppFrame";
import { getCities } from "../../services/mock/cities";

const cities = getCities();
const Main = () => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(
    (city, countryCode) => {
      navigate(`/city/${countryCode}/${city}`);
    },
    [navigate]
  );
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={cities}
          onClickCity={onClickHandler}
        />
      </Paper>
    </AppFrame>
  );
};

export default Main;
