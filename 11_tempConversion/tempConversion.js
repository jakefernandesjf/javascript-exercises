const convertToCelsius = function (fahrenheit) {
  const conversion = (fahrenheit - 32) * (5 / 9);
  const rounded = Number(conversion.toFixed(1));
  return rounded;
};

const convertToFahrenheit = function (celsius) {
  const conversion = celsius * (9 / 5) + 32;
  const rounded = Number(conversion.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
