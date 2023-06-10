const cities = [
  {
    city: "New York",
    country: "United States 🇺🇸",
    countryCode: "US",
  },
  {
    city: "Santiago de Chile",
    country: "Chile 🇨🇱",
    countryCode: "CL",
  },
  {
    city: "Puerto Cabello",
    country: "Venezuela 🇻🇪",
    countryCode: "VE",
  },
  {
    city: "Buenos Aires",
    country: "Argentina 🇦🇷",
    countryCode: "AR",
  },
  {
    city: "Bogota",
    country: "Colombia 🇨🇴",
    countryCode: "CO",
  },
  {
    city: "Madrid",
    country: "Spain 🇪🇸",
    countryCode: "ES",
  },
  {
    city: "Ciudad de Mexico",
    country: "Mexico 🇲🇽",
    countryCode: "MX",
  },
];

const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((city) => city.countryCode === countryCode)[0].country;

const getCities = () => cities;

export { getCities, getCountryNameByCountryCode };
