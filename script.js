const convertBtn = document.getElementById("convert-btn");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", function() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (isNaN(temperature)) {
    alert("Please enter a valid number for temperature.");
    return;
  }

  let convertedTemperature;
  let resultUnit;
  if (unit === "Celsius") {
    convertedTemperature = temperature * 1.8 + 32;
    resultUnit = "Fahrenheit";
  } else {
    convertedTemperature = (temperature - 32) / 1.8;
    resultUnit = "Celsius";
  }

  resultDiv.textContent = `${convertedTemperature.toFixed(2)}° ${resultUnit}`;
});
