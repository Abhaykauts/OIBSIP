document.getElementById("convert-btn").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temperature)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let convertedTemp;
  let convertedUnit;

  switch (unit) {
    case "celsius":
      convertedTemp = (temperature * 9) / 5 + 32;
      convertedUnit = "Fahrenheit";
      break;
    case "fahrenheit":
      convertedTemp = ((temperature - 32) * 5) / 9;
      convertedUnit = "Celsius";
      break;
    case "kelvin":
      convertedTemp = temperature - 273.15;
      convertedUnit = "Celsius";
      break;
    default:
      result.textContent = "Invalid conversion.";
      return;
  }

  result.textContent = `Converted Temperature: ${convertedTemp.toFixed(
    2
  )} ${convertedUnit}`;
});
