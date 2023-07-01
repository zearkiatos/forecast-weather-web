import React, { memo } from "react";
import PropTypes from "prop-types";

import List from "@mui/material/List";
import Alert from "@mui/material/Alert";
import useCityList from "../../hooks/useCityList";
import { getCityCode } from "../../utils/constants/cities";
import CityItem from "../CityItem";

const renderCity =
  (eventOnClickCity) =>
  ({ city, countryCode, country }, weather) => {
    return (
      <CityItem
        weather={weather}
        eventOnClickCity={eventOnClickCity}
        city={city}
        countryCode={countryCode}
        country={country}
      />
    );
  };

const CityList = ({ cities, onClickCity, data, actions }) => {
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, actions);
  const onCloseError = () => setError(null);
  return (
    <div>
      {error && (
        <Alert onClose={onCloseError} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((city) =>
          renderCity(onClickCity)(
            city,
            allWeather[getCityCode(city.city, city.countryCode)]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

const CityListMemo = memo(CityList);

CityListMemo.displayName = "CityListMemo";

export default CityListMemo;
