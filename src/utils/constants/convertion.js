import convertUnits from "convert-units";

const toCelsius = (temp) =>
  Number(convertUnits(temp).from("K").to("C").toFixed());

export { toCelsius };
