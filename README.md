# OIBSIP-LEVEL-1-TASK-3

HTML main.html
<!DOCTYPE html>
<html>

<head>
    <title>Temperature Converter</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div class="container">
        <h1>Temperature Converter</h1>
        <form>
            <label for="temperature">Enter temperature:</label>
            <input type="text" id="temperature" placeholder="Enter temperature" required>

            <label for="unit">Select unit:</label>
            <select id="unit">
				<option value="Celsius">Celsius</option>
				<option value="Fahrenheit">Fahrenheit</option>
			</select>

            <button type="button" id="convert-btn">Convert</button>

            <div id="result"></div>
        </form>
    </div>

    <script src="script.js"></script>
</body>

</html>

CSS style.css

body {
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #4d1515, #1a264b);
    color: #FFF;
    font-family: Arial, sans-serif;
}

.container {
    max-width: 500px;
    margin: 0 auto;
    padding: 50px;
}

h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 18px;
    margin-bottom: 10px;
}

input {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
}

select {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
}

button {
    background-color: #1EC6D9;
    color: #FFF;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
}

button:hover {
    background-color: #149BA3;
}

#result {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

JS script.js
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
